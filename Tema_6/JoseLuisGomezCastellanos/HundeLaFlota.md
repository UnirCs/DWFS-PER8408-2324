# API del juego hunde la flota

En este ejercicio vamos a diseñar la API REST que podría usar la App del juego 'Hundir la flota' o 'Juego de los barcos'.
Si no conoces este juego puedes echar un vistazo al PDF de instrucciones que se encuentra en esta misma ruta, o descarga una App existente para jugar una partida. La aplicación gestionará principalmente partidas entre usuarios registrados o invitados (es decir, sin registro, anónimos). Cada partida tiene asociadas dos cuadrículas de 10x10 cuadrados, una por cada jugador, y estos jugadores deben poner sobre dicha cuadrícula las localizaciones de sus barcos. Tal como se indica en las instrucciones, deberá haber:
- 1 barco de 4 cuadrados.
- 2 barcos de 3 cuadrados.
- 3 barcos de 2 cuadrados.
- 4 barcos de 1 cuadrado.

También es necesario que, como dicen las instrucciones, se respeten dos reglas:
- Los barcos se colocan enteramente en horizontal o enteramente en vertical, es decir, no puede haber un barco en forma de L.
- Siempre debe haber un cuadrado de distancia entre cualquier punto de cualquier barco, y se pueden pegar al borde de la cuadrícula.

El objetivo del ejercicio es diseñar una API REST que será implementada (en otros ejercicios) por un microservicio o aplicación que se encargará de tratar todos los datos de las diferentes partidas. En este ejercicio nos centraremos únicamente en el diseño de la API y no trataremos ningún detalle de la implementación.

Las operaciones que la API debe soportar son las siguientes:
- Crear una partida.
- Eliminar una partida.
- Modificar datos de una partida.
- Iniciar una partida.
- Finalizar una partida.
- Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una partida.
- Añadir un barco a la cuadrícula de un jugador en una partida.
- Eliminar un barco de la cuadrícula de un jugador en una partida.
- Consultar todos los barcos de un jugador de una partida.
- Registrar un disparo de un jugador a otro en una partida.
- Crear un usuario.
- Obtener datos de un usuario.
- Eliminar un usuario.

**Recursos identificados:**
- Ususario (users): Representa una pelicula en cartelera.
- Partida (matchs): Representa una sala del cinema.

| Método HTTP                            | URI                   | Query Params  | Cuerpo de la Petición                                              | Cuerpo de la Respuesta                                                                | Códigos de Respuesta                                    |
|----------------------------------------|-----------------------|---------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------|
| POST                                   | /users                | N/A           | `{"userName": "JoseLuis", "email": "joseluisjlgc95@gmail.com"}`          | `{"userId": "77", "userName": "JoseLuis", "email": "joseluisjlgc95@gmail.com"}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE | /users/{userId}       | N/A           | N/A                                                                | `{"message": "User deleted"}`                                                        | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
| GET                                    | /users/{userId}                | N/A      | N/A                                                                | `{"userId": "77", "userName": "JoseLuis", "email": "joseluisjlgc95@gmail.com"}`           | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error   |
| POST                                   | /users/{userId}/matchs                | N/A           | `{"user1": "JoseLuis", "user2": "Camilo", "board1": [{"id": "1", "state": "Libre", "boatId": ""}, {"id": "2", "state": "Libre", "boatId": ""}, {"id": "3", "state": "Libre", "boatId": ""}...], "board2": [{"id": "1", "state": "Libre", "boatId": ""}, {"id": "2", "state": "Libre", "boatId": ""}, {"id": "3", "state": "Libre", "boatId": ""}...]}`          | `{matchId: "789", "user1": "JoseLuis", "user2": "Camilo", "winner": "", "turn": 0,"board1": [{"id": "1", "state": "Libre", "boatId": ""}, {"id": "2", "state": "Libre", "boatId": ""}, {"id": "3", "state": "Libre", "boatId": ""}...], "board2": [{"id": "1", "state": "Libre", "boatId": ""}, {"id": "2", "state": "Libre", "boatId": ""}, {"id": "3", "state": "Libre", "boatId": ""}...]}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE | /users/{userId}/matchs/{matchId}       | N/A           | N/A                                                                | `{"message": "Match deleted"}`                                                        | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
| PATCH           | /users/{userId}/matchs/{matchId} | N/A           | `{"user1": "Amelia", "user2": "German", "play":"Ongoing", "winner": "", "turn": 7, "board1": [{"id": "1", "state": "Disparado", "boatId": ""}, {"id": "2", "state": "Disparado", "boatId": "1boat4"}, {"id": "3", "state": "Libre", "boatId": "1boat4"}...], "board2": [{"id": "1", "state": "Libre", "boatId": "2boat3"}, {"id": "2", "state": "Libre", "boatId": "3boat1"}, {"id": "3", "state": "Disparado", "boatId": "3boat2"}...]}`          | `{matchId: "7687", "user1": "Amelia", "user2": "German", "winner": "", "turn": 7, "board1": [{"id": "1", "state": "Disparado", "boatId": ""}, {"id": "2", "state": "Disparado", "boatId": "1boat4"}, {"id": "3", "state": "Libre", "boatId": "1boat4"}...], "board2": [{"id": "1", "state": "Libre", "boatId": "2boat3"}, {"id": "2", "state": "Libre", "boatId": "3boat1"}, {"id": "3", "state": "Disparado", "boatId": "3boat2"}...]}`                       | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error     |
| GET                                    | /users/{userId}/matchs/{matchId}                | N/A      | N/A                                                                | `{matchId: "646", "user1": "Aleja", "user2": "Edwin", "play":"Pause", "winner": "", "turn": 5, "board1": [{"id": "1", "state": "Libre", "boatId": ""}, {"id": "2", "state": "Disparado", "boatId": "1boat2"}, {"id": "3", "state": "Libre", "boatId": "2boat2"}...], "board2": [{"id": "1", "state": "Libre", "boatId": "1boat3"}, {"id": "2", "state": "Disparado", "boatId": "3boat1"}, {"id": "3", "state": "Libre", "boatId": "3boat2"}...]}`           | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error   |