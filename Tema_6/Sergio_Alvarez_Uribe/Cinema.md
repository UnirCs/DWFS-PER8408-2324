# API de un sistema de reserva de butacas de cine

En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los anteriores temas.

Las operaciones que la API debe soportar son las siguientes:
- Crear, eliminar y modificar películas.
- Crear, eliminar y modificar (parcialmente) salas.
- Crear, eliminar y modificar (parcialmente) usuarios.
- Crear una reserva para un usuario en una sala.
- Cancelar una reserva para un usuario en una sala.
- Modificar una reserva para un usuario en una sala.
- Registrar un pago de una reserva.







**Recursos identificados:**
- películas (movies): Representa las películas del cine.
- salas (rooms): Representa las salas del cine.
- usuarios (users): Representa los usuarios del cine.
- reservas (bookings): Representa las reservas de los usuarios en una sala.
- pagos (payments): represnta los registros de pagos de las reservas.  


| Método HTTP          | URI                    | Query Params  | Cuerpo de la Petición                                                                                                           | Cuerpo de la Respuesta                                                                                                                        | Códigos de Respuesta                                                            |
|----------------------|------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| POST                 | /movies                | N/A           | `{"titulo": "La máscar del zorro", "imagen": "url", "sinopsis": "Es la historia ...", "genero":"aventura", "puntuacion": "8"}`  | `{"movieId": 1, "titulo": "La máscar del zorro", "imagen": "url", "sinopsis": "Es la historia ...", "genero":"aventura", "puntuacion": "8"}`  | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE               | /movies/{movieId}      | N/A           | N/A                                                                                                                             | N/A                                                                                                                                           | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| PUT                  | /movies/{movieId}      | N/A           | `{"titulo": "LA MASCARA DEL ZORRO", "imagen": "newurl", "sinopsis": "Erase una vez ...", "genero":"romance", "puntuacion": "9"}`| `{"movieId": 1, "titulo": "LA MASCARA DEL ZORRO", "imagen": "newurl", "sinopsis": "Erase una vez ...", "genero":"romance", "puntuacion": "9"}`| 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| POST                 | /rooms                 | N/A           | `{"sala": "naranja", "sillas": "100"}`                                                                                          | `{"roomId": 1, "sala": "naranja", "sillas": "100"}`                                                                                           | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE               | /rooms/{roomId}        | N/A           | N/A                                                                                                                             | N/A                                                                                                                                           | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| PATCH                | /rooms/{roomId}        | N/A           | `{"sillas": "120"}`                                                                                                             | `{"roomId": 1, "sala": "naranja", "sillas": "120"}`                                                                                           | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| POST                 | /users                 | N/A           | `{"nombre": "Sergio Alvarez", "Edad": "36"}`                                                                                    | `{"userId": 1, "nombre": "Sergio Alvarez", "Edad": "36"}`                                                                                     | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE               | /users/{userId}        | N/A           | N/A                                                                                                                             | N/A                                                                                                                                           | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| PATCH                | /users/{userId}        | N/A           | `{"nombre": "Sergio Iván Alvarez"}`                                                                                             | `{"userId": 1, "nombre": "Sergio Iván Alvarez", "Edad": "36"}`                                                                                | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| POST                 | /bookings              | N/A           | `{"roomId": 1, "userId": "1", "funcion": "02/04/2024 07:30"}`                                                                   | `{"bookingId": 1, "roomId": 1, "userId": "1", "funcion": "02/04/2024 07:30"}`                                                                 | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE               | /bookings/{bookingId}  | N/A           | N/A                                                                                                                             | N/A                                                                                                                                           | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| PUT                  | /bookings/{bookingId}  | N/A           | `{"roomId": 1, "userId": "1", "funcion": "05/04/2024 08:00"}`                                                                   | `{"bookingId": 1, "roomId": 1, "userId": "1", "funcion": "05/04/2024 08:00"}`                                                                 | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| POST                 | /payments              | N/A           | `{"bookingId": 1}`                                                                                                              | `{"paymentId": 1, "bookingId": 1, "sala": "naranja", "nombre": "Sergio Alvarez", "funcion": "02/04/2024 07:30"}`                              | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |





| POST                                   | /operations            | N/A           | `{"operations": "subs", "operands": [2, 2, 2]}`                     | `{"resultsId": 2, "results": -2}`                                                       | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST                                   | /operations            | N/A           | `{"operations": "mult", "operands": [2, 2]}`                        | `{"resultsId": 3, "results": 4}`                                                        | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST                                   | /operations            | N/A           | `{"operations": "div", "operands": [2, 2]}`                         | `{"resultsId": 4, "results": 1}`                                                        | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST                                   | /operations            | N/A           | `{"operations": "root", "operands": [2, 4]}`                        | `{"resultsId": 5, "results": 2}`                                                        | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST                                   | /operations            | N/A           | `{"operations": "pow", "operands": [2, 2]}`                         | `{"resultsId": 6, "results": 4}`                                                        | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| GET                                    | /operations/{resultsId}| N/A           | N/A                                                                 | `{"resultsId": 2, "results": -2}`                                                                      | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error   |

