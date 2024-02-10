# Ejercicio 3 API del juego hunde la flota


### Fecha: 10/02/2024
### Autor : José Luis Bautista Beltrán
------------

En este ejercicio vamos a diseñar la API REST que podría usar la App del juego 'Hundir la flota' o 'Juego de los barcos'. Si no conoces este juego puedes echar un vistazo al PDF de instrucciones que se encuentra en esta misma ruta, o descarga una App existente para jugar una partida. La aplicación gestionará principalmente partidas entre usuarios registrados o invitados (es decir, sin registro, anónimos). Cada partida tiene asociadas dos cuadrículas de 10x10 cuadrados, una por cada jugador, y estos jugadores deben poner sobre dicha cuadrícula las localizaciones de sus barcos. Tal como se indica en las instrucciones, deberá haber:

1 barco de 4 cuadrados.
2 barcos de 3 cuadrados.
3 barcos de 2 cuadrados.
4 barcos de 1 cuadrado.
También es necesario que, como dicen las instrucciones, se respeten dos reglas:

Los barcos se colocan enteramente en horizontal o enteramente en vertical, es decir, no puede haber un barco en forma de L.
Siempre debe haber un cuadrado de distancia entre cualquier punto de cualquier barco, y se pueden pegar al borde de la cuadrícula.
El objetivo del ejercicio es diseñar una API REST que será implementada (en otros ejercicios) por un microservicio o aplicación que se encargará de tratar todos los datos de las diferentes partidas. En este ejercicio nos centraremos únicamente en el diseño de la API y no trataremos ningún detalle de la implementación.

Las operaciones que la API debe soportar son las siguientes:

Crear una partida.
Eliminar una partida.
Modificar datos de una partida.
Iniciar una partida.
Finalizar una partida.
Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una partida.
Añadir un barco a la cuadrícula de un jugador en una partida.
Eliminar un barco de la cuadrícula de un jugador en una partida.
Consultar todos los barcos de un jugador de una partida.
Registrar un disparo de un jugador a otro en una partida.
Crear un usuario.
Obtener datos de un usuario.
Eliminar un usuario.

- Se plantea que se maneje el tablero con una matriz de 10 x 10 pero las columnas irán con letra. Ejemplo: A1
-Los barcos se pueden representar con longitud de campos. Ej A1,A3, es decir es un barco de 3 casillas y se ubica en la columan A y fila 1, 2 y 3
- El juego mapea los disparos y sobre otra capa se idenfica si la flota ha sido hundida.



| Método HTTP | URI | Query Params | Request Body | Response Body | Códigos HTTP de respuesta |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| POST | /api/games/ | - | ``{"player1":"name1","player2":"name2}`` | ``{"game_id":1,"player1":"name1","player2":"name2}`` | 201 Created 400 Bad Request 500 Internal Error |
| DELETE | /api/games/{game_id}/ | {game_id=1} | ``-`` | ``{"message":"Game was delete"}`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
| PUT | /api/games/{game_id}/ | {game_id=1} | ``{"player1":"new_name1","player2":"new_name2}`` | ``{"game_id":1,"player1":"new_name1","player2":"new_name2}`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
| PATCH | /api/games/{game_id}/ | {game_id=1} | ``{"state":"start"} or {"state":"stop"}`` | ``{"game_id":1,"state":"start"} or {"game_id":1,"state":"stop"}`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
| GET | /api/games/{game_id}/ | {game_id=1} | ``-`` | ``[{"player1":"name1", "ships":[{"ship":1,"position":"A1,A4"},{"ship":2,"position":"B2,B4"},{"ship":3,"position":"E5,G5"}, {"ship":4,"position":"B7,B8"}, {"ship":5,"position":"H1,H2"}, {"ship":6,"position":"I5,J5"},{"ship":7,"position":"E10,E10"},{"ship":8,"position":"F8,F8"},{"ship":9,"position":"D5,D5"},{"ship":10,"position":"H4,H4"}], "shots":["A1","B3","D7", "H2", "A4", "E9", "G6", "J1", "B8", "I3", "F5", "C10", "F8", "H5", "I2", "B4", "J7", "D1", "G10", "C9", "A3", "E6"], "winner":true},{"player2":"name1", "ships":[{"ship":11,"position":"A1,A4"},{"ship":12,"position":"B2,B4"},{"ship":13,"position":"E5,G5"}, {"ship":14,"position":"B7,B8"}, {"ship":15,"position":"H1,H2"}, {"ship":16,"position":"I5,J5"},{"ship":17,"position":"E10,E10"},{"ship":18,"position":"F8,F8"},{"ship":19,"position":"D5,D5"},{"ship":20,"position":"H4,H4"}], "shots":["E9", "I6", "D7", "G2", "J4", "A1", "C5", "B10", "H8", "F3","G4", "C7", "I9", "H1", "B3", "F8", "A10", "J2", "E5", "D6"], "winner":false}]`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
| POST | /api/ships/ | - | ``{"player":"player1", "position":"F3,F5"}`` | ``{"player":"player1", ships["ship":21,"position":"F3,F5"]}`` | 201 Created 400 Bad Request 500 Internal Error |
| DELETE | /api/ships/{ship}/ | {ship=21} | ``-`` | ``{"message":"Ship was delete"}`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
| POST | /api/users/ |  | ``{"name":"JUAN","Age":21,"Sex":"Male}`` | ``{"user_id":1,"name":"JUAN","Age":21,"Sex":"Male}`` | 201 Created 400 Bad Request 500 Internal Error |
| GET | /api/users/{user_id}/ | {user_id=1} | ``-`` | ``{"user_id":1,"name":"JUAN","Age":21,"Sex":"Male}`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
| DELETE | /api/users/{user_id}/ | {user_id=1} | ``-`` | ``{"message":"User was delete"}`` | 200 OK 400 Bad Request 404 Not Found 500 Internal Error |
