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

Ten en cuenta que podría no ser necesario definir un endpoint por cada una de las operaciones que se han listado. No obstante, dichas operaciones deben ser satisfechas por la API diseñada. Las primeras preguntas que deberás hacerte son:
- ¿Qué recursos tiene que manejar la API?
- ¿Cómo se relacionan entre sí?
- ¿Qué información (atributos) guarda cada recurso?





**Recursos Identificados:**

1. **Partida (Game):** Representa una partida del juego 'Hundir la flota'. Contiene información sobre los jugadores, la cuadrícula, los barcos, los disparos y el estado de la partida.

2. **Jugador (Player):** Representa a un jugador asociado a una partida. Contiene información sobre el usuario (si está registrado), los barcos colocados y los disparos realizados.

3. **Barco (Ship):** Representa un barco en el juego. Contiene información sobre su posición en la cuadrícula y su estado (activo o hundido).

4. **Usuario (User):** Representa a un usuario registrado en el sistema. Contiene información básica del usuario.


| Método HTTP | URI                                               | Query Params | Cuerpo de la Petición                                                              | Cuerpo de la Respuesta                                                                            | Códigos de Respuesta                                                            |
|-------------|---------------------------------------------------|--------------|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| POST        | /games                                            | N/A          | N/A                                                                                | `{"gameId": 123, "status": "created"}`                                                            | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error                   |
| DELETE      | /games/{gameId}                                   | N/A          | N/A                                                                                | `{"message": "Game deleted"}`                                                                     | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                          |
| PUT         | /games/{gameId}                                   | N/A          | `{"status": "finished"}`                                                           | `{"message": "Game updated"}`                                                                     | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| POST        | /games/{gameId}/start                             | N/A          | N/A                                                                                | `{"message": "Game started"}`                                                                     | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| POST        | /games/{gameId}/finish                            | N/A          | N/A                                                                                | `{"message": "Game finished"}`                                                                    | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| GET         | /games/{gameId}                                   | N/A          | N/A                                                                                | `{"gameId": 123, "status": "in_progress", "winner": null, "players": [...]}`                      | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                          |
| POST        | /games/{gameId}/players                           | N/A          | `{"userId": 456}`                                                                  | `{"playerId": 789, "userId": 456, "grid": [...], "ships": [...]}`                                 | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE      | /games/{gameId}/players/{playerId}                | N/A          | N/A                                                                                | `{"message": "Player removed"}`                                                                   | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                          |
| GET         | /games/{gameId}/players/{playerId}                | N/A          | N/A                                                                                | `{"playerId": 789, "userId": 456, "grid": [...], "ships": [...], "shots": [...]}`                 | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                          |
| POST        | /games/{gameId}/players/{playerId}/ships          | N/A          | `{"type": "destroyer", "position": {"x": 1, "y": 2}, "orientation": "horizontal"}` | `{"shipId": 987, "type": "destroyer", "position": {"x": 1, "y": 2}, "orientation": "horizontal"}` | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE      | /games/{gameId}/players/{playerId}/ships/{shipId} | N/A          | N/A                                                                                | `{"message": "Ship removed"}`                                                                     | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                          |
| GET         | /games/{gameId}/players/{playerId}/ships          | N/A          | N/A                                                                                | `{"ships": [...]}`                                                                                | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                          |
| POST        | /games/{gameId}/players/{playerId}/shots          | N/A          | `{"target": {"x": 3, "y": 4}}`                                                     | `{"result": "hit"}`                                                                               | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| POST        | /users                                            | N/A          | `{"username": "john_doe", "password": "password"}`                                 | `{"userId": 456, "username": "john_doe"}`                                                         | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error                   |
| GET         | /users/{userId}                                   | N/A          | N/A                                                                                | `{"userId": 456, "username": "john_doe"}`                                                         | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                          |
| DELETE      | /users/{userId}                                   | N/A          | N/A                                                                                | `{"message": "User deleted"}`                                                                     | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                          |