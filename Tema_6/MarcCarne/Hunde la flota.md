# API de Hunde la Flota

**Recursos identificados**
- Games (partidas): permite identificar cada una de las partidas que se hacen del juego, dos ususarios estarán relacionados en esa partida.
  Una partida contiene un atributo que permite identificar el estado de la partida. Cuando se genera una partida se inicia y el estado será "juego no finalizado", estado "false".
- Players (jugadores): permite identificar cada uno de los jugadores del juego.
- Ships (barcos): permite identificar cada uno de los barcos de la partida, pertenecientes a un jugador.
- Shots (disparos): permite identificar los disparos realizados por un jugador en una partida.

Como las partidas pueden ser anónimas no se puede usar el ID del jugador como requisito de creación. Se usará el nombre del jugador como dato en la partida.

| Método HTTP  | URI                | Query Params | Request Body | Response Body    | Códigos HTTP de respuesta |
|--------------|--------------------|--------------|--------------|------------------|-------------------------|
| POST         | /games            | -            | `{"player1": {"name": "Player 1"}, "player2": {"name": "Player 2"}}` | `{"gameId": 1, "gameComplete": false, "winner": null, "player1": {"name": "Player 1", "boats": [], "shots": []}, "player2": {"name": "Player 2", "boats": [
{"name": "Boat 1", "location": [J7, J8, J9, J10], "status": [false, false, false, false]}
{"name": "Boat 2", "location": [F7, F8, F9], "status": [false, false, false]}
{"name": "Boat 3", "location": [G1, G2, G3], "status": [false, false, false]}
{"name": "Boat 4", "location": [B3, C3], "status": [false, false]}
{"name": "Boat 5", "location": [C7, D7], "status": [false, false]}
{"name": "Boat 6", "location": [E1, E2], "status": [false, false]}
{"name": "Boat 7", "location": [F5], "status": [false]}
{"name": "Boat 8", "location": [H10], "status": [false]}
{"name": "Boat 9", "location": [J4], "status": [false]}
{"name": "Boat 10", "location": [B9], "status": [false]}
], "shots": []}}}` | 201 Created<br/>400 Bad Request<br/>404 Bad Request<br/>500 Internal Server Error |

| DELETE       | /games/{gameId}  | -            | -                 | `{"message": "Game deleted"}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
| PATCH        | /games/{gameId}  | -            | `{"gameComplete": true, "player1": {"name": "Player 1", "winner": true, "points":60}, "player2": {"name": "Player 2", "winner": false, "points":20}}` | `{"gameId": 1, "gameComplete": true, "player1": {"name": "Player 1", "winner": true, "points":0}, "player2": {"name": "Player 2", "winner": false, "points":0}} | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| GET          | /games/{gameId}   | -            | -                   | `{"gameId": 1, "gameComplete": true, "winner": "player1", "player1": {"name": "Player 1", "boats": [
{"name": "Boat 1", "location": [A1, A2, A3, A4], "status": [false, false, false, false]}
{"name": "Boat 2", "location": [C2, D2, E2], "status": [false, true, false]}
{"name": "Boat 3", "location": [G7, G8, G9], "status": [false, false, false]}
{"name": "Boat 4", "location": [D8, E8], "status": [false, true]}
{"name": "Boat 5", "location": [J1, J2], "status": [false, false]}
{"name": "Boat 6", "location": [A10, B10], "status": [true, false]}
{"name": "Boat 7", "location": [J5], "status": [false]}
{"name": "Boat 8", "location": [H3], "status": [true]}
{"name": "Boat 9", "location": [D5], "status": [true]}
{"name": "Boat 10", "location": [A7], "status": [false]}
], "shots": [J7, J8, J9, J10, F7, F8, F9, G1, G2, G3, B3, C3, C7, D7, E1, E2, F5, H10, J4, B9, A3, A5, D10, F10]}, "player2": {"name": "Player 2", "boats": [
{"name": "Boat 1", "location": [J7, J8, J9, J10], "status": [true, true, true, true]}
{"name": "Boat 2", "location": [F7, F8, F9], "status": [true, true, true]}
{"name": "Boat 3", "location": [G1, G2, G3], "status": [true, true, true]}
{"name": "Boat 4", "location": [B3, C3], "status": [true, true]}
{"name": "Boat 5", "location": [C7, D7], "status": [true, true]}
{"name": "Boat 6", "location": [E1, E2], "status": [true, true]}
{"name": "Boat 7", "location": [F5], "status": [true]}
{"name": "Boat 8", "location": [H10], "status": [true]}
{"name": "Boat 9", "location": [J4], "status": [true]}
{"name": "Boat 10", "location": [B9], "status": [true]}
], "shots": [D2, E8, A10, H3, D5, A6, A9, B1, B5, C5, C8, C10, D1, E5, E6, E10, F2, G5, G10, H1, H6, I2, I4, I6]}}}` | 201 Created<br/>400 Bad Request<br/>404 Bad Request<br/>500 Internal Server Error |



