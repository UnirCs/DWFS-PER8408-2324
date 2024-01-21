# API del juego Hunde la Flota

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
- Partida (games): Representa una partida entre dos jugadores.
- Jugador (players): Representa un jugador registrado.
- Barco (ships): Representa un barco de un jugador.
- Disparo (shoots): Representa un disparo realizado por un jugador.

| Método HTTP                            | URI                   | Query Params  | Cuerpo de la Petición                                              | Cuerpo de la Respuesta                                                                | Códigos de Respuesta                                    |
|----------------------------------------|-----------------------|---------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------|
| GET                                    | /games                | N/A             | N/A                                                                | `{"games": [{"id": 1, "player1_id": "1", "player2_id": "2", "status": "En curso", "winner": null, "player1": {"ships": [{"squares": 3, "coordinates": ["A1", "A2", "A3"]}], "shoots": {"hits": ["B3", "C4"], "missed": ["D5", "E6"]}}, "player2": {"ships": [{"squares": 3, "coordinates": ["B1", "B2", "B3"]}], "shoots": {"hits": ["A1", "A2"], "missed": ["D5", "E6"]}}]}}]}`    | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error   |
| POST                                   | /games                | N/A           | `{"player1_id": "1", "player2_id": "2", "status": "En curso", "player1": {"ships": [{"squares": 3, "coordinates": ["A1", "A2", "A3"]}]}, "player2": {"ships": [{"squares": 3, "coordinates": ["B1", "B2", "B3"]}]}}`  | `{"id": 1, "player1_id": "1", "player2_id": "2", "status": "En curso", "winner": null, "player1": {"ships": [{"squares": 3, "coordinates": ["A1", "A2", "A3"]}], "shoots": {"hits": [], "missed": []}, "player2": {"ships": [{"squares": 3, "coordinates": ["B1", "B2", "B3"]}], "shoots": {"hits": [], "missed": []}]}}` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE                                 | /games/{gameId}       | N/A           | N/A                                                                | `{"message": "Datos de la partida borrados."}`                                                        | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
| PUT                                    | /games/{gameId}       | N/A           |  `{"player1_id": "1", "player2_id": "3", "status": "En curso", "winner": null, "player1": {"ships": [{"squares": 3, "coordinates": ["A1", "A2", "A3"]}], "shoots": {"hits": ["B3", "C4"], "missed": ["D5", "E6"]}}, "player2": {"ships": [{"squares": 3, "coordinates": ["B1", "B2", "B3"]}], "shoots": {"hits": ["A1", "A2"], "missed": ["D5", "E6"]}}]}}`                                                               | `{"id": 1, "player1_id": "1", "player2_id": "3", "status": "En curso", "winner": null, "player1": {"ships": [{"squares": 3, "coordinates": ["A1", "A2", "A3"]}], "shoots": {"hits": ["B3", "C4"], "missed": ["D5", "E6"]}}, "player2": {"ships": [{"squares": 3, "coordinates": ["B1", "B2", "B3"]}], "shoots": {"hits": ["A1", "A2"], "missed": ["D5", "E6"]}}]}}`                | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| PATCH                                  | /games/{gameId}       | N/A           | `{"status": "Finalizada"}`                                                               | `{"id": 1, "player1_id": "1", "player2_id": "2", "status": "Finalizada", "winner": null, "player1": {"ships": [{"squares": 3, "coordinates": ["A1", "A2", "A3"]}], "shoots": {"hits": ["B3", "C4"], "missed": ["D5", "E6"]}}, "player2": {"ships": [{"squares": 3, "coordinates": ["B1", "B2", "B3"]}], "shoots": {"hits": ["A1", "A2"], "missed": ["D5", "E6"]}}]}}`                | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error      |
| POST                                  | /games/{gameId}/players/{playerId}/ships       | N/A           | `{"squares": 3, "coordinates": ["B1", "B2", "B3"]}` | `{"id": 1, "game_id": 1, "player_id": 1, "squares": 3, "coordinates": ["B1", "B2", "B3"]}`     | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| DELETE                                   | /games/{gameId}/players/{playerId}/ships/{shipId}     | N/A           | N/A                                                                | `{"message": "Barco eliminado."}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error    |
| GET                                  | games/{gameId}//players/{playerId}/ships       | N/A           | N/A         | `{"game_id": 1, "player_id": 1, "ships": [{"squares": 3, "coordinates": ["A1", "A2", "A3"]}]}`     | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST                                   | /games/{gameId}/players/{playerId}/shoots     | N/A           |`{"targetCoordinate": "C4"}`    | `{"game_id": 1, "player_id": 1, "shoots": {"hits": ["B3", "C4"], "missed": ["D5", "E6", "C4"]}}` | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error    |
| POST                                   | /players     | N/A           | `{"username": "JorgeFernandez78", "password": "password#23"}`      | `{"id": 1, "username": "JorgeFernandez78", "password": "password#23"}` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error    |
| GET                                  | /players/{playerId}       | N/A           | N/A | `{"players":[{"id": 1, "username": "JorgeFernandez78", "password": "password#23"}]}`     | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE                                   | /players/{playerId}      | N/A           | N/A                                                                | `{"message": "Jugador eliminado."}` | 202 Accepted<br/>404 Not Found<br/>500 Internal Server Error    |