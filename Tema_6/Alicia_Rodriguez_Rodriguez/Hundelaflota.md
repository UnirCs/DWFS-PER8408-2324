# Ejercicio 3: API del juego hunde la flota

Recursos identificados:
- Partidas (games): Representan la partidas.
    - Identificador (gameId).
    - Jugadores (players): cada jugador tiene un id (userId), una cuadrícula 10x10 (square) y una lista de barcos (boats).
    - Estado (status): CREATED, STARTED, FINISHED.
    - Fechas de creación, de inicio y de fin (creationDate, initDate, endDate).
- Barcos (boats): Representan los barcos que son el elemento principal de la partida.
    - Identificador (boatId).
    - Talla (size): Representa el número de cuadrados que tiene un barco.
- Usuarios (users): Representan a los usuarios que son los jugadores de la partida.
    - Identificador (userId).
    - Nombre (userName).
- Disparo (shot) : representa un diparo que hace un jugador a la cuadrícula de otro jugador.
  - Posición (position) a la que se realiza el disparo.

Operaciones:

- Crear una partida (POST)
- Eliminar una partida (DELETE). 
- Modificar datos de una partida (PUT).
- Iniciar una partida o Finalizar una partida (PATCH).
- Consultar los datos de una partida (GET)
- Añadir un barco a la cuadrícula de un jugador en una partida (POST).
- Eliminar un barco de la cuadrícula de un jugador en una partida (DELETE).
- Consultar todos los barcos de un jugador de una partida (GET).
- Registrar un disparo de un jugador a otro en una partida (POST).
- Crear un usuario (POST).
- Obtener datos de un usuario (GET).
- Eliminar un usuario (DELETE).


| Método HTTP | URI                                           | Query Params | Request Body                                                                                                     | Response Body                                                                                                                                    | Códigos HTTP de respuesta                                      |
|-------------|-----------------------------------------------|--------------|------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| POST        | /games                                        | N/A          | `{"players": [ "userId": 123, "userId": 456], "creationDate": "2024-01-08"}`                                     | `{ "gameId": 1, players": [ {"userId": 123, "board": [][]}, {"userId": 456, "board": [][]}], "status": "CREATED", "creationDate": "2024-01-08"}` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error  |
| DELETE      | /games/{gameId}                               | N/A          | N/A                                                                                                              | `{"message": "Game removed"}`                                                                                                                    | 200 OK<br/>404 Not Found<br/>500 Internal Server Error         |
| PUT         | /games/{gameId}                               | N/A          | `{"players": [ {"userId": 123, "square": [][]}, {"userId": 456, "square": [][]}], "creationDate": "2024-01-08"}` | `{ "gameId": 1, players": [ {"userId": 123, "board": [][]}, {"userId": 456, "board": [][]}], "creationDate": "2024-01-08"}`                      | 200 OK<br/>404 Not Found<br/>500 Internal Server Error         |
| PATCH       | /games/{gameId}                               | N/A          | `{"status: START"}`                                                                                              | `{ "gameId": 1, "initDate": "2024-01-08", status: "START"}`                                                                                      | 200 OK<br/>404 Not Found<br/>500 Internal Server Error         |
| GET         | /games/{gameId}                               | N/A          | N/A                                                                                                              | `{ "gameId": 1, players": [ {"userId": 123, "board": [][]}, {"userId": 456, "board": [][]}], "creationDate": "2024-01-08"}`                      | 200 OK<br/>404 Not Found<br/>500 Internal Server Error         |
| POST        | /games/{gameId}/users/{userId}/boats          | N/A          | `{"position": [2][2]}`                                                                                           | `{"gameId": 1, {"userId": 123, "board": [][]}`                                                                                                  | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| DELETE      | /games/{gameId}/users/{userId}/boats/{boatId} | N/A          | N/A                                                                                                              | `{"gameId": 1, {"userId": 123, "board": [][]}`                                                                                                  | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| GET         | /games/{gameId}/users/{userId}/boats          | N/A          | N/A                                                                                                              | `{"userId": 123, "square": [][], "boats": [{"boatId": "1", size: 1, "isOnBoard": true }, {"boatId": "2", size: 2, "isOnBoard": false }]}`        | 200 OK<br/>404 Not Found<br/>500 Internal Server Error         |
| POST        | /games/{gameId}/users/{userId}/shots          | N/A          | `{"position": [2][2]}`                                                                                           | `{"message": "Hit!"}`                                                                                                                            | 200 OK<br/>404 Not Found<br/>500 Internal Server Error         |
| POST        | /users                                        | N/A          | `{"userName": "alirr"}`                                                                                          | `{"userId": 123, "userName": "alirr", "games": []}`                                                                                              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error  |
| GET         | /users/{userId}                               | N/A          | N/A                                                                                                              | `{"userId": 123, "userName": "alirr", "games": [{ "gameId": 1, "initDate": "2024-01-08", status: "START"}]}`                                     | 200 OK<br/>404 Not Found<br/>500 Internal Server Error         |
| DELETE      | /users/{userId}                               | N/A          | N/A                                                                                                              | `{"message": "User removed"}`                                                                                                                    | 200 OK<br/>404 Not Found<br/>500 Internal Server Error         |