| POST         | /games            | -            | `{"player1": {"name": "Player 1", "boats": [
{"name": "Boat 1", "location": [A1, A2, A3, A4], "status": [false, false, false, false]}
{"name": "Boat 2", "location": [C2, D2, E2], "status": [false, false, false]}
{"name": "Boat 3", "location": [G7, G8, G9], "status": [false, false, false]}
{"name": "Boat 4", "location": [D8, E8], "status": [false, false]}
{"name": "Boat 5", "location": [J1, J2], "status": [false, false]}
{"name": "Boat 6", "location": [A10, B10], "status": [false, false]}
{"name": "Boat 7", "location": [J5], "status": [false]}
{"name": "Boat 8", "location": [H3], "status": [false]}
{"name": "Boat 9", "location": [D5], "status": [false]}
{"name": "Boat 10", "location": [A7], "status": [false]}
]}, "player2": {"name": "Player 2", "boats": [
{"name": "Boat 1", "location": [J7, J8, J9, J10], "status": [false, false, false, false]}
{"name": "Boat 2", "location": [F7, F8, F9], "status": [false, false, false]}
{"name": "Boat 3", "location": [G1, G2, G3], "status": [false, false, false]}
{"name": "Boat 4", "location": [B3, C3], "status": [false, false}
{"name": "Boat 5", "location": [C7, D7], "status": [false, false]}
{"name": "Boat 6", "location": [E1, E2], "status": [false, false]}
{"name": "Boat 7", "location": [F5], "status": [false]}
{"name": "Boat 8", "location": [H10], "status": [false]}
{"name": "Boat 9", "location": [J4], "status": [false]}
{"name": "Boat 10", "location": [B9], "status": [false]}
]}}` | `{"gameId": 1, "gameComplete": false, "winner": null, "player1": {"name": "Player 1", "boats": [
{"name": "Boat 1", "location": [A1, A2, A3, A4], "status": [false, false, false, false]}
{"name": "Boat 2", "location": [C2, D2, E2], "status": [false, false, false]}
{"name": "Boat 3", "location": [G7, G8, G9], "status": [false, false, false]}
{"name": "Boat 4", "location": [D8, E8], "status": [false, false]}
{"name": "Boat 5", "location": [J1, J2], "status": [false, false]}
{"name": "Boat 6", "location": [A10, B10], "status": [false, false]}
{"name": "Boat 7", "location": [J5], "status": [false]}
{"name": "Boat 8", "location": [H3], "status": [false]}
{"name": "Boat 9", "location": [D5], "status": [false]}
{"name": "Boat 10", "location": [A7], "status": [false]}
], "shots": []}, "player2": {"name": "Player 2", "boats": [
{"name": "Boat 1", "location": [J7, J8, J9, J10], "status": [false, false, false, false]}
{"name": "Boat 2", "location": [F7, F8, F9], "status": [false, false, false]}
{"name": "Boat 3", "location": [G1, G2, G3], "status": [false, false, false]}
{"name": "Boat 4", "location": [B3, C3], "status": [false, false]}
{"name": "Boat 5", "location": [C7, D7], "status": [false, false]}
{"name": "Boat 6", "location": [E1, E2], "status": [false, false]}
{"name": "Boat 7", "location": [F5], "status": [false]}
{"name": "Boat 8", "location": [H10], "status": [false]}
{"name": "Boat 9", "location": [J4], "status": [false]}
{"name": "Boat 10", "location": [B9], "status": [false]}
], "shots": []}}}` | 201 Created<br/>400 Bad Request<br/>404 Bad Request<br/>500 Internal Server Error |



{"name": "Boat 1", "location": [A1, A2, A3, A4], "status": [false, false, false, false]}
{"name": "Boat 2", "location": [C2, D2, E2], "status": [false, false, false]}
{"name": "Boat 3", "location": [G7, G8, G9], "status": [false, false, false]}
{"name": "Boat 4", "location": [D8, E8], "status": [false, false]}
{"name": "Boat 5", "location": [J1, J2], "status": [false, false]}
{"name": "Boat 6", "location": [A10, B10], "status": [false, false]}
{"name": "Boat 7", "location": [J5], "status": [false]}
{"name": "Boat 8", "location": [H3], "status": [false]}
{"name": "Boat 9", "location": [D5], "status": [false]}
{"name": "Boat 10", "location": [A7], "status": [false]}

{"name": "Boat 1", "location": [J7, J8, J9, J10], "status": [false, false, false, false]}
{"name": "Boat 2", "location": [F7, F8, F9], "status": [false, false, false]}
{"name": "Boat 3", "location": [G1, G2, G3], "status": [false, false, false]}
{"name": "Boat 4", "location": [B3, C3], "status": [false, false}
{"name": "Boat 5", "location": [C7, D7], "status": [false, false]}
{"name": "Boat 6", "location": [E1, E2], "status": [false, false]}
{"name": "Boat 7", "location": [F5], "status": [false]}
{"name": "Boat 8", "location": [H10], "status": [false]}
{"name": "Boat 9", "location": [J4], "status": [false]}
{"name": "Boat 10", "location": [B9], "status": [false]}