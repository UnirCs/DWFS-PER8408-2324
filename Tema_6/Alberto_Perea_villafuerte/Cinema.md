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

### Recursos identificados ###

- **Peliculas (peliculas):** 
- **Salas (salas):** 
- **Usuarios (peliculas):** 
- **Reservas (reservas):** 
- **Pagos (pagos):** 

| Método HTTP | URI                 | Query Params | Request Body                                                                        | Response Body                                                                                               | Códigos HTTP de respuesta                                     |
|-------------|---------------------|--------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| POST        | /peliculas             | N/A          | ``{"title": "movie title", "synopsis": "prueba 1", "duration": 123, "puntuacion":4}``   | ``{"peliculaId": 1, "title": "movie title", "synopsis": "prueba 1", "duration": 123,"puntuacion":4}``             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE      | /peliculas/{peliculaId}   | N/A          | N/A                                                                                 | `{"message": "Pelicula removed"}`                                                                              | 200 OK<br/>404 Not Found<br/>500 Internal Server Error       |
| PUT         | /peliculas/{peliculaId}   | N/A          | ``{"title": "movie title", "synopsis": "actualizacion", "duration": 123,"puntuacion":4.5}``   | ``{"title": "movie title", "synopsis": "actualizacion", "duration": 123,"puntuacion":4.5}``                           | 200 OK<br/>404 Not Found<br/>500 Internal Server Error  |
| POST        | /salas            | N/A          | ``{"nasientos": 20, "nsala": 1}``                                        | ``{"salaId": 1}``                                                                                         | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE      | /salas/{salaId} | N/A          | N/A                                                                                 | `{"message": "Sala removed"}`                                                                             | 200 OK<br/>404 Not Found<br/>500 Internal Server Error       |
| PATCH       | /salas/{salaId} | N/A          | ``{"nasientos": 50}``                                                                | ``{"salaId": 1, "nasiento": 50}``                                                                         | 200 OK<br/>404 Not Found<br/>500 Internal Server Error  |
| POST        | /usuarios              | N/A   | ``{"fullname": "user name", "email": "user@email", "fono":"123"}`` | ``{"usuarioId": 1, "fullname": "user name", "email": "user@email", "fono":123}``             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE      | /usuarios/{usuarioId}     | N/A          | N/A                                                                                 | `{"message": "User removed"}`                                                                               | 200 OK<br/>404 Not Found<br/>500 Internal Server Error       |
| PATCH       | /usuarios/{usuarioId}     | N/A          | ``{"fono":  "0979689649"}``                                                        | ``{"usuarioId": 1, "fono":  "0979689649"}``                                                               | 200 OK<br/>404 Not Found<br/>500 Internal Server Error  |
| POST        | /reservas           | N/A          | ``{"usuarioId": 1, Date: "21-02-2024", peliculaId: 1", asientos: [1,2], salaId: 1}`` | ``{"reservaId": 1,"userId": 1, Date: "21-02-2024", peliculaId: 1", asientos: [1,2], salaId: 1}`` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error      |
| DELETE      | /reservas/{reservaId}           | N/A          | N/A                                                                  | `{"message": "Reserva cancelada"}`                                                                             | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                                                        |
| PATCH       | /reservas/{reservaId}           | N/A     | ``{asientos: [1,2,3]}``                                                    | ``{"reservaId": 1, asientos: [1,2,3]}``                                            | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                                                         |
| POST        | /pagos           | N/A          | ``{"reservaId": 1, "monto": 10, "pago": 10, "saldo": 0 }``                           | ``{"pagoId": 1,"reservaId": 1, "monto": 10, "pago": 10, "saldo": 0 }``                                  | 201 Created<br/>404 Not Found<br/>500 Internal Server Error                                                         |


