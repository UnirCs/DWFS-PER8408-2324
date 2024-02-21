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
- Pelicula (movies): Representa una pelicula del cine.
- Sala (rooms): Representa una sala del cine.
- Usuario (users): Representa un usuario del cine.
- Reserva (reservations): Representa una reserva de una sala por un usuario.
- Pago (payments): Representa un pago de la reserva de un usuario.

| Método HTTP | URI                           | Query Params | Cuerpo de la Petición                                                                | Cuerpo de la Respuesta                                                                                   | Códigos de Respuesta                                                         |
|-------------|-------------------------------|--------------|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| POST        | /movies                       | N/A          | `{"name": "Nemo", "room": 1}`                                                        | `{"moovieId": 1, "name": "Nemo", "room": 1}`                                                             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error                |
| DELETE      | /movies/{movieId}             | N/A          | N/A                                                                                  | `{"message": "Movie Deleted"}`                                                                           | 200 OK<br/>404 Not Found<br/>400 Bad Request<br/>500 Internal Server Error   |
| PUT         | /movies/{movieId}             | N/A          | `{"name": "Nemo y Dory", "room": 1}`                                                 | `{"moovieId": 1, "name": "Nemo y Dory", "room": 1}`                                                      | 200 OK<br/>404 Not Found<br/>400 Bad Request<br/>500 Internal Server Error   |
| POST        | /rooms                        | N/A          | `{"room": 1, "capacity" : 200}`                                                      | `{"roomId": 1, "room": 1, "capacity": 200}`                                                              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error                |
| DELETE      | /rooms/{roomId}               | N/A          | N/A                                                                                  | `{"message": "Room Deleted"}`                                                                            | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error   |
| PATCH       | /rooms/{roomId}               | N/A          | `{"capacity" : 211}`                                                                 | `{"roomId": 1, "room": 1, "capacity": 211}`                                                              | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error   |
| POST        | /users                        | N/A          | `{"name": "Mariya Kushnirenko", "age": 28}`                                          | `{"userId": 1, "name": "Mariya Kushnirenko", "age": 28}`                                                 | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error                |
| DELETE      | /users/{userId}               | N/A          | N/A                                                                                  | `{"message": "User Deleted"}`                                                                            | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error   |
| PATCH       | /users/{userId}               | N/A          | `{"age": 29}`                                                                        | `{"userId": 1, "name": "Mariya Kushnirenko", "age": 29}`                                                 | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error   |
| POST        | /reservations                 | N/A          | `{"roomId": 1, "userId" : 1, "movieId": 1, "date": "2024-01-24", "numberSeats" : 2}` | `{"reservationId": 1, "roomId": 1, "userId" : 1, "movieId": 1, "date": "2024-01-24", "numberSeats" : 2}` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error                |
| DELETE      | /reservations/{reservationId} | N/A          | N/A                                                                                  | `{"message": "Reservation Deleted"}`                                                                     | 200 OK<br/>404 Not Found<br/>400 Bad Request<br/>500 Internal Server Error   |
| PATCH       | /reservations/{reservationId} | N/A          | `{"numberSeats" : 4}`                                                                | `{"reservationId": 1, "roomId": 1, "userId" : 1, "movieId": 1, "date": "2024-01-24", "numberSeats" : 4}` | 200 OK<br/>404 Not Found<br/>400 Bad Request<br/>500 Internal Server Error   |
| POST        | /payments                     | N/A          | `{"reservationId" : 1, "quantity": "500€"}`                                          | `{"paymentId": 1, "reservationId": 1, "quantity": "500€"}`                                               | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error                |