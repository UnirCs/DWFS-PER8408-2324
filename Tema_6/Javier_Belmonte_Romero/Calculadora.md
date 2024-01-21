# API de una calculadora online

Las operaciones que la API debe soportar son las siguientes:
- Sumar N elementos (2+2, 2+2+2).
- Restar N elementos (2-2, 2-2-2).
- Multiplicar 2 elementos (2x2).
- Dividir 2 elementos (2/2).
- Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
- Potencia N-ésima de un número (2^2, 3^3, 4^4).
- Detalle de operacion

**Recursos identificados:**
- Operación matemática (operations): Representa una operación matemática realizada por la calculadora.
- Suma (additions): Representa una Suma realizada por la calculadora.
- Resta (substractions): Representa una Resta realizada por la calculadora.
- Multiplicación (multiplications): Representa una Multiplicación realizada por la calculadora.
- División (divisions): Representa una Divisón realizada por la calculadora.
- Raíz (roots): Representa una Raíz realizada por la calculadora.
- Potencia (powers): Representa una Potencia realizada por la calculadora.

| Método HTTP         | URI                           | Query Params  | Cuerpo de la Petición                       | Cuerpo de la Respuesta                                                                         | Códigos de Respuesta                                      |
|---------------------|-------------------------------|---------------|---------------------------------------------|------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| POST                | /additons                     | N/A           | `{"numbers": [2,2,2]}`                      | `{"operationId": 1, "result": 6}`                                                              | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error  |
| POST                | /substractions                | N/A           | `{"numbers": [6,2,1]}`                      | `{"operationId": 2, "result": 3}`                                                              | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error  |
| POST                | /multiplications              | N/A           | `{"first_number": 2, "second_number": 3}`   | `{"operationId": 3, "result": 6}`                                                              | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error  |
| POST                | /divisions                    | N/A           | `{"first_number": 6, "second_number": 3}`   | `{"operationId": 4, "result": 2}`                                                              | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error  |
| POST                | /roots                        | N/A           | `{"number": 9, "root": 2}`                  | `{"operationId": 5, "result": 3}`                                                              | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error  |
| POST                | /powers                       | N/A           | `{"number": 2, "exponent": 3}`              | `{"operationId": 6, "result": 8}`                                                              | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error  |
| GET                 | /operations/{operationId}     | N/A           | N/A                                         | `{"opearationId": 5, "operation": "root", "details": [{"number": 9, "root": 2, "result": 3}]}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error    |
