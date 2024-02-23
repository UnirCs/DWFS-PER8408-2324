# API de un sistema de reserva de butacas de cine

En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los anteriores temas.

Las operaciones que la API debe soportar son las siguientes:

Crear, eliminar y modificar películas.
Crear, eliminar y modificar (parcialmente) salas.
Crear, eliminar y modificar (parcialmente) usuarios.
Crear una reserva para un usuario en una sala.
Cancelar una reserva para un usuario en una sala.
Modificar una reserva para un usuario en una sala.
Registrar un pago de una reserva.

**Recursos identificados:**
- Pelicula (movies): Representa una pelicula de la cartelera
- Sala (rooms): Representa una sala del cine
- Usuarios(users): Representa un usuario
- Reserva(reservations): Representa la reserva para un usuario de una sala
- Pago(payments): Representa un pago de una reserva

| Método HTTP | URI                           | Query Params | Cuerpo de la Petición                                                                            | Cuerpo de la Respuesta                                                                                       | Códigos de Respuesta                                                       |
|-------------|-------------------------------|--------------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| POST        | /movies                       | N/A          | `{"titulo": "Wonka", "genero": "Comedia", "duracion":95, "fechaEstreno": "06/12/2023"}`          | `{"movieId":1 ,"titulo": "Wonka", "genero": "Comedia", "duracion":95, "fechaEstreno": "06/12/2023"}`         | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| DELETE      | /movies/{movieId}             | N/A          | N/A                                                                                              | `{"message": "Film deleted"}`                                                                                | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| PUT         | /movies/{movieId}             | N/A          | `{"titulo": "Wonka", "genero": "Comedia", "duracion":115, "fechaEstreno": "06/12/2023"}`         | `{"movie":1 ,"titulo": "Wonka", "genero": "Comedia", "duracion":115, "fechaEstreno": "06/12/2023"}`          | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /rooms                        | N/A          | `{"numeroSala": 1, "capacidad": 144, "planta":1}`                                                | `{"roomId":1 ,"numeroSala": 1, "capacidad": 144, "planta":1}`                                                | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| DELETE      | /rooms/{roomId}               | N/A          | N/A                                                                                              | `{"message": "Room deleted"}`                                                                                | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| PATCH       | /rooms/{roomId}               | N/A          | `{"capacidad": 138}`                                                                             | `{"roomId":1 ,"numeroSala": 1, "capacidad": 138, "planta":1}`                                                | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /users                        | N/A          | `{"nombre": "María", "apellido": "Cifuentes", "dni":"12345678A", fechaNacimiento: "26/12/1997"}` | `{"userId":1 ,"nombre": "María", "apellido": "Cifuentes", "dni":"12345678A", fechaNacimiento: "26/12/1997"}` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| DELETE      | /users/{userId}               | N/A          | N/A                                                                                              | `{"message": "User deleted"}`                                                                                | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| PATCH       | /users/{userId}               | N/A          | `{"fechaNacimiento": "26/12/1995}`                                                               | `{"userId":1 ,"nombre": "María", "apellido": "Cifuentes", "dni":"12345678A", fechaNacimiento: "26/12/1995"}` | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /reservations/                | N/A          | `{"userId": 1, "movieId": 1, "fecha":"14/01/2024", numEntradas:2}`                               | `{"reservationId":1, "userId": 1, "movieId": 1, "fecha":"14/01/2024", numEntradas:2}`                        | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| DELETE      | /reservations/{reservationId} | N/A          | N/A                                                                                              | `{"message": "Reservation deleted"}`                                                                         | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| PUT         | /reservations/{reservationId} | N/A          | `{"userId": 1, "movieId": 1, "fecha":"14/01/2024", numEntradas:5}`                               | `{"reservationId":1, "userId": 1, "movieId": 1, "fecha":"14/01/2024", numEntradas:5}`                        | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST        | /payments                     | N/A          | `{"reservationId": 1, "cantidad": 15, "metodo":tarjeta, "fechaPago": "12/01/2024"}`              | `{"paymentId":1 ,"reservationId": 1, "cantidad": 15, "metodo":tarjeta", "fechaPago": "12/01/2024"}`          | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |


