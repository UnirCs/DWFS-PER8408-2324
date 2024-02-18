# API de una calculadora online

En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:
- Sumar N elementos (2+2, 2+2+2).
- Restar N elementos (2-2, 2-2-2).
- Multiplicar 2 elementos (2x2).
- Dividir 2 elementos (2/2).
- Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
- Potencia N-ésima de un número (2^2, 3^3, 4^4).
- Detalle de operacion

Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.

**Recursos identificados:**
- Operaciones (operations): Representa las operaciones (se identifican diferente por el operationType)

  | Método HTTP | URI                       | Query Params | Cuerpo de la Petición                               | Cuerpo de la Respuesta                                                                              | Códigos de Respuesta                                                   |
  |-------------|---------------------------|--------------|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
  | POST        | /operations               | N/A          | `{"operationType": "sumar", "elements": [2,2,2]}`   | `{"operationId": 1, "operationType": "sumar", "elements" = [2,2,2], "result": 6}]}`                 | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error          |
  | GET         | /operations               | N/A          | N/A                                                 | `{"operations": [{"operationId": 1, "operationType": "sumar", "elements" = [2,2,2], "result": 6}]}` | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error               |
  | GET         | /operations/{operationId} | N/A          | N/A                                                 | `{"operationId": 1, "operationType": "sumar", "elements" = [2,2,2], "result": 6}`                   | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                 |
  