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
- operaciones (operations): Representa el tipo de operación que se quiere realizar: suma (add), resta (subs), multiplicación (mult), dividir(div), raíz(root), potencia(pow).
- operandos (operands): Es un arreglo que incluye todos los operandos que se utilizaran para la respectiva operación.
- resultados (results) 


| Método HTTP                            | URI                    | Query Params  | Cuerpo de la Petición                                               | Cuerpo de la Respuesta                                                                | Códigos de Respuesta                                                            |
|----------------------------------------|------------------------|---------------|---------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| POST                                   | /operations            | N/A           | `{"operations": "add", "operands": [2, 2, 2]}`                      | `{"resultsId": 1, "results": 6}`                                                        | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST                                   | /operations            | N/A           | `{"operations": "subs", "operands": [2, 2, 2]}`                     | `{"resultsId": 2, "results": -2}`                                                       | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST                                   | /operations            | N/A           | `{"operations": "mult", "operands": [2, 2]}`                        | `{"resultsId": 3, "results": 4}`                                                        | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST                                   | /operations            | N/A           | `{"operations": "div", "operands": [2, 2]}`                         | `{"resultsId": 4, "results": 1}`                                                        | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST                                   | /operations            | N/A           | `{"operations": "root", "operands": [2, 4]}`                        | `{"resultsId": 5, "results": 2}`                                                        | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST                                   | /operations            | N/A           | `{"operations": "pow", "operands": [2, 2]}`                         | `{"resultsId": 6, "results": 4}`                                                        | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| GET                                    | /operations/{resultsId}| N/A           | N/A                                                                 | `{"resultsId": 2, "results": -2}`                                                                      | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error   |

