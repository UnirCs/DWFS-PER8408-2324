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
- Pelicula (movies): Representa una pelicula en cartelera.
- Sala (rooms): Representa una sala del cinema.
- Usuario (users): Representa un usuario/cliente del cinema.
- Reserva (res): Representa una reserva con el usuario.

| Método HTTP                            | URI                   | Query Params  | Cuerpo de la Petición                                              | Cuerpo de la Respuesta                                                                | Códigos de Respuesta                                    |
|----------------------------------------|-----------------------|---------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------|
| POST                                   | /movies                | N/A           | `{"posterId": "wonka", "title": "Wonka", "synopsis": "Armado con solo un sombrero lleno de sueños...", "duration": "1h 56m", "genre": "Fantasia/Musical", "rating": "3.9"}`          | `{"movieId": "456", "posterId": "wonka", "title": "Wonka", "synopsis": "Armado con solo un sombrero lleno de sueños...", "duration": "1h 56m", "genre": "Fantasia/Musical", "rating": "3.9"}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE | /movies/{movieId}       | N/A           | N/A                                                                | `{"message": "Movie deleted"}`                                                        | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
| PUT o PATCH                                    | /movies/{movieId} | N/A           | `{"posterId": "wonka:DC", "title": "Wonka: director's cut", "synopsis": "Armado con multiples sombreros llenos de sueños...", "duration": "3h 10m", "genre": "Ciencia ficcion/Musical", "rating": "5"}`          | `{"movieId": "456","posterId": "wonka:DC", "title": "Wonka: director's cut", "synopsis": "Armado con multiples sombreros llenos de sueños...", "duration": "3h 10m", "genre": "Ciencia ficcion/Musical", "rating": "5"}`                                                          | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST                                   | /rooms                | N/A           | `{"numeroSala": "5", "dimensiones": "10", "sillas": [{"id": "1", "state": "Libre", "userId": ""}, {"id": "2", "state": "Libre", "userId": ""}, {"id": "3", "state": "Libre", "userId": ""}...]}`          | `{"roomId": "3", "numeroSala": "5", "dimensiones": "10", "sillas": [{"id": "1", "state": "Libre", "userId": ""}, {"id": "2", "state": "Libre", "userId": ""}, {"id": "3", "state": "Libre", "userId": ""}...]}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE | /rooms/{roomId}       | N/A           | N/A                                                                | `{"message": "Room deleted"}`                                                        | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
| PATCH                                    | /rooms/{roomId} | N/A           | `{"numeroSala": "3","dimensiones": "12", "sillas": [{"state": "Ocupado", "userId": ""}, {"state": "Ocupado", "userId": ""}, {"state": "Ocupado", "userId": ""}...]}`          | `{"roomId": "3", "numeroSala": "3", "dimensiones": "12", "sillas": [{"id": "1", "state": "Ocupado", "userId": "1"}, {"id": "2", "state": "Ocupado", "userId": "1"}, {"id": "3", "state": "Ocupado", "userId": "1"}...]}`                       | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error     |
| POST                                   | /users                | N/A           | `{"userName": "JoseLuis", "birtDate": "7/8/1995", "email": "joseluisjlgc95@gmail.com"}`          | `{"userId": "777", "userName": "JoseLuis", "birtDate": "7/8/1995", "email": "joseluisjlgc95@gmail.com"}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE | /users/{userId}       | N/A           | N/A                                                                | `{"message": "User deleted"}`                                                        | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
| PATCH                                    | /users/{userId} | N/A           | `{"userName": "Amelia", "birtDate": "4/2/2010", "email": "ameliasof@gmail.com"}`          | `{"userId": "1", "userName"": "Amelia", "birtDate": "4/2/2010", "email": "ameliasof@gmail.com"}`          | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error     |
| PATCH                                  | /users/{userId}/rooms/{roomId}       | N/A           | `{"sillas": [{"state": "Rerservado", "userId": "67"}, {"state": "Libre", "userId": ""}]}, {"cardNumber": "498471298479", "cardHolderName": "Felipe Rodrigez", "expirationDate": "1/1/2026", "securityCode": "123", "billingAddress": "Bucaramanga-Calle 1 #1-1"}` | `{"sillas": [{"id": "32", state": "Libre", "userId": ""}, {"id": "33","state": "Reservado", "userId": "67"}]}`     | 202 Accepted<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |