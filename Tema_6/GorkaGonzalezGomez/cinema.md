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
- Película (movies): Representa una película ofrecida por el cine.
- Sala (cinemas): Representa un préstamo de un libro a un usuario.
- Usuario (users): Representa un usuario del cine.
- Reserva (bookings): Representa la reserva de un asiento de una sala del cine hecha por un usuario.
- Pago (payments): Representa el pago de la reserva de un asiento de la sala de cine.

| Método HTTP | URI                            | Query Params | Cuerpo de la Petición                                                            | Cuerpo de la Respuesta                                                                                 | Códigos de Respuesta                                                            |
|-------------|--------------------------------|--------------|----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| POST        | /movies                        | N/A          | `{"title": "Cadena Perpetua", "director": "Frank Darabont"}`                     | `{"movieId": 1, "title": "Cadena Perpetua", "director": "Frank Darabont"}`                             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error                   |
| DELETE      | /movies/{movieId}              | N/A          | N/A                                                                              | `{"message": "movie deleted"}`                                                                         | 204 No content<br/>404 Not found<br/>500 Internal Server Error                  |
| PUT         | /movies/{movieId}              | N/A          | `{"title": "El padrino", "director": "Francis Ford Coppola"}`                    | `{"movieId": 1, "title": "El padrino", "director": "Francis Ford Coppola"}`                            | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| POST        | /cinemas                       | N/A          | `{"rows": 10, "seatsPerRow": 10, "isFull": false}`                               | `{"cinemaId": 1, "rows": 10, "seatsPerRow": 10, "isFull": false}`                                      | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error                   |
| DELETE      | /cinemas/{cinemaId}            | N/A          | N/A                                                                              | `{"message": "cinema deleted"}`                                                                        | 204 No content<br/>404 Not found<br/>500 Internal Server Error                  |
| PATCH       | /cinemas/{cinemaId}            | N/A          | `{"isFull": true}`                                                               | `{"cinemaId": 1, "rows": 10, "seatsPerRow": 10, "isFull": true}`                                       | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| POST        | /users                         | N/A          | `{"name": "Gorka", "email": "gorka.gonzalez.gomez@gmail.com"}`                   | `{"userId": 1, "name": "Gorka", "email": "gorka.gonzalez.gomez@gmail.com"}`                            | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error                   |
| DELETE      | /users/{userId}                | N/A          | N/A                                                                              | `{"message": "user deleted"}`                                                                          | 204 No content<br/>404 Not found<br/>500 Internal Server Error                  |
| PATCH       | /users/{userId}                | N/A          | `{"email": "gorka.gonzalez037@comunidadunir.net"}`                               | `{"userId": 1, "name": "Gorka", "email": "gorka.gonzalez037@comunidadunir.net"} `                      | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| POST        | /bookings                      | N/A          | `{"userId": 1, "cinemaId": 1, "date": "2024-01-20", "paymentStatus": "pending"}` | `{"bookingId": 1, "userId": 1, "cinemaId": 1, "date": "2024-01-20", "paymentStatus": "pending"}`       | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error                   |
| DELETE      | /bookings/{bookingId}          | N/A          | N/A                                                                              | `{"message": "booking deleted"}`                                                                       | 204 No content<br/>404 Not found<br/>500 Internal Server Error                  | 
| PUT         | /bookings/{bookingId}          | N/A          | `{"userId": 1, "cinemaId": 1, "date": "2024-01-21", "paymentStatus": "pending"}` | `{"bookingId": 1, "userId": 1, "cinemaId": 1, "date": "2024-01-21", "paymentStatus": "pending"}`       | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| POST        | /bookings/{bookingId}/payments | N/A          | `{"paymentMethod": "creditCard", "amount": 10.0}`                                | `{"paymentId": 1, "bookingId": 1, "paymentMethod": "creditCard", "amount": 10.0, "status": "success"}` | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |