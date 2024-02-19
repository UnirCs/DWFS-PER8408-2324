# API del juego hunde la flota

En este ejercicio vamos a diseñar la API REST que podría usar la App del juego 'Hundir la flota' o 'Juego de los barcos'. Si no conoces este juego puedes echar un vistazo al PDF de instrucciones que se encuentra en esta misma ruta, o descarga una App existente para jugar una partida. La aplicación gestionará principalmente partidas entre usuarios registrados o invitados (es decir, sin registro, anónimos). Cada partida tiene asociadas dos cuadrículas de 10x10 cuadrados, una por cada jugador, y estos jugadores deben poner sobre dicha cuadrícula las localizaciones de sus barcos. Tal como se indica en las instrucciones, deberá haber:

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

**Recursos identificados:**
- Partida (games): partida del juego llevada a cabo.
- Usuario (users): usuario que participa en partidas del juego.
- Jugador (players): jugador que partcipa en una partida concreta del juego
- Barco (ships): barco utilizado por un jugador durante una partida.
- Disparo (shots): disparo utilizado por un jugador durante una partida.

| Método HTTP | URI                                               | Query Params | Cuerpo de la Petición                                                                                                   | Cuerpo de la Respuesta                                                                                                                                                                                                                                                                                                 | Códigos de Respuesta                                                       |
|-------------|---------------------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| POST        | /games                                            | N/A          | `{"players": [{ "playerId": 1, "userId": 1 }, { "playerId": 2, "userId": 2 }], "status": "To be played", "winner": {}}` | `{"gameId": 1, "players": [{ "playerId": 1, "userId": 1 }, { "playerId": 2, "userId": 2 }], "status": "To be played", "winner": {}}`                                                                                                                                                                                   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| DELETE      | /games/{gameId}                                   | N/A          | N/A                                                                                                                     | `{"message": "game deleted"}`                                                                                                                                                                                                                                                                                          | 204 No content<br/>404 Not found<br/>500 Internal Server Error             |
| PUT         | /games/{gameId}                                   | N/A          | `{"players": [{ "playerId": 1, "userId": 1 }, { "playerId": 2, "userId": 2 }], "status": "To be played", "winner": {}}` | `{"gameId": 1, "players": [{ "playerId": 1, "userId": 1 }, { "playerId": 2, "userId": 2 }], "status": "To be played", "winner": {}}`                                                                                                                                                                                   | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| PATCH       | /games/{gameId}                                   | N/A          | `{"status": "finished",  "winner": {"playerId": 2}}`                                                                    | `{"gameId": 1, "players: [{ "userId": 3, "ships": [], "shots": [{"shotId": 1, "coordinates": [B,9]},...] }, { "userId": 4, "ships": [{"shipId": 1, "coordinates": {"firstGrid": [C,5], "finalGrid": [C,6]}}], "shots": [{"shotId": 1, "coordinates": [C,10]},...] }, "status": "Finished", "winner": {"playerId": 2}}` | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| GET         | /games/{gameId}                                   | N/A          | N/A                                                                                                                     | `{"gameId": 1, "players: [{ "userId": 3, "ships": [], "shots": [{"shotId": 1, "coordinates": [B,9]},...] }, { "userId": 4, "ships": [{"shipId": 1, "coordinates": {"firstGrid": [C,5], "finalGrid": [C,6]}}], "shots": [{"shotId": 1, "coordinates": [C,10]},...] }, "status": "Finished", "winner": {"playerId": 2}}` | 200 OK<br/>404 Not found<br/>500 Internal Server Error                     |
| POST        | /games/{gameId}/players/{playerId}/ships          | N/A          | `{"coordinates": {"firstGrid": [C,5], "finalGrid": [C,6]}}`                                                             | `{"shipId": 1, "playerId": 1, "coordinates": {"firstGrid": [C,5], "finalGrid": [C,6]}}`                                                                                                                                                                                                                                | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| DELETE      | /games/{gameId}/players/{playerId}/ships/{shipId} | N/A          | N/A                                                                                                                     | `{"message": "ship deleted"}`                                                                                                                                                                                                                                                                                          | 204 No content<br/>404 Not found<br/>500 Internal Server Error             |
| GET         | /games/{gameId}/players/{playerId}/ships          | N/A          | N/A                                                                                                                     | `{"ships": [{"shipId": 1, "coordinates": {"firstGrid": [C,5], "finalGrid": [C,6]}}]}`                                                                                                                                                                                                                                  | 200 OK<br/>404 Not found<br/>500 Internal Server Error                     |
| POST        | /games/{gameId}/players/{playerId}/shots          | N/A          | `{"coordinates": [B,9]}`                                                                                                | `{"shotId": 1, "coordinates": [B,9]}`                                                                                                                                                                                                                                                                                  | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| POST        | /users                                            | N/A          | `{"name": "Gorka", "email": "gorka.gonzalez.gomez@gmail.com"}`                                                          | `{"userId": 4, "name": "Gorka", "email": "gorka.gonzalez.gomez@gmail.com"}`                                                                                                                                                                                                                                            | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| GET         | /users/{userId}                                   | N/A          | N/A                                                                                                                     | `{"userId": 4, "name": "Gorka", "email": "gorka.gonzalez.gomez@gmail.com", games: [{"gameId": 1, "ships": [{"shipId": 1, "coordinates": {"firstGrid": [C,5], "finalGrid": [C,6]}}], "shots": [{"shotId": 1, "coordinates": [C,10]},...], result: "won"}]}`                                                             | 200 OK<br/>404 Not found<br/>500 Internal Server Error                     | 
| DELETE      | /users/{userId}                                   | N/A          | N/A                                                                                                                     | `{"message": "user deleted"}`                                                                                                                                                                                                                                                                                          | 204 No content<br/>404 Not found<br/>500 Internal Server Error             |
