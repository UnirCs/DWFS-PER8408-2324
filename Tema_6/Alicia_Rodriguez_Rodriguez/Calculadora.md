Ejercicio 1: API de una calculadora online
=============================================

Recursos identificados:
- operations: Representa las distintas operaciones (sumar, restar, multiplicar, dividir, raíz cuadrada y potencia). Se realizan las validaciones según el queryParam: operationType --> Tipo de operación, que pueden ser representadas por un identificador numérico de operación (Por ejemplo, 1-Suma, 2-Resta, etc.).

| Método HTTP | URI                       | Query Params | Request Body                               | Response Body                                                               | Códigos HTTP de respuesta |
|-------------|---------------------------|--------------|--------------------------------------------|-----------------------------------------------------------------------------|-------------------------|
| POST        | /operations               | N/A          | ``{"operationType": 1, numbers": [2, 2]}`` | ``{"result": 123}``                                                         | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| GET         | /operations/{operationId} | N/A          | N/A                                        | ``{"operationId": 1, "numbers": [2, 2], "operationType": 1, result": 123}`` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                   |
