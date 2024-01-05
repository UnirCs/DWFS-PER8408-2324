# API de Cinema

**Recursos identificados**
- Rooms (salas): identifica a la sala del cine.
- Users (usuarios): identifica a los clientes del cine.
- Movies (películas): identifica a la películas que ofrece el cine
- Reservations (reservas): identifica a las reservas que los usuarios realizan en una sala para una película.
- Payments (pagos): identifica los pagos realizados.

| Método HTTP  | URI                | Query Params | Request Body | Response Body    | Códigos HTTP de respuesta |
|--------------|--------------------|--------------|--------------|------------------|-------------------------|
| POST         | /movies            | -            | `{"title": "The Grinch", "duration": 120, "age": 7}` | `{"movieId": 1, "title": "The Grinch", "duration": 120, "age": 7}` | 201 Created<br/>400 Bad Request<br/>404 Bad Request<br/>500 Internal Server Error |
| DELETE       | /movies/{movieId}  | -            | -                 | `{"message": "Movie deleted"}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
| PATCH        | /movies/{movieId}  | -            | `{"title": "The Grinch 2", "duration": 115, "age": 12}` | `{"movieId": 1, "title": "The Grinch 2", "duration": 115, "age": 12}` | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST         | /rooms             | -            | `{"name": "Room 1"}` | `{"roomId": 1, "name": "Room 1"}` | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE       | /rooms/{roomId}    | -            | -                    | `{"message": "Movie deleted"}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
| PATCH        | /rooms/{roomId}    | -            | `{"name": "Room space 1"}` | `{"roomId": 1, "name": "Room space 1"}` | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST         | /users             | -            | `{"name": "Marc", "surname": "Carné", "DNI": "123456789-A", "birthDate": "1994-06-02"}` | `{"userId": 1, "name": "Marc", "surname": "Carné", "DNI": "123456789-A", "birthDate": "1994-06-02"}` | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE       | /users/{userId}    | -            | -                    | `{"message": "User deleted"}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
| PATCH        | /users/{userId}    | -            | `{"name": "Marcos", "surname": "Carné", "DNI": "123456789-A", "birthDate": "1994-06-02"}` | `{"userId": 1, "name": "Marcos", "surname": "Carné", "DNI": "123456789-A", "birthDate": "1994-06-02"}` | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST         | /rooms/{roomId}/users/{userId}/reservations | -            | `{"movieId": 1, "date": "2023-12-12", "hour": "12:30:00", "seatsList": [1,2,3]}` | `{"reservationId": 1, "cost": 24, "movieId": 1, "date": "2023-12-12", "hour": "12:30:00", "seatsList": [1,2,3]}` | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE       | /reservations/{reservationId} | -            | -                    | `{"message": "Reservation deleted"}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
| PUT          | /reservations/{reservationId} | -            | `{"movieId": 1, "date": "2023-12-12", "hour": "17:30:00", "seatsList": [1,2,3,4]}` | `{"reservationId": 1, movieId": 1, "date": "2023-12-12", "hour": "17:30:00", "seatsList": [1,2,3,4]}` | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST         | /reservations/{reservationId}/payments | -            | `{"method": "credit card"}` | `{"paymentId": 1, "reservationId": 1, "method": "credit card"}` | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
