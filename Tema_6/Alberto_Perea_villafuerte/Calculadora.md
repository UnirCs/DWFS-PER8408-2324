# API de una calculadora online

En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:
- 1 Sumar N elementos (2+2, 2+2+2).
- 2 Restar N elementos (2-2, 2-2-2).
- 3 Multiplicar 2 elementos (2x2).
- 4 Dividir 2 elementos (2/2).
- 5 Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
- 6 Potencia N-ésima de un número (2^2, 3^3, 4^4).
- 7 Detalle de operacion

Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.

-------------------

### Recursos identificados ###

- **Operaciónes (operaciones):** Por medio del cuerpo de petición si el campo operaciones se envia un numero realiza las siguientes operaciones de :
1- suma, 2- Resta, 3- división, 4-dividir, 5- raiz-esima, 6-potencia nesima.


| Método HTTP                            | URI                   | Query Params  | Cuerpo de la Petición                                              | Cuerpo de la Respuesta                                                                | Códigos de Respuesta                                    |
|----------------------------------------|-----------------------|---------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------|
| POST                                   | /operaciones          | N/A			 | `{"operacion": 1, "numeros": [2, 2]}`                              | `{"operaciones": [{"id": 1, "resultado": 4, "operacion": "SUMA"}]}`           		  | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error   |
| POST                                   | /operaciones          | N/A			 | `{"operacion": 5, "numeros": [2, 16]}`                             | `{"operaciones": [{"id": 2, "resultado": 4, "operacion": "RAIZ CUADRADA"}]}`          | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error   |
| POST                                   | /operaciones          | N/A			 | `{"operacion": 3, "numeros": [10, 2]}`                             | `{"operaciones": [{"id": 3, "resultado": 4, "operacion": "MULTIPLICACION"}]}`         | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error   |
| GET                                    | /operaciones          | N/A           | N/A                                                                | `{"operaciones": [{"id": 1, "resultado": 4, "operacion": "SUMA"},{"id": 2, "resultado": 4, "operacion": "RAIZ CUADRADA"},{"id": 3, "resultado": 4, "operacion": "MULTIPLICACION"}]}` 				  | 200 OK<br/>404 Not Found<br/>500 Internal Server Error    |
| GET                                    | /operaciones/{operacionId}     | N/A           | N/A                                                       | `{"operaciones": [{"id": 1, "resultado": 4, "operacion": "SUMA"}]}` 				  | 200 OK<br/>404 Not Found<br/>500 Internal Server Error    |

