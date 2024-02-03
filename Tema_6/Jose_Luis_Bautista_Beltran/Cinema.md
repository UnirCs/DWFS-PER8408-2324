# Ejercicio 2 API de un sistema de reserva de butacas de cine


### Fecha: 02/02/2024
### Autor : José Luis Bautista Beltrán
------------
API de un sistema de reserva de butacas de cine
En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los anteriores temas.

Las operaciones que la API debe soportar son las siguientes:

Crear, eliminar y modificar películas.
Crear, eliminar y modificar (parcialmente) salas.
Crear, eliminar y modificar (parcialmente) usuarios.
Crear una reserva para un usuario en una sala.
Cancelar una reserva para un usuario en una sala.
Modificar una reserva para un usuario en una sala.
Registrar un pago de una reserva.

| Método HTTP | URI | Query Params | Request Body | Response Body | Códigos HTTP de respuesta |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| POST | /api/movies | - | ``{"title":"Oppenheimer", "duration": "181 minutes", "classification": "R"}`` | ``{"movie_id":1,"title":"Oppenheimer", "duration": "181 minutes", "classification": "R"}`` | 201 Created 400 Bad Request 404 Not Found 500 Internal Error |
| PUT | /api/movies/{movie_id} | {movie_id=1} | ``{"title":"Oppenheimer", "duration": "181 minutes", "classification": "+18"}`` | ``{"movie_id":1,"title":"Oppenheimer", "duration": "181 minutes", "classification": "+18"}`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
| DELETE | /api/movies/{movie_id} | {movie_id=1} | - | ``{"message":"movie was delete"}`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
| POST | /api/rooms/ | - | ``{"name":"Room 1"}`` | ``{"room_id":1,"name":"Room 1"}`` | 201 Created 400 Bad Request 404 Not Found 500 Internal Error |
| PATCH | /api/rooms/{room_id} | {room_id=1} | ``{"name":"Room #1"}`` | ``{"room_id":1,"name":"Room #1"}`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
| DELETE | /api/rooms/{room_id} | {room_id=1} | - | ``{"message":"room was delete"}`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
| POST | /api/users/ | - | ``{"name":"user 1", "dni":"12345740", "cellphone":"314155010**", "email":"user1@mail.ok"}`` | ``{"user_id":1, "name":"user 1", "dni":"12345740", "cellphone":"314155010**", "email":"user1@mail.ok"}`` | 201 Created 400 Bad Request 404 Not Found 500 Internal Error |
| PATCH | /api/users/{user_id} | {user_id=1} | ``{ "cellphone":"3141550100*", "email":"user1update@mail.ok"}`` | ``{"user_id":1, "name":"user 1", "dni":"12345740", "cellphone":"3141550100*", "email":"user1update@mail.ok"}`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
| DELETE | /api/users/{user_id} | {user_id=1} | - | ``{"message":"user was delete"}`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
| POST | /api/seats/ | - | ``{"user_id":1,"room_id":1,"seat_number":1}`` | ``{"seat_id":1,"user_id":1,"room_id":1,"seat_number":1}`` | 201 Created 400 Bad Request 404 Not Found 500 Internal Error |
| PUT | /api/seats/{seat_id} | {seat_id=1} | ``{"user_id":1,"room_id":1,"seat_number":2}`` | ``{"seat_id":1,"user_id":1,"room_id":1,"seat_number":2}`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
| POST | /api/pays/ | - | ``{"seat_id":1, "valor": 5000}`` | ``{"pay_id":1,"seat_id":1, "valor": 5000}`` | 201 Created 400 Bad Request 404 Not Found 500 Internal Error |