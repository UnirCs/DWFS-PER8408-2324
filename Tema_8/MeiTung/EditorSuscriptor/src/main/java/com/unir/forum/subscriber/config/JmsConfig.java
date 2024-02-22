package com.unir.forum.subscriber.config;

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

    @Value("${forum.userId}")
    private String clientId;

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
     * Este bean devuelve un objeto JMSTemplate que se encarga de enviar los mensajes a los tópicos.
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
        jmsTemplate.setPubSubDomain(true); // Esta propiedad es para poder mandar mensajes a tópicos (varios subscriptores)
        return jmsTemplate;
    }

    /**
     * Este bean devuelve un objeto JMSTemplate que se encarga de enviar los mensajes a las colas.
     * Esto lo sabemos porque hemos configurado la propiedad setPubSubDomain a false (por defecto es false).
     * JMS son las siglas de Java Message Service. Es una API de Java que permite la comunicación asíncrona entre procesos o aplicaciones.
     * Es utilizado para absorber la complejidad de la comunicación entre aplicaciones.
     * Obviamos las complejidades específicas de la plataforma y nos centramos en la lógica de negocio.
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
     * Este bean se modifica para que el clientId sea único para cada suscriptor.
     * El clientId se obtiene del archivo application.yml.
     *
     * @param connectionFactory - ConnectionFactory para la conexión con el broker
     * @param configurer - Configurador para el factory
     * @return JmsListenerContainerFactory para las colas
     */
    @Bean(name = "jmsFactoryQueue")
    public JmsListenerContainerFactory<?> jmsFactoryQueue(
            ConnectionFactory connectionFactory,
            DefaultJmsListenerContainerFactoryConfigurer configurer) {
        DefaultJmsListenerContainerFactory factory = new DefaultJmsListenerContainerFactory();
        configurer.configure(factory, connectionFactory);
        factory.setClientId(clientId);
        return factory;
    }

    /**
     * Este bean se encarga de recibir mensajes de los tópicos.
     * Configuramos setPubSubDomain a true para indicar que es para tópicos.
     * Podemos usar la anotación @JmsListener en la clase SubscriberService para suscribirnos a tópicos.
     *
     * @param connectionFactory - ConnectionFactory para la conexión con el broker
     * @param configurer - Configurador para el factory
     * @return JmsListenerContainerFactory para los tópicos
     */
    @Bean(name = "jmsFactoryTopic")
    public JmsListenerContainerFactory<?> jmsFactoryTopic(
            ConnectionFactory connectionFactory,
            DefaultJmsListenerContainerFactoryConfigurer configurer) {
        DefaultJmsListenerContainerFactory factory = new DefaultJmsListenerContainerFactory();
        configurer.configure(factory, connectionFactory);
        factory.setPubSubDomain(true);
        return factory;
    }
}
