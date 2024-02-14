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

| Método HTTP                            | URI                   | Query Params  | Cuerpo de la Petición                                 | Cuerpo de la Respuesta                | Códigos de Respuesta                                |
|----------------------------------------|-----------------------|---------------|-----------------------------------------|---------------------------------------|---------------------------------------------------|
| POST                                   | /movies                 | N/A          | `{"title": "Wakanda Forever", "image": "./wakanda.png", "synopsis": "A sequel that will continue to explore the incomparable world of Wakanda and all the rich and varied characters introduced in the 2018 film.", "time": "2h 41m", "category": "Science fiction", "score": "4"}`                           | `{"movieId": 1, "title": "Wakanda", "image": "", "synopsis": "", "time": "", "category": "", "score": ""}`             | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |