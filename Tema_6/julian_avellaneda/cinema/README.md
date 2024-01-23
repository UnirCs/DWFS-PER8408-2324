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

## Propuesta

**Recursos identificados:**

- Pelicula (movie): Representa el catalogo de peliculas disponibles en el cine
- Sala (screen): Representa las salas presentes en el cinema
- Usuario (client): Representan los clientes del cinema
- Reserva (booking): Representan las reservas que los clientes hacen en el cinema
- Pago (payment): Representan los pagos de las reservas

| Método HTTP | URI         | Query Params | Cuerpo de la Petición                                                                                                                                                                     | Cuerpo de la Respuesta                                                                                                                | Códigos de Respuesta                                                       |
|------|-------------|-----|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| POST | /movie      | N/A | `{"name": "El niño y la garza", "director": ["Hayao Miyazaki"], "genre": ["Anime"], "rating": "PG-13", "synopsis": "....", "availability": {"from": "01-01-2024", "until": "31-12-2024"}` | `{"id": "1", "name": "El niño y la garza", "director": ["Hayao Miyazaki"], "genre": ["Anime"], "rating": "PG-13", "synopsis": "...."}` | 201 Created<br/>400 Bad request<br/>500 Internal Server Error              |
| PATCH| /movie/{id} |N/A| `{"availability": {"from": "01-01-2024", "until": "01-02-2024"}`                                                                                                                          |`{"name": "El niño y la garza", "director": ["Hayao Miyazaki"], "genre": ["Anime"], "rating": "PG-13", "synopsis": "....", "availability": {"from": "01-01-2024", "until": "01-02-2024"}`| 200 Ok<br/>400 Bad request<br/>404 Not found<br/>500 Internal Server Error |
|DELETE| /movie/{id} |N/A|N/A|`{"result": "Deleted"`| 200 Ok<br/>404 Not founf<br/>500 Internal Server Error                     |
| POST | /screen     | N/A | `{"name": "El niño y la garza", "director": ["Hayao Miyazaki"], "genre": ["Anime"], "rating": "PG-13", "synopsis": "....", "availability": {"from": "01-01-2024", "until": "31-12-2024"}` | `{"id": "1", "name": "El niño y la garza", "director": ["Hayao Miyazaki"], "genre": ["Anime"], "rating": "PG-13", "synopsis": "...."}` | 201 Created<br/>400 Bad request<br/>500 Internal Server Error              |
| PATCH| /movie/{id} |N/A| `{"availability": {"from": "01-01-2024", "until": "01-02-2024"}`                                                                                                                          |`{"name": "El niño y la garza", "director": ["Hayao Miyazaki"], "genre": ["Anime"], "rating": "PG-13", "synopsis": "....", "availability": {"from": "01-01-2024", "until": "01-02-2024"}`| 200 Ok<br/>400 Bad request<br/>404 Not found<br/>500 Internal Server Error |
|DELETE| /movie/{id} |N/A|N/A|`{"result": "Deleted"`| 200 Ok<br/>404 Not founf<br/>500 Internal Server Error                     |

