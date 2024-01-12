# Traducción de peticiones con Spring Cloud Gateway.

Cuando se trabaja con APIs y servicios web, la elección del método HTTP adecuado para enviar peticiones a un servidor es crucial para garantizar la eficiencia, seguridad y claridad en la comunicación.

En algunos casos, es preferible utilizar peticiones POST en lugar de GET, PUT, PATCH o DELETE por varias razones:

- **Seguridad y Ocultación de Datos**: Las peticiones POST transmiten sus datos en el cuerpo de la petición, no en la URL, como ocurre con GET. Esto ayuda a ocultar datos sensibles y aporta una capa adicional de seguridad.
- **Capacidad de Datos**: POST no tiene las mismas limitaciones de tamaño que GET, lo que lo hace más adecuado para enviar grandes cantidades de datos.

Si tenemos esto en cuenta, tiene sentido pensar que, desde un frontal, las peticiones que se dirijan al back-end sean únicamente POST. No obstante si nuestro back-end ha sido construido, por ejemplo, con microservicios que exponen APIs REST bien definidas, encontramos un problema claro.

En estos entornos puede surgir la necesidad de transformar peticiones POST para que se alineen con los estándares REST. Aquí es donde un gateway como Spring Cloud Gateway puede ser extremadamente útil. Spring Cloud Gateway puede actuar como un **Anti Corruption Layer (ACL)**, asegurando que las peticiones que no cumplen con los estándares REST sean adecuadamente transformadas o adaptadas antes de llegar al microservicio de destino.

El ACL puede modificar las peticiones POST para:

- Asegurar que se sigan los estándares REST en términos de rutas de acceso y estructura de datos.
- Transformar peticiones POST en GET, PUT, DELETE o PATCH si es necesario, basado en la lógica de negocio y el diseño de la API.

Spring Cloud Gateway ofrece una forma elegante y eficiente de implementar esta funcionalidad, aprovechando sus capacidades de enrutamiento y filtrado.

<div align="center">
  
![TraduccionCW](https://github.com/UnirCs/DWFS-PER8408-2324/assets/115072043/2b4259f9-77b4-49a3-bf66-f5191ec424d9)

</div>

## Ejercicio

Revisa el [código de apoyo](https://github.com/UnirCs/back-end-cloud-gateway-filters) que contiene la implementación de un Gateway que traduce peticiones POST a POST y GET. Revisa la sesión de clase en la que se habla de este componente y a continuación:

- Implementa un ``ServerHttpRequestDecorator`` para traducir una ``GatewayRequest`` de POST a PUT.
- Implementa un ``ServerHttpRequestDecorator`` para traducir una ``GatewayRequest`` de POST a DELETE.

## Información adicional

Si deseas información adicional puedes revisar estos recursos:
- [Documentación de Spring Cloud Gateway para creación de filtros](https://spring.io/blog/2022/08/26/creating-a-custom-spring-cloud-gateway-filter/)
- [Tutorial de Baeldung para crear filtros de Spring Cloud Gateway](https://www.baeldung.com/spring-cloud-custom-gateway-filters)
- [Artículo en Medium sobre convertir peticiones POST en GET](https://medium.com/swlh/spring-cloud-gateway-custom-filter-to-convert-post-request-to-get-request-b9a08e5fe8cb)


## Entrega

La entrega consiste en el código de la implementación del cloud gateway (únicamente la carpeta src y archivo pom.xml).

Ten en cuenta que, para probar que todo funciona correctamente, deberás tener en ejecución Eureka y al menos un microservicio destino.
