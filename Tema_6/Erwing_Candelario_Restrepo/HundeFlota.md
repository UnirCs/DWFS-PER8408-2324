# API de Hunde la Flota

**Recursos identificados**

- Juegos: permite determinar cada una de las partidas que se hacen del juego.
- Usuarios: permite determinar usuarios registrados del juego.
- Barcos: permite determinar cada uno de los barcos de la partida, pertenecientes a un jugador.
- Disparos: permite determinar los disparos realizados por un jugador en una partida.
  | Método HTTP | URI | Query Params | Request Body | Response Body | Códigos HTTP de respuesta |
  |-------------|----------------|--------------|--------------|------------------|-------------------------|
  | GET | /usuarios/{Idusuario} | Idusuario | N/A | `{ "nombre": "Erwing"}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
  | POST | /usuarios | N/A | `{ "nombre": "Erwing"}` |`{"Idusuario": 1, "nombre: Erwing"}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
  | DELETE | /usuarios/{Idusuario} | Idusuario | N/A | N/A | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
  | POST | /juegos | N/A | `{"Jugadores":[{"IUdsuario":1,"nombre":"Erwing"},{"IUdsuario":1,"nombre":"Heider"}]}` |`{"IdJuego":1,"Fase":1,"Completado":false,"Ganador":false,"Jugadores":[{"IUdsuario":1,"nombre":"Erwing","barcos":[],"disparos":[]},{"IUdsuario":2,"name":"Heider","barcos":[],"disparos":[]}]}` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
  | DELETE | /juegos/{IdJuego} | IdJuego | N/A | N/A | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error |
  | PATCH | /juegos/{IdJuego} | IdJuego | `{"IdUsario":2,,"Fase":1,"Completado":true }` |`{"IdJuego":1,"Fase":1,"Completado":true,"Ganador":true,"Jugador":{"IUdsuario":2,"nombre":"Heider","barcos":[{"nombre":"Barco 1","posicion":["A1","A2","A3","A4"]},{"nombre":"Barco 2","posicion":["C2","D2","E2"]}],"disparos":["C5","D5"]}}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
  | GET | /juegos/{IdJuego} | - | - | `{"Juego":{"IdJuego":1,"Fase":1,"Completado":true,"jugadores":[{"IUdsuario":2,"nombre":"Heider","Ganador":true,"barcos":[{"nombre":"Barco 1","posicion":["A1","A2","A3","A4"]},{"nombre":"Barco 2","posicion":["C2","D2","E2"]}],"disparos":["C5","D5"]},{"IUdsuario":1,"nombre":"Erwing","Ganador":false,"barcos":[{"nombre":"Barco 1","posicion":["B1","B2","B3","B4"]},{"nombre":"Barco 2","posicion":["A2","B2","E2"]}],"disparos":["E5","B5"]}]}}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
