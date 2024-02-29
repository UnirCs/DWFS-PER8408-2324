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
- peliculas: el recurso de peliculas.
- salas: las salas que tiene el cine.
- usuarios: los usuarios que se registran en la aplicación
- reservas: son las reservas que se realizan en la sala.
- pagos: el pago que se realiza a la reserva


| Método HTTP | URI              | Query Params | Request Body                | Response Body                 | Códigos HTTP de respuesta |
|-------------|------------------|--------------|-----------------------------|-------------------------------|-------------------------  |
| POST        | /peliculas       | -            | {"director":"nombres",      |   {"id": #############,       | 201                       |
|             |                  |              |  "titulo": "La sombra",     |    "titulo":"La sombra"}      | 400                       |
|             |                  |              |  "genero": "Terror",        |                               | 409                       |
|             |                  |              |  "duracion":120,            |                               | 500                       |
|             |                  |              |  "sinopsis":"resumen"}      |                               |                           |
|-----------------------------------------------------------------------------------------------------------------------------------------|
| DELETE      | /peliculas/{id}  | -            | -                           |  {"accion":"Eliminar"         | 200                       |
|             |                  |              |                             |   "pelicula": "La Sombra"}    | 400                       |
|             |                  |              |                             |                               | 404                       |
|             |                  |              |                             |                               | 500                       |
|-------------|------------------|--------------|-----------------------------|-------------------------------|---------------------------|
| PUT         | /peliculas/{id}  | -            | {"director":"nombres2",     |   {"id": #############,       | 200                       |
|             |                  |              |  "titulo": "La sombra2",    |    "accion": "Modificada"     | 400                       |
|             |                  |              |  "genero": "Terror",        |    "titulo": "La sombra2"}    | 404                       |
|             |                  |              |  "duracion":150,            |                               | 500                       |
|             |                  |              |  "sinopsis":"resumen2"}     |                               |                           |
|-------------|------------------|--------------|-----------------------------|-------------------------------|---------------------------|
| POST        | /salas           | -            | {"nombre":"nombres",        |   {"id": #############,       | 201                       |
|             |                  |              |  "capacidad": 60,           |    "sala":"nombres"}          | 400                       |
|             |                  |              |  "ubicación": "lugar",      |                               | 409                       |
|             |                  |              |  "turno":"dia",             |                               | 500                       |
|             |                  |              |  "categoria":"premium"}     |                               |                           |
|-----------------------------------------------------------------------------------------------------------------------------------------|
| DELETE      | /salas/{id}      | -            | -                           |  {"accion":"Eliminar"         | 200                       |
|             |                  |              |                             |   "sala": "nombres"}          | 400                       |
|             |                  |              |                             |                               | 404                       |
|             |                  |              |                             |                               | 500                       |
|-------------|------------------|--------------|-----------------------------|-------------------------------|---------------------------|
| PUT         | /salas/{id}      | -            | {"nombre":"nombres2",       |   {"id": #############,       | 200                       |
|             |                  |              |  "capacidad": 70,           |    "accion": "Modificada"     | 400                       |
|             |                  |              |  "ubicación": "lugar2",     |    "sala": "nombres2"}        | 404                       |
|             |                  |              |  "turno":"noche",           |                               | 500                       |
|             |                  |              |  "categoria":"estandar"}    |                               |                           |
|-------------|------------------|--------------|-----------------------------|-------------------------------|---------------------------|
| POST        | /usuarios        | -            | {"nombre":"nombres",        |   {"id": #############,       | 201                       |
|             |                  |              |  "correo": "correo@us.pe",  |    "nombre":"nombres"}        | 400                       |
|             |                  |              |  "celular": 999999999,      |                               | 409                       |
|             |                  |              |  "dirección":"Direccion",   |                               | 500                       |
|             |                  |              |  "edad":20}                 |                               |                           |
|-----------------------------------------------------------------------------------------------------------------------------------------|
| DELETE      | /usuarios/{id}   | -            | -                           |  {"accion":"Eliminar"         | 200                       |
|             |                  |              |                             |   "nombre": "nombres"}        | 400                       |
|             |                  |              |                             |                               | 404                       |
|             |                  |              |                             |                               | 500                       |
|-------------|------------------|--------------|-----------------------------|-------------------------------|---------------------------|
| PUT         | /usuarios/{id}   | -            | {"nombre":"nombres2",       |   {"id": #############,       | 200                       |
|             |                  |              |  "correo": "correo2@us.pe", |    "accion": "Modificada"     | 400                       |
|             |                  |              |  "celular": 888888888,      |    "nombre": "nombres2"}      | 404                       |
|             |                  |              |  "dirección":"Direccion2",  |                               | 500                       |
|             |                  |              |  "edad":22}                 |                               |                           |
|-------------|------------------|--------------|-----------------------------|-------------------------------|---------------------------|
| POST        | /reservas        | -            | {"userId": #########,       |   {"reservaId": ###########,} | 201                       |
|             |                  |              |  "salaId": #########,       |                               | 400                       |
|             |                  |              |  "pelicudId": #########,    |                               | 409                       |
|             |                  |              |  "fecha":"dd/mm/yyyy",      |                               | 500                       |
|             |                  |              |  "asientos":[20,23]}        |                               |                           |
|-----------------------------------------------------------------------------------------------------------------------------------------|
| DELETE      | /usuarios        | -            | -                           |  {"accion":"Eliminar"         | 200                       |
|             | /{userId}        |              |                             |   "reservaId": ###########}   | 400                       |
|             | /reservas        |              |                             |                               | 404                       |
|             | /{reservaId}     |              |                             |                               | 500                       |
|-------------|------------------|--------------|-----------------------------|-------------------------------|---------------------------|
| PATCH       | /usuarios/       | -            | {"salaId": #########,       |   {"reservaId": ###########,  | 200                       |
|             | /{userId}/       |              |  "fecha":"dd/mm/yyyy",      |    "accion": "Modificada"}    | 400                       |
|             | /reservas        |              |  "asientos":[27,28]}        |                               | 404                       |
|             | /{reservaId}     |              |                             |                               | 500                       |
|-------------|------------------|--------------|-----------------------------|-------------------------------|---------------------------|
| POST        | /pagos           | -            | {"reservaId": #########,    |   {"mensaje": "confirmado"}   | 201                       |
|             |                  |              |  "monto": 120,              |                               | 400                       |
|             |                  |              |  "fecha": "dd/mm/yyyy"}     |                               | 409                       |
|             |                  |              |                             |                               | 500                       |
|-----------------------------------------------------------------------------------------------------------------------------------------|