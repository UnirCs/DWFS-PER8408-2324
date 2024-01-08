# Precarga de datos en H2

Al trabajar con microservicios en Spring Boot y emplear Spring Data para la gestión de datos, uno de los aspectos fundamentales es la configuración de la base de datos. Una opción popular para entornos de desarrollo y pruebas es la base de datos en memoria H2.

Un aspecto de configuración crucial en este contexto es ``spring.jpa.hibernate.auto``, presente en el archivo ``application.properties`` o ``application.yml``. Esta propiedad controla la generación y manejo del esquema de la base de datos. Las opciones disponibles para esta propiedad son:

- ``create``: Crea el esquema de la base de datos, destruyéndolo primero si ya existe. Útil para entornos de prueba.
- ``create-drop``: Similar a create, pero además, el esquema se elimina al cerrar la sesión de Hibernate.
- ``update``: Actualiza el esquema si es necesario, sin borrar los datos existentes.
- ``validate``: Valida el esquema, sin realizar cambios en la base de datos.
- ``none``: No realiza ninguna acción sobre el esquema.

Nosotros utilizaremos típicamente las opciones ``create`` o ``create-drop`` para entornos de desarrollo y pruebas, y ``validate`` para entornos de producción.

Para la precarga de datos en una base de datos H2, una práctica común es utilizar un archivo ``data.sql`` ubicado en el directorio ``src/main/resources``. Este archivo contiene instrucciones SQL que se ejecutan automáticamente al iniciar la aplicación. Por ejemplo, si se configura la propiedad ``hibernate.hbm2ddl.auto`` en ``create`` o ``create-drop``, Spring Boot ejecutará los comandos SQL en ``data.sql`` después de crear el esquema de base de datos, permitiendo así la precarga de datos para pruebas o desarrollo.

Ahora, considerando el modelo de datos obtenido de las anotaciones de Jakarta del [código de apoyo](https://github.com/UnirCs/back-end-inventory-products/blob/master/src/main/java/com/unir/products/model/pojo/Product.java), podemos crear un archivo ``data.sql`` con instrucciones INSERT que se alineen con este modelo. El modelo Product incluye campos como id, name, description, country, y visible. Un ejemplo de archivo ``data.sql`` podría ser:

```sql
INSERT INTO products (id, name, description, country, visible) VALUES (1, 'iPhone 14', 'Estupendo iPhone 14', 'ES', true);
INSERT INTO products (id, name, description, country, visible) VALUES (2, 'iPhone 13', 'Estupendo iPhone 13', 'PT', true);
INSERT INTO products (id, name, description, country, visible) VALUES (3, 'iPhone 12', 'Estupendo iPhone 12', 'DE', false);
INSERT INTO products (id, name, description, country, visible) VALUES (4, 'iPhone 11', 'Estupendo iPhone 11', 'AR', true);
```

## Ejercicio

Añade un archivo ``data.sql`` en el directorio ``src/main/resources`` del proyecto que has realizado para implementar la calculadora, con instrucciones INSERT que se alineen con el modelo de datos que hayas realizado. Asegúrate de que el archivo ``application.properties`` o ``application.yml`` incluya la propiedad ``spring.jpa.hibernate.ddl-auto`` con el valor ``create`` o ``create-drop``.

## Entrega

La entrega consiste en el código fuente del proyecto de la calculadora, incluyendo las modificaciones de este ejercicio.