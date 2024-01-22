# Implementación de un modelo editor-suscriptor

En este ejercicio vamos a implementar un modelo de editor-suscriptor. Para ello vamos a utilizar un servidor de mensajería asíncrona (ActiveMQ) y dos microservicios, uno que publicará mensajes en un topic y otro que los consumirá.
Utilizaremos topics para simular los diferentes temas de un foro. Además utilizaremos colas para implementar un sistema de notificaciones de mensajes privados.

En este ejercicio hay dos microservicios y cada uno tiene un rol:

- **publisher**: Se asocia a la figura del profesor. Puede publicar mensajes en cualquier topic. Además, puede enviar mensajes privados a cualquier alumno.
- **subscriber**: Se asocia a la figura del alumno. Puede suscribirse a un topic y recibir los mensajes publicados en él. Además, puede recibir mensajes privados pero no enviarlos.

## Parte I: Descarga y setup de ActiveMQ

Lo primero que haremos será descargar e instalar ActiveMQ a través de esta [imagen Docker](https://hub.docker.com/r/symptoma/activemq). Para ello, ejecutaremos el siguiente comando:

```bash
docker pull symptoma/activemq
```

Una vez hayamos descargado la imagen crearemos un contenedor con el siguiente comando:

```bash
docker run --name dwfs-activemq -it \
-p 61616:61616 \
-p 8161:8161 \
-e ACTIVEMQ_USERNAME=amquser \
-e ACTIVEMQ_PASSWORD=amqpwd \
-e ACTIVEMQ_WEBADMIN_USERNAME=dwfs \
-e ACTIVEMQ_WEBADMIN_PASSWORD=unir \
-d symptoma/activemq:latest
```

Con ese comando estamos creando un contenedor llamado ``dwfs-activemq`` que expone los puertos ``61616`` (necesario para que las aplicaciones Java se conecten) y ``8161`` (necesario para poder acceder a la interfaz web). Además, estamos definiendo las credenciales de acceso al servidor de mensajería. Hay dos pares de credenciales. El primero es para acceder al servidor de mensajería (usado por aplicaciones) y el segundo para acceder a la interfaz web (usado por nosotros).

Puedes comprobar que ActiveMQ está funcionando correctamente accediendo a la interfaz web a través de la URL ``http://localhost:8161``. Para ello, utiliza las credenciales ``dwfs/unir``.

## Parte II: Implementación del microservicio publisher

Todo el código del editor está disponible como código de apoyo en [este repositorio](https://github.com/UnirCs/back-end-forum-pub).

Utilizaremos Spring Initializr para crear el proyecto con la siguiente configuración:

- Project: Maven Project
- Language: Java
- Spring Boot: Última versión que no sea una versión snapshot
- Group: com.unir.forum
- Artifact: publisher
- Name: publisher
- Description: Publisher
- Package name: com.unir.forum.publisher
- Packaging: Jar
- Versión de Java: 17
- Dependencias: Spring Web, Spring for Apache ActiveMQ 5, Spring Boot DevTools, Lombok

Con esta configuración, Spring Initializr nos creará un proyecto Maven con las dependencias necesarias para crear un microservicio que exponga un API REST y que se conecte a un servidor de mensajería ActiveMQ.
Descargaremos el proyecto y lo importaremos en nuestro IDE favorito.

Una vez importado, generaremos la siguiente estructura de archivos:

```
src
├── main
│   ├── java
│   │   └── com
│   │       └── unir
│   │           └── forum
│   │               └── publisher
│   │                   ├── PublisherApplication.java
│   │                   ├── config
│   │                   │   └── JmsConfig.java
│   │                   ├── controller
│   │                   │   └── PublisherController.java
│   │                   ├── model
│   │                   │   └── DirectMessage.java
│   │                   │   └── ForumMessage.java
│   │                   ├── service
│   │                   │   └── PublisherService.java
│   ├── resources
│   │    └── application.yml
```

A continuación revisaremos el contenido de estos archivos.

### Application.yml

Este archivo contiene la configuración de nuestro microservicio. En este caso, únicamente definiremos el puerto en el que se ejecutará el microservicio y la URL del servidor de mensajería ActiveMQ.

```yaml
server:
  port: 8088

spring:
  active-mq:
    broker-url: tcp://localhost:61616
    user: amquser
    password: amqpwd

forum:
  userId: profesor
```

El starter de ActiveMQ para Spring espera que la configuración del servidor de mensajería se encuentre en el apartado ``spring.active-mq``. Por otro lado, hemos definido una propiedad ``forum.userId`` que utilizaremos para identificar al usuario que publica los mensajes.

### PublisherApplication.java

Este archivo contiene la clase principal de nuestro microservicio. En este caso, no tendremos que modificar nada.

### JmsConfig.java

Este archivo contiene la configuración de Spring para conectarse al servidor de mensajería ActiveMQ. Trabajaremos con JMS, por lo que utilizaremos el bean ``JmsTemplate`` para enviar mensajes a los topics y colas de ActiveMQ. JMS es una API de Java que permite la comunicación entre aplicaciones Java a través de un servidor de mensajería, abstrayendo la implementación de la comunicación. Necesitaremos definir obligatoriamente un Bean ``ConnectionFactory`` que se encargará de crear las conexiones con el servidor de mensajería. Además, definiremos dos Beans ``JmsTemplate`` que nos permitirán enviar mensajes a los topics y colas de ActiveMQ.

```java
package com.unir.forum.publisher.config;

import jakarta.jms.ConnectionFactory;
import org.apache.activemq.ActiveMQConnectionFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.jms.DefaultJmsListenerContainerFactoryConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.config.DefaultJmsListenerContainerFactory;
import org.springframework.jms.config.JmsListenerContainerFactory;
import org.springframework.jms.core.JmsTemplate;

@Configuration
@EnableJms
public class JmsConfig {

    @Value("${spring.active-mq.broker-url}")
    private String brokerUrl;

    /**
     * Este bean es el que se encarga de establecer la conexión con el broker de ActiveMQ
     * Dado que estamos usando el starter de activeMQ, no es necesario configurar el usuario y la contraseña
     * Estos valores están indicados en el application.yml
     *
     * @return ConnectionFactory
     */
    @Bean
    public ConnectionFactory connectionFactory() {
        ActiveMQConnectionFactory activeMQConnectionFactory = new ActiveMQConnectionFactory();
        activeMQConnectionFactory.setBrokerURL(brokerUrl);
        return activeMQConnectionFactory;
    }


    /**
     * Este bean devuelve un objeto JMSTemplate que se encarga de enviar los mensajes a los topicos.
     * Esto lo sabemos porque hemos configurado la propiedad setPubSubDomain a true.
     * JMS son las siglas de Java Message Service. Es una API de Java que permite la comunicación asíncrona entre procesos o aplicaciones.
     * Es utilizado para absorber la complejidad de la comunicación entre aplicaciones. Obviamos las complejidades específicas de la plataforma y nos centramos en la lógica de negocio.
     *
     * @return JmsTemplate
     */
    @Bean(name = "topicJmsTemplate")
    public JmsTemplate topicJmsTemplate() {
        JmsTemplate jmsTemplate = new JmsTemplate();
        jmsTemplate.setConnectionFactory(connectionFactory());
        jmsTemplate.setPubSubDomain(true); // Esta propiedad es para poder mandar mensajes a topicos (varios subscriptores)
        return jmsTemplate;
    }


    /**
     * Este bean devuelve un objeto JMSTemplate que se encarga de enviar los mensajes a las colas.
     * Esto lo sabemos porque hemos configurado la propiedad setPubSubDomain a false (por defecto es false).
     * JMS son las siglas de Java Message Service. Es una API de Java que permite la comunicación asíncrona entre procesos o aplicaciones.
     * Es utilizado para absorber la complejidad de la comunicación entre aplicaciones. Obviamos las complejidades específicas de la plataforma y nos centramos en la lógica de negocio.
     *
     * @return JmsTemplate
     */
    @Bean(name = "queueJmsTemplate")
    public JmsTemplate queueJmsTemplate() {
        JmsTemplate jmsTemplate = new JmsTemplate();
        jmsTemplate.setConnectionFactory(connectionFactory());
        return jmsTemplate;
    }


    /**
     * Este bean devuelve un objeto JmsListenerContainerFactory que se encarga de recibir los mensajes de las colas.
     * Sabemos que es para las colas porque hemos configurado la propiedad setPubSubDomain a false (por defecto es false).
     * Además, setSubscriptionDurable a true indica que el subscriptor es duradero.
     * El ClientId es el identificador del subscriptor.
     * Gracias a este Bean podemos usar la anotación @JmsListener en los métodos de la clase PublisherService.
     *
     * @param connectionFactory - ConnectionFactory que se encarga de establecer la conexión con el broker de ActiveMQ
     * @param configurer - Bean gestionado por Spring. Se encarga de configurar el JmsListenerContainerFactory
     * @return JmsListenerContainerFactory
     */
    @Bean(name = "jmsFactoryQueue")
    public JmsListenerContainerFactory jmsFactoryQueue(
            ConnectionFactory connectionFactory,
            DefaultJmsListenerContainerFactoryConfigurer configurer) {
        DefaultJmsListenerContainerFactory factory = new DefaultJmsListenerContainerFactory();
        configurer.configure(factory, connectionFactory);
        factory.setClientId("profesor");
        return factory;
    }
}

```

Estamos definiendo varios Beans en esta configuración:

- ``connectionFactory``: Este bean es el que se encarga de establecer la conexión con el broker de ActiveMQ. Dado que estamos usando el starter de activeMQ, no es necesario configurar el usuario y la contraseña. Estos valores están indicados en el ``application.yml``.
- ``topicJmsTemplate``: Este bean devuelve un objeto ``JmsTemplate`` que se encarga de enviar los mensajes a los topics. Esto lo sabemos porque hemos configurado la propiedad ``setPubSubDomain`` a ``true``.
- ``queueJmsTemplate``: Este bean devuelve un objeto ``JmsTemplate`` que se encarga de enviar los mensajes a las colas. Esto lo sabemos porque hemos configurado la propiedad ``setPubSubDomain`` a ``false`` (por defecto es ``false``).
- ``jmsFactoryQueue``: Este bean devuelve un objeto ``JmsListenerContainerFactory`` que se encarga de recibir los mensajes de las colas. Sabemos que es para las colas porque hemos configurado la propiedad ``setPubSubDomain`` a ``false`` (por defecto es ``false``).

### PublisherController.java

Este archivo contiene el controlador REST de nuestro microservicio. En este caso, definiremos dos endpoints:

```java
package com.unir.forum.publisher.controller;

import com.unir.forum.publisher.model.DirectMessage;
import com.unir.forum.publisher.model.ForumMessage;
import com.unir.forum.publisher.service.PublisherService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
public class PublisherController {

    private final PublisherService publisherService;

    @Value("${forum.userId}")
    private String userId;

    /**
     * Envía un mensaje a un topic. Un topic es un canal de comunicación que puede tener varios suscriptores.
     *
     * @param topic - nombre del topic.
     * @param message - mensaje a enviar.
     * @return - respuesta de la petición.
     */
    @PostMapping(value="/api/topics/{topic}")
    public ResponseEntity<?> broadcastMessage(@PathVariable String topic, @RequestBody ForumMessage message){
        publisherService.publishToTopic(topic, String.format("%s: %s", userId, message.getMessage()));
        return ResponseEntity.ok().build();
    }


    /**
     * Envía un mensaje a una cola. Una cola es un canal de comunicación que tiene un único suscriptor.
     *
     * @param userId - id del usuario que recibirá el mensaje.
     * @param message - mensaje a enviar.
     * @return - respuesta de la petición.
     */
    @PostMapping(value="/api/direct-messages/{userId}")
    public ResponseEntity<?> directMessage(@PathVariable String userId, @RequestBody DirectMessage message){
        publisherService.publishToQueue(userId, message.getFormattedMessage());
        return ResponseEntity.ok().build();
    }
}

```

El primer endpoint permite enviar mensajes a un topic. Un topic es un canal de comunicación que puede tener varios suscriptores. El segundo endpoint permite enviar mensajes a una cola. Una cola es un canal de comunicación que tiene un único suscriptor (o, aunque tenga varios, solo uno recibirá el mensaje).

### Modelos

Los modelos que utilizaremos sirven para representar los dos tipos diferentes de mensajes que se pueden enviar:

```java
package com.unir.forum.publisher.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ForumMessage implements Serializable {
    private String message;
}
```

```java
package com.unir.forum.publisher.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DirectMessage implements Serializable {

    private String message;

    public String getFormattedMessage() {
        return String.format("Tu profesor te ha enviado un mensaje: %s", message);
    }
}
```

### PublisherService.java

Este archivo contiene la lógica de negocio de nuestro microservicio. En este caso, únicamente tendremos que implementar los dos métodos que se están usando en el controlador.

Además, añadiremos un tercero que nos permitirá recibir mensajes de la cola ActiveMQ asociada a los mensajes directos del profesor. Para ello, utilizaremos la anotación ``@JmsListener`` que nos permite definir un método que se ejecutará cada vez que se reciba un mensaje en la cola indicada. Esta anotación utiliza por detrás el Bean ``JmsListenerContainerFactory`` que hemos definido en la clase ``JmsConfig``.

```java
package com.unir.forum.publisher.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class PublisherService {

    private final JmsTemplate topicJmsTemplate;
    private final JmsTemplate queueJmsTemplate;

    /**
     * Publica un mensaje en un topic.
     * @param topic - nombre del topic.
     * @param message - mensaje a enviar.
     */
    public void publishToTopic(String topic, String message){
        topicJmsTemplate.convertAndSend(topic, message);
    }

    /**
     * Publica un mensaje en una cola.
     * @param queue - nombre de la cola.
     * @param message - mensaje a enviar.
     */
    public void publishToQueue(String queue, String message){
        queueJmsTemplate.convertAndSend(queue, message);
    }


    /**
     * Escucha los mensajes que llegan a una cola.
     * @param message - mensaje recibido.
     */
    @JmsListener( destination = "${forum.userId}")
    public void listenDirectMessage(String message) {
        log.info("Se ha recibido un mensaje privado: " + message);
    }

}
```

Observa que, en función del tipo de mensaje que queramos enviar, utilizaremos el ``JmsTemplate`` asociado a los topics o el asociado a las colas. Si solo quisiéramos enviar información a colas o a topics, no habría necesidad de definir más de un ``JmsTemplate``. Pero siempre que tengamos tipos de destino diferentes, necesitaremos más de un ``JmsTemplate``.

### Ejecución del microservicio

Una vez tenemos todo el código implementado, podemos utilizar nuestro IDE para ejecutar el microservicio. Es recomendable también hacer un build del proyecto mediante el comando ``mvn clean package``. Si todo ha ido bien, no deberíamos ver ningún tipo de error y el microservicio estaría desplegado en el puerto ``8088``. Para asegurar que la conectividad con ActiveMQ es correcta, podemos enviar un mensaje a la cola de mensajes directos del profesor. Para ello, ejecutaremos el siguiente comando:

```bash
curl --location 'http://localhost:8088/api/direct-messages/profesor' \
--header 'Content-Type: application/json' \
--data '{
    "message":"Hola que tal"
}'
```

En los logs de ejecución del microservicio deberíamos ver un mensaje similar a este:

```
<<Timestamp>>  INFO 53103 --- [ntContainer#0-1] c.u.f.p.service.PublisherService         : Se ha recibido un mensaje privado: Tu profesor te ha enviado un mensaje: Hola que tal
```

## Parte III: Implementación del microservicio subscriber

En caso de que te atasques realizando el ejercicio, puedes revisar el código de la solución (apoyo) en [este repositorio](https://github.com/UnirCs/back-end-forum-sub). No obstante se recomienda que intentes realizar el ejercicio por tu cuenta.

Utilizaremos Spring Initializr para crear el proyecto con la siguiente configuración:

- Project: Maven Project
- Language: Java
- Spring Boot: Última versión que no sea una versión snapshot
- Group: com.unir.forum
- Artifact: subscriber
- Name: subscriber
- Description: Subscriber
- Package name: com.unir.forum.subscriber
- Packaging: Jar
- Versión de Java: 17
- Dependencias: Spring Web, Spring for Apache ActiveMQ 5, Spring Boot DevTools, Lombok

Como puedes observar la configuración es similar, solo hay que cambiar las referencias al editor por las del suscriptor.

Una vez importado, generaremos la siguiente estructura de archivos:

```
src
├── main
│   ├── java
│   │   └── com
│   │       └── unir
│   │           └── forum
│   │               └── subscriber
│   │                   ├── SubscriberApplication.java
│   │                   ├── config
│   │                   │   └── JmsConfig.java
│   │                   ├── controller
│   │                   │   └── SubscriberController.java
│   │                   ├── model
│   │                   │   └── DirectMessage.java
│   │                   │   └── ForumMessage.java
│   │                   ├── service
│   │                   │   └── SubscriberService.java
│   ├── resources
│   │    └── application.yml
```

En este caso, para poder desplegar posteriormente más de un suscriptor, haremos algunos ajustes en el archivo ``application.yml``:

```yaml
server:
  port: ${PORT:8081}

spring:
  active-mq:
    broker-url: tcp://localhost:61616
    user: amquser
    password: amqpwd

forum:
  userId: ${USER:AnonymousUser}

```

Lo que estamos haciendo es definir dos variables de entorno que nos permitirán configurar el puerto y el userId del suscriptor. De esta forma, podremos desplegar varios suscriptores en el mismo equipo sin que haya conflictos de puertos o de userId.

A continuación revisaremos qué deben contener estos archivos. ¡En esta parte tendrás que implementar tú el código! No te preocupes, es muy similar al del editor.

### SubscriberApplication.java

Este archivo contiene la clase principal de nuestro microservicio. En este caso, no tendremos que modificar nada.

### JmsConfig.java

En esta ocasión, definiremos los siguientes beans en esta clase de configuración:

- ``connectionFactory``: Idéntico al que usamos en el editor.
- ``topicJmsTemplate``: Idéntico al que usamos en el editor.
- ``jmsFactoryQueue``: Muy similar al que usamos en el editor. Será necesario modificar el ``clientId`` para que sea único para cada suscriptor y se utilice el que hay definido en el fichero ``application.yml``. Para esto deberás usar la anotación ``@Value`` de Spring.
- ``jmsFactoryTopic``: Este bean devuelve un objeto ``JmsListenerContainerFactory`` que se encarga de recibir los mensajes de los topics. Sabemos que es para los topics porque configuraremos la propiedad ``setPubSubDomain`` a ``true``. Gracias a este Bean podemos usar la anotación ``@JmsListener`` en los métodos de la clase ``SubscriberService`` para suscribirnos a tópicos.

### SubscriberController.java

Deberás implementar un único endpoint, con la siguiente firma:

```java 
    @PostMapping(value="/api/topics/{topic}")
    public ResponseEntity<?> broadcastMessage(@PathVariable String topic, @RequestBody ForumMessage message){
    ...
    } 
```

Deberás hacer uso de un Bean de tipo ``SubscriberService`` para publicar el mensaje en el topic. Por otro lado, el formato del mensaje que se envía al topic debe ser ``<userId>: <message>``. Recuerda usar el userId que se ha definido en el fichero ``application.yml``.

### Modelos

Los modelos que utilizaremos son los mismos que en el editor.

### SubscriberService.java

En este caso el servicio tendrá 6 métodos: 

- Cuatro serán para escuchar mensajes recibidos en los tópicos ``tema1``, ``tema2``, ``tema3`` y ``tema4``.
- El quinto método será para escuchar mensajes recibidos en la cola asociada a los mensajes directos del suscriptor. Es decir, el valor de ``destination`` que tendremos que poner en la anotación ``@JmsListener`` será el userId del suscriptor. Recuerda que es variable y se debe referenciar al que se ha indicado en el fichero ``application.yml``.
- El sexto será para enviar mensajes a un tópico, en función de lo que se haya recibido en el controlador.

La lógica de los 5 primeros métodos es sencilla, simplemente se encargan de imprimir por pantalla el mensaje recibido. El sexto método es el que se encarga de enviar el mensaje al tópico correspondiente. Para ello, deberás utilizar el bean ``topicJmsTemplate``.

### Ejecución del microservicio

Una vez tenemos todo el código implementado, podemos utilizar nuestro IDE para ejecutar el microservicio. Es recomendable también hacer un build del proyecto mediante el comando ``mvn clean package``. Si todo ha ido bien, no deberíamos ver ningún tipo de error y el microservicio estaría desplegado en el puerto ``8081`` si no hemos definido variables de entorno. Para asegurar que la conectividad con ActiveMQ es correcta, podemos enviar un mensaje a la cola de mensajes directos del alumno. Asumamos que se llama ``pepe``. Para ello, ejecutaremos el siguiente comando:

```bash
curl --location 'http://localhost:8088/api/direct-messages/pepe' \
--header 'Content-Type: application/json' \
--data '{
    "message":"Hola que tal Pepe"
}'
```
En los logs de ejecución del microservicio suscriptor deberíamos ver un mensaje similar a este:

```
<<Timestamp>>  INFO 54935 --- [ntContainer#4-1] c.u.f.s.service.SubscriberService        : Se ha recibido un mensaje privado: Tu profesor te ha enviado un mensaje: Hola que tal Pepe
```

## Parte IV: Prueba de funcionamiento conjunta

Para probar que todo funciona correctamente y que la comunicación entre suscriptores y editores es eficaz, vamos a desplegar un microservicio editor y tres suscriptores a la vez.

El editor puede desplegarse a través del IDE, dado que solo es uno.

Para los suscriptores, tras haber realizado un ``mvn clean package``, podemos ejecutar los siguientes comandos si nos situamos en la carpeta ``target`` del directorio donde está el proyecto:

```bash
java -Dserver.port=8083 -Dforum.userId=cesareo -jar subscriber-0.0.1-SNAPSHOT.jar
```

```bash
java -Dserver.port=8084 -Dforum.userId=marcelo -jar subscriber-0.0.1-SNAPSHOT.jar
```

```bash
java -Dserver.port=8085 -Dforum.userId=julio -jar subscriber-0.0.1-SNAPSHOT.jar
```

Una vez desplegados los tres suscriptores, podemos enviar un mensaje a un topic y comprobar que los tres suscriptores reciben el mensaje. Para ello, ejecutaremos el siguiente comando:

Si es enviado por el profesor
```bash
curl --location 'http://localhost:8088/api/topics/tema2' \
--header 'Content-Type: application/json' \
--data '{
    "message":"Aqui os dejo el enunciado del ejercicio 2"
}'
```

Si es enviado por el alumno
```bash
curl --location 'http://localhost:8083/api/topics/tema2' \
--header 'Content-Type: application/json' \
--data '{
    "message":"Gracias profe"
}'
```

Si todo ha ido bien, deberíamos ver los mensajes que se envíen a topics en los logs de los tres suscriptores, pero no en el editor ya que no tiene ninguna suscripción activa a ningún topic.

Por otro lado, si el profesor (editor) envía un mensaje privado a un alumno, solo debería recibirlo el alumno al que se lo ha enviado. Para ello, ejecutaremos el siguiente comando:

## Parte IV: Entrega

La entrega del ejercicio consiste en:

- El código fuente del microservicio suscriptor que has desarrollado.
- Una captura de pantalla sencilla donde se aprecie que el microservicio editor y los tres suscriptores están desplegados y funcionando correctamente, y se muestren mensajes enviados y recibidos entre ellos.

## Información adicional

Si te quedaste con ganas de más, puedes revisar estos enlaces:

- [Queues VS Topics and examples](https://medium.com/geekculture/queues-vs-topics-and-examples-with-java-spring-boot-and-apache-activemq-d945c474bc3e)
- [RabbitMQ VS ActiveMQ](https://www.cloudamqp.com/blog/activemq-vs-rabbitmq-an-indepth-comparison.html#activemq-vs-rabbitmq-history-and-background)
- [Spring JMS](https://spring.io/guides/gs/messaging-jms/)
- [On the Fly subscriptions](https://stackoverflow.com/questions/50330350/spring-boot-activemq-programmatically-subscribe-to-topics-on-the-fly)
