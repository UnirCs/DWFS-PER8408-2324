Ejercicio 2: API de un sistema de reserva de butacas de cine
=============================================

Recursos identificados:

- Peliculas (movies): Representa las películas.
- Salas (cinemas): Representa las salas de cine.
- Usuarios (users): Representa los usuarios.
- Reservas (bookings): Representa las reservas de los asientos realizadas por un usuario.
- Pagos (payments): Representa los pagos de las reservas.

| Método HTTP | URI                 | Query Params | Request Body                                                                        | Response Body                                                                                               | Códigos HTTP de respuesta                                     |
|-------------|---------------------|--------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| POST        | /movies             | N/A          | ``{"title": "movie title", "synopsis": "synopsis description", "duration": 123}``   | ``{"movieId": 1, "title": "movie title", "synopsis": "synopsis description", "duration": 123}``             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE      | /movies/{movieId}   | N/A          | N/A                                                                                 | `{"message": "Movie removed"}`                                                                              | 200 OK<br/>404 Not Found<br/>500 Internal Server Error       |
| PUT         | /movies/{movieId}   | N/A          | ``{"title": "movie title", "synopsis": "synopsis description", "duration": 123}``   | ``{"title": "movie title", "synopsis": "synopsis description", "duration": 123}``                           | 200 OK<br/>404 Not Found<br/>500 Internal Server Error  |
| POST        | /cinemas            | N/A          | ``{"cinemaSize": "SMALL", "isFull": false}``                                        | ``{"cinemaId": 1}``                                                                                         | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE      | /cinemas/{cinemaId} | N/A          | N/A                                                                                 | `{"message": "Cinema removed"}`                                                                             | 200 OK<br/>404 Not Found<br/>500 Internal Server Error       |
| PATCH       | /cinemas/{cinemaId} | N/A          | ``{"isFull": true}``                                                                | ``{"cinemaId": 1, "isFull": true}``                                                                         | 200 OK<br/>404 Not Found<br/>500 Internal Server Error  |
| POST        | /users              | N/A          | ``{"name": "user name", "email": "user@email"}``                                    | ``{"movieId": 1, "title": "movie title", "synopsis": "synopsis description", "duration": 123}``             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE      | /users/{userId}     | N/A          | N/A                                                                                 | `{"message": "User removed"}`                                                                               | 200 OK<br/>404 Not Found<br/>500 Internal Server Error       |
| PATCH       | /users/{userId}     | N/A          | ``{"email":  "user@email"}``                                                        | ``{"userId": 12345, "email":  "user@email"}``                                                               | 200 OK<br/>404 Not Found<br/>500 Internal Server Error  |
| POST        | /bookings           | N/A          | ``{"userId": 123, bookingDate: "11-11-2011", movieId: 1", seats: [], cinemaId: 1}`` | ``{"bookingId": 1, "userId": 12345, "bookingDate": "11-11-2011", "movieId": 6789, seats: [], cinemaId: 1}`` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error      |
| DELETE      | /bookings           | N/A          | `{"userId": 123}`                                                                   | `{"message": "Movie canceled"}`                                                                             | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                                                        |
| PATCH       | /bookings           | cinemaId     | ``{"bookingDate: "11-11-2011}"``                                                    | ``{"cinemaId": 1, "userId": 12345, "bookingDate: "11-11-2011}"``                                            | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                                                         |
| POST        | /payments           | N/A          | ``{"bookingId": 1, amount: 12.0, paymentMethod: PayPal}``                           | ``{"paymentId": 2354, bookingId: 1, amount: 12.0, paymentMethod: PayPal}``                                  | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                                                         |

