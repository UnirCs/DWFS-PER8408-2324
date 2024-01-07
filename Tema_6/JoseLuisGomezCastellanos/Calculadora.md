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
- Operacion (opers): Representa una operacion hecha y guardada en el sistema.

| Método HTTP                            | URI                   | Query Params  | Cuerpo de la Petición                                              | Cuerpo de la Respuesta                                                                | Códigos de Respuesta                                    |
|----------------------------------------|-----------------------|---------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------|
| POST                                    | /opers                | N/A           | `{"operando1": 2, "operador": "suma", "operando2": 2}`                                                                | `{"operId": "5",  "operando1": 2, "operador": "suma", "operando2": 2, "resultado": 4, "fecha": "2024-01-05"}`           | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error   |
| GET                                    | /opers/{operId} | N/A           | N/A                                                                | `{"operId": "502",  "operando1": 2, "operador": "resta", "operando2": 2, "resultado": 0, "fecha": "2024-01-04"}`                | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |