# API Cinema #

### Recursos identificados ###

- **Película (movie):** Representa una película que tiene el cine disponible.
- **Sala (room):** Representa una sala de cine.
- **Usuario (user):** Representa un usuario registrado en el sistema.
- **Reserva (reservation):** Representa una reserva de butacas para una sala y una pelicula.
- **Pago (payment):** Representa el pago de una reserva.

| Método HTTP | URI                         | Query Params | Request Body                                                              | Response Body                                                                                          | Códigos HTTP de respuesta |
|-------------|-----------------------------|--------------|---------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|---------------------------|
| POST        | /movies                     | N/A          | ``{"title": "Nombre de la Película", "duration": 120, "genre": "Drama"}`` | ``{"id": 1, "title": "Nombre de la Película", "duration": 120, "genre": "Drama"}``                     | 201, 400, 500             |
| PATCH       | /movies/{id}                | N/A          | ``{"title": "Nuevo Nombre de la Película"}``                              | ``{"id": 1, "title": "Nuevo Nombre de la Película", "duration": 120, "genre": "Drama"}``               | 200, 400, 404, 500        |
| DELETE      | /movies/{id}                | N/A          | N/A                                                                       | ``{"message": "Película eliminada correctamente"}``                                                    | 204, 404, 500             |
| POST        | /rooms                      | N/A          | ``{"name": "Sala 1", "capacity": 100}``                                   | ``{"id": 1, "name": "Sala 1", "capacity": 100}``                                                       | 201, 400, 500             |
| PATCH       | /rooms/{id}                 | N/A          | ``{"name": "Nueva Sala 1"}``                                              | ``{"id": 1, "name": "Nueva Sala 1", "capacity": 100}``                                                 | 200, 400, 404, 500        |
| DELETE      | /rooms/{id}                 | N/A          | N/A                                                                       | ``{"message": "Sala eliminada correctamente"}``                                                        | 204, 404, 500             |
| POST        | /users                      | N/A          | ``{"name": "Nombre Usuario", "email": "usuario@ejemplo.com"}``            | ``{"id": 1, "name": "Nombre Usuario", "email": "usuario@ejemplo.com"}``                                | 201, 400, 500             |
| PATCH       | /users/{id}                 | N/A          | ``{"email": "nuevo@ejemplo.com"}``                                        | ``{"id": 1, "name": "Nuevo Nombre Usuario", "email": "nuevo@ejemplo.com"}``                            | 200, 400, 404, 500        |
| DELETE      | /users/{id}                 | N/A          | N/A                                                                       | ``{"message": "Usuario eliminado correctamente"}``                                                     | 204, 404, 500             |
| POST        | /reservations               | N/A          | ``{"userId": 1, "roomId": 1, "seats": [1, 2, 3], "movieId": 1}``          | ``{"id": 1, "userId": 1, "roomId": 1, "seats": [1, 2, 3], "movieId": 1, "paymentStatus": "pending"}``  | 201, 400, 500             |
| PATCH       | /reservations/{id}          | N/A          | ``{"seats": [4, 5, 6]}``                                                  | ``{"id": 1, "userId": 1, "roomId": 1, "seats": [4, 5, 6], "movieId": 1, "paymentStatus": "pending"}``  | 200, 400, 404, 500        |
| DELETE      | /reservations/{id}          | N/A          | N/A                                                                       | ``{"message": "Reserva cancelada correctamente"}``                                                     | 204, 404, 500             |
| POST        | /reservations/{id}/payments | N/A          | ``{"paymentMethod": "credit_card", "amount": 20.0}``                      | ``{"id": 1, "reservationId": 1, "paymentMethod": "credit_card", "amount": 20.0, "status": "success"}`` | 201, 400, 404, 500        |
