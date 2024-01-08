# API del juego hunde la flota

En este ejercicio vamos a diseñar la API REST que podría usar la App del juego 'Hundir la flota' o 'Juego de los
barcos'.

El objetivo del ejercicio es diseñar una API REST que será implementada (en otros ejercicios) por un microservicio o
aplicación que se encargará de tratar todos los datos de las diferentes partidas, soportando las siguientes operaciones:

- Crear una partida mediante el método POST `/games` indicando el ID de cada jugador `player1Id` y `player2Id` en el
  cuerpo de la petición. El `status`de la partida recién creada es `not started`.
- Eliminar una partida indicando su `gameId` en la URI del método DELETE `/games/{gameId}`
- Modificar datos de una partida.
- Iniciar o finalizar una partida indicando su `gameId` en la URI del método DELETE `/games/{gameId}` y el `status`en el
  cuerpo de la petición:
    - `in progress`: inicia la partida
    - `finished`: finaliza la partida
- Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una
  partida indicando su `gameId` en la URI del método GET `/games/{gameId}`
- Añadir un barco a la cuadrícula de un jugador en una partida, indicando el `playerId` del jugador en la URI del método
  POST `/games/{gameId}/players/{playerId}/boat` y las coordenadas del nuevo barco en el cuerpo de la petición
- Eliminar un barco de la cuadrícula de un jugador en una partida, indicando el `playerId` del jugador y el `boatId`del
  barco a eliminar en la URI del método DELETE `/games/{gameId}/players/{playerId}/boats/{boatId}`
- Consultar todos los barcos de un jugador de una partida indicando su `playerId` en la URI del método
  POST `/games/{gameId}/players/{playerId}/boats`
- Registrar un disparo de un jugador a otro en una partida indicando su `playerId`en la URI del método
  POST `/games/{gameId}/players/{playerId}/shots`. La API devolverá, además del historial de disparos, uno de los
  siguientes mensajes:
  - `Miss`: significa que el disparo no ha tocado ningún barco.
  - `Hit`: significa que el disparo ha tocado un barco pero no lo ha hundido.
  - `Sunk`: significa que el disparo ha tocado un barco y lo ha hundido.
- Crear un usuario mediante el método POST `/players`, incluyendo su información en el cuerpo del mensaje
- Obtener datos de un usuario indicando su `playerId` en la URI del método GET `/players/{playerId}`
- Eliminar un usuario indicando su `playerId` en la URI del método DELETE `/players/{playerId}`

| Método HTTP | URI                                               | Query Params | Cuerpo de la Petición                                                       | Cuerpo de la Respuesta                                                                                                                                                       | Códigos de Respuesta                                                       |
|-------------|---------------------------------------------------|--------------|-----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| GET         | /games/{gameId}                                   | N/A          | N/A                                                                         | `{"gameId": 1, "player1": {"id": "jmelero", "boats": [], "shots": []}, "player2": {"id": "jasicilia", "boats":[],  "shots": []}, "status": "not started", "winner": null}`   | 200 OK<br/>204 No Content<br/>500 Internal Server Error                    |
| POST        | /games                                            | N/A          | `{"player1Id": "mabarcelona", "player2Id": "lgarcia"}`                      | `{"gameId": 2, "player1": {"id": "mabarcelona", "boats": [], "shots": []}, "player2": {"id": "lgarcia", "boats":[],  "shots": []}, "status": "not started", "winner": null}` | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error                   |
| PUT         | /games/{gameId}                                   | N/A          | `{"player1Id": "jrbermejo", "player2Id": "sroca", "status": "in progress"}` | `{"gameId": 1, "player1": {"id": "jrbermejo", "boats": [], "shots": []}, "player2": {"id": "sroca", "boats":[],  "shots": []}, "status": "in progress", "winner": null}`     | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| PATCH       | /games/{gameId}                                   | N/A          | `{"status": "in progress"}`                                                 | `{"gameId": 2, "player1": {"id": "mabarcelona", "boats": [], "shots": []}, "player2": {"id": "lgarcia", "boats": [], "shots": []}, "status": "in progress", "winner": null}` | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE      | /games/{gameId}                                   | N/A          | N/A                                                                         | `{"message": "Game deleted"}`                                                                                                                                                | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| GET         | /games/{gameId}/players/{playerId}/boats          | N/A          | N/A                                                                         | `{"boats": [{"id": 1, "coord": [[1, 1], [1, 2], [1, 3]]}, {"id": 2, "coord": [[4, 6], [5, 6]]}}`                                                                             | 200 OK<br/>204 No Content<br/>500 Internal Server Error                    |
| POST        | /games/{gameId}/players/{playerId}/boats          | N/A          | `{"coord": [[2, 3], [3, 3], [4, 3], [5, 3]]}`                               | `{"boats": [{"id": 1, "coord": [[1, 1], [1, 2], [1, 3]]}, {"id": 2, "coord": [[4, 6], [5, 6]]}, {"id": 3, "coord": [[2, 3], [3, 3], [4, 3], [5, 3]]]}}`                      | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error                   |
| DELETE      | /games/{gameId}/players/{playerId}/boats/{boatId} | N/A          | N/A                                                                         | `{"message": "Boat deleted"}`                                                                                                                                                | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| POST        | /games/{gameId}/players/{playerId}/shots          | N/A          | `{"coord": [2, 3]}`                                                         | `{"message": "Hit", "shots": [[5, 5], [2, 3]]}`                                                                                                                              | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error                   |
| GET         | /players/{playerId}                               | N/A          | N/A                                                                         | `{"id": "jmelero", "email": "player1@email.com", "totalGames": 5, "totalWins": 3}`                                                                                           | 200 OK<br/>204 No Content<br/>500 Internal Server Error                    |
| POST        | /players                                          | N/A          | `{"id": "sroca", "email": "player2@email.com"}`                             | `{"id": "sroca", "email": "player2@email.com", "totalGames": 0, "totalWins": 0}`                                                                                             | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error                   |
| DELETE      | /players/{playerId}                               | N/A          | N/A                                                                         | `{"message": "Player deleted"}`                                                                                                                                              | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
