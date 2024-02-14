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

| Método HTTP                            | URI                   | Query Params  | Cuerpo de la Petición                                 | Cuerpo de la Respuesta                | Códigos de Respuesta                                |
|----------------------------------------|-----------------------|---------------|-----------------------------------------|---------------------------------------|---------------------------------------------------|
| POST                                   | /sumas                 | N/A          | `[{"valor": 2}, {"valor": 4}, {"valor": 3}]`                           | `{"sumaId": 1, "valores": [{"valor": 2}, {"valor": 4}, {"valor": 3}], "resultado": 9}`             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST                                   | /restas                 | N/A           | `[{"valor": 4}, {"valor": 2}, {"valor": 1}]`                     | `{"restaId": 2, "valores": [{"valor": 4},{"valor": 2},{"valor": 1}],"resultado": 1} `             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST                                   | /multiplicaciones                 | N/A           | `{"multiplicando":4,"multiplicador":2}`                     | `{"multiplicacionId": 3, "multiplicando": 4, "multiplicador": 2, "resultado": 8}`             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST                                   | /divisiones                 | N/A           | `{"dividendo": 4, "divisor": 2} `                     | `{"divisionId": 4, "dividendo": 4, "divisor": 2, "resultado": 2}`             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST                                   | /raices                 | N/A           | `{"indice": 3, "radicando": 8}`                     | `{"raizId": 5, "indice": 3, "radicando": 8, "resultado": 2}`             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST                                   | /potencias                 | N/A           | `{"base": 3, "exponente": 2}`                     | `{"potenciaId": 6, "base": 3, "exponente": 2 "resultado": 9}`             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET                                    | /sumas/{sumaId}                | N/A | N/A                                                                | `{"sumaId": 1, "valores": [{"valor": 2}, {"valor": 4}, {"valor": 3}], "resultado": 9}`          | 200 OK<br/>404 Not Found<br/>500 Internal Server Error   |
| GET                                    | /restas/{restaId}                | N/A | N/A                                                                | `{"restaId": 2, "valores": [{"valor": 4},{"valor": 2},{"valor": 1}],"resultado": 1}`          | 200 OK<br/>404 Not Found<br/>500 Internal Server Error   |
| GET                                    | /multiplicaciones/{multiplicacionId}                | N/A | N/A                                        | `{"multiplicacionId": 3, "multiplicando": 4, "multiplicador": 2, "resultado": 8}`         | 200 OK<br/>404 Not Found<br/>500 Internal Server Error   |
| GET                                    | /divisiones/{divisionId}                | N/A | N/A                                        | `{"divisionId": 4, "dividendo": 4, "divisor": 2, "resultado": 2}`         | 200 OK<br/>404 Not Found<br/>500 Internal Server Error   |
| GET                                    | /raices/{raizId}                | N/A | N/A                                        | `{"raizId": 5, "indice": 3, "radicando": 8, "resultado": 2}`         | 200 OK<br/>404 Not Found<br/>500 Internal Server Error   |
| GET                                    | /potencias/{potenciaId}                | N/A | N/A                                        | `{"potenciaId": 6, "base": 3, "exponente": 2 "resultado": 9}`         | 200 OK<br/>404 Not Found<br/>500 Internal Server Error   |