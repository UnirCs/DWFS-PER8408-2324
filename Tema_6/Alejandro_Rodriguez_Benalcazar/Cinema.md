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
- Película (movies): Representa una película en el cine.
- Sala (rooms): Representa una sala de cine.
- Usuario (users): Representa un usuario que realiza reservas en el cine.
- Reserva (reservations): Representa una reserva de butacas para un usuario en una sala.
- Pago (payments): Representa el registro de un pago asociado a una reserva.

| Método HTTP | URI                   | Query Params | Cuerpo de la Petición                                                            | Cuerpo de la Respuesta                                                                                 | Códigos de Respuesta                                                       |
|-------------|-----------------------|--------------|----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| POST        | /movies               | N/A          | `{"title": "Movie 1", "duration": 120, "releaseDate": "2023-01-01"}`             | `{"movieId": 123, "title": "Movie 1", "duration": 120, "releaseDate": "2023-01-01"}`                   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| PUT         | /movies/{movieId}     | N/A          | `{"title": "Modified Movie 1"}`                                                  | `{"movieId": 123, "title": "Modified Movie 1", "duration": 120, "releaseDate": "2023-01-01"}`          | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE      | /movies/{movieId}     | N/A          | N/A                                                                              | `{"message": "Movie deleted"}`                                                                         | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| POST        | /rooms                | N/A          | `{"name": "Room A", "capacity": 50}`                                             | `{"roomId": 456, "name": "Room A", "capacity": 50}`                                                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| PUT         | /rooms/{roomId}       | N/A          | `{"name": "Modified Room A"}`                                                    | `{"roomId": 456, "name": "Modified Room A", "capacity": 50}`                                           | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| PATCH       | /rooms/{roomId}       | N/A          | `{"capacity": 60}`                                                               | `{"roomId": 456, "name": "Modified Room A", "capacity": 60}`                                           | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE      | /rooms/{roomId}       | N/A          | N/A                                                                              | `{"message": "Room deleted"}`                                                                          | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| POST        | /users                | N/A          | `{"name": "John Doe", "email": "john@example.com"}`                              | `{"userId": 789, "name": "John Doe", "email": "john@example.com"}`                                     | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| PUT         | /users/{userId}       | N/A          | `{"name": "Jane Doe"}`                                                           | `{"userId": 789, "name": "Jane Doe", "email": "john@example.com"}`                                     | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE      | /users/{userId}       | N/A          | N/A                                                                              | `{"message": "User deleted"}`                                                                          | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| POST        | /reservations         | N/A          | `{"userId": 789, "roomId": 456, "seats": [1, 2, 3], "paymentStatus": "Pending"}` | `{"reservationId": 987, "userId": 789, "roomId": 456, "seats": [1, 2, 3], "paymentStatus": "Pending"}` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| DELETE      | /reservations/{resId} | N/A          | N/A                                                                              | `{"message": "Reservation canceled"}`                                                                  | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| PUT         | /reservations/{resId} | N/A          | `{"seats": [4, 5, 6]}`                                                           | `{"reservationId": 987, "userId": 789, "roomId": 456, "seats": [4, 5, 6], "paymentStatus": "Pending"}` | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /payments             | N/A          | `{"reservationId": 987, "amount": 30.0, "paymentStatus": "Paid"}`                | `{"paymentId": 654, "reservationId": 987, "amount": 30.0, "paymentStatus": "Paid"}`                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |