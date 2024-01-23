# API Hunde la Flota

### Recursos identificados ###

- **Partida (game):** Representa una partida entre dos jugadores.
- **Jugador (player):** Representa un jugador asociado a una partida.
- **Barco (ship):** Representa un barco ubicado en la cuadrícula de un jugador.
- **Disparo (shot):** Representa un disparo realizado por un jugador a otro en una partida.
- **Usuario (user):** Representa un usuario registrado en el sistema.

### Relaciones entre recursos ###

- Una partida tiene dos jugadores (jugador1 y jugador2).
- Un jugador tiene una cuadrícula donde coloca sus barcos.
- Un barco pertenece a un jugador y está ubicado en una posición específica de la cuadrícula.
- Un disparo es realizado por un jugador hacia otro en una partida.
- Un usuario puede estar asociado a una partida como jugador.

### Atributos de cada recurso ###

- **Partida (game):**
    - `id`: Identificador único de la partida.
    - `player1_id`: ID del jugador 1.
    - `player2_id`: ID del jugador 2.
    - `state`: Estado de la partida (creada, en curso, finalizada).
    - `winner_id`: ID del jugador ganador (si la partida ha finalizado).

- **Jugador (player):**
    - `id`: Identificador único del jugador.
    - `user_id`: ID del usuario asociado (puede ser nulo si el jugador es anónimo).
    - `game_id`: ID de la partida a la que pertenece el jugador.
    - `ship_ids`: Identificadores de los distintos barcos que tiene el jugador

- **Barco (ship):**
    - `id`: Identificador único del barco.
    - `player_id`: ID del jugador dueño del barco.
    - `type`: Tipo de barco (barco de 1, 2, 3, o 4 cuadrados).
    - `coordinates`: Posición del barco en la cuadrícula.
    - `coordinates_not_shot`: Coordinadas que no han sido tocadas aún. Empezará con el mismo valor que `coordinates` y irá bajando hasta no tener ninguna coordenada en caso de ser tocado.

- **Disparo (shot):**
    - `id`: Identificador único del disparo.
    - `origin_player_id`: ID del jugador que realiza el disparo.
    - `destination_player_id`: ID del jugador que recibe el disparo.
    - `coordinate`: Coordenada del disparo en la cuadrícula.
    - `successful`: Indica si el disparo ha acertado un barco.

- **Usuario (user):**
    - `id`: Identificador único del usuario.
    - `name`: Nombre del usuario.
    - `email`: Correo electrónico del usuario.

### Endpoints de la API ###

| Método HTTP | URI                                         | Query Params | Request Body                                              | Response Body                                                                                                 | Códigos HTTP de respuesta |
|-------------|---------------------------------------------|--------------|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|---------------------------|
| POST        | /games                                      | N/A          | ``{"user1": 1, "user2": null}``                           | ``{"id": 1, "player1_id": 1, "player2_id": 2, "state": "creada", "winner_id": null}``                         | 201, 400, 500             |
| PATCH       | /games/{id}                                 | N/A          | ``{"state": "en_curso"}``                                 | ``{"id": 1, "player1_id": 1, "player2_id": 2, "state": "en_curso", "winner_id": null}``                       | 200, 400, 404, 500        |
| DELETE      | /games/{id}                                 | N/A          | N/A                                                       | ``{"message": "Partida eliminada correctamente"}``                                                            | 204, 404, 500             |
| GET         | /games/{id}/details                         | N/A          | N/A                                                       | ``{"id": 1, "player1_id": 1, "player2_id": 2, "state": "finalizada", "winner_id": 1}``                        | 200, 404, 500             |
| GET         | /games/{id}/players/{id}/details            | N/A          | N/A                                                       | ``{"id": 1, "user_id": 1, "game_id": 1, ship_ids: [1,2]}``                                                    | 200, 404, 500             |
| POST        | /games/{id}/players/{id}/ships              | N/A          | ``{"type": 2, "coordinates": [[0,0],[0,1]]}``             | ``{"id": 1, "player_id": 1, "type": 2, "coordinates": [[0,0],[0,1]], "coordinates_not_shot": [[0,0],[0,1]]}`` | 201, 400, 404, 500        |
| GET         | /games/{id}/players/{id}/ships/{id}/details | N/A          | N/A                                                       | ``{"id": 1, "player_id": 1, "type": 2, "coordinates": [[0,0],[0,1]], "coordinates_not_shot": [[0,0],[0,1]]}`` | 200, 404, 500             |
| DELETE      | /games/{id}/players/{id}/ships/{id}         | N/A          | N/A                                                       | ``{"message": "Barco eliminado correctamente"}``                                                              | 204, 404, 500             |
| POST        | /games/{id}/players/{id}/shots              | N/A          | ``{"coordinate": [3,4]}``                                 | ``{"id": 1, "origin_player_id": 1, "destination_player_id": 2, "coordinate": [0,1], "successful": true}``     | 201, 400, 404, 500        |
| POST        | /users                                      | N/A          | ``{"name": "Usuario1", "email": "usuario1@example.com"}`` | ``{"id": 1, "name": "Usuario1", "email": "usuario1@example.com"}``                                            | 201, 400, 500             |
| GET         | /users/{id}/details                         | N/A          | N/A                                                       | ``{"id": 1, "name": "Usuario1", "email": "usuario1@example.com"}``                                            | 200, 404, 500             |
| DELETE      | /users/{id}                                 | N/A          | N/A                                                       | ``{"message": "Usuario eliminado correctamente"}``                                                            | 204, 404, 500             |
