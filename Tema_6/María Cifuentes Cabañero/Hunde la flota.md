# API del juego hunde la flota

Las operaciones que la API debe soportar son las siguientes:

-Crear una partida.
-Eliminar una partida.
-Modificar datos de una partida.
-Iniciar una partida.
-Finalizar una partida.
-Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una partida.
-Añadir un barco a la cuadrícula de un jugador en una partida.
-Eliminar un barco de la cuadrícula de un jugador en una partida.
-Consultar todos los barcos de un jugador de una partida.
-Registrar un disparo de un jugador a otro en una partida.
-Crear un usuario.
-Obtener datos de un usuario.
-Eliminar un usuario.
Ten en cuenta que podría no ser necesario definir un endpoint por cada una de las operaciones que se han listado. No obstante, dichas operaciones deben ser satisfechas por la API diseñada.

**Recursos identificados:**
- Partida (games): Representa una partida
- Barco (boats): Representa los barcos 
- Disparo (shoots): Representan los disparos
- Usuario (users): Representa un usuario

| Método HTTP | URI                                              | Query Params | Cuerpo de la Petición                                                                            | Cuerpo de la Respuesta                                                                                                                                                                             | Códigos de Respuesta                                                       |
|-------------|--------------------------------------------------|--------------|--------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| POST        | /games                                           | N/A          | `{"player1": "María", "player2": "Daniel"}`                                                      | `{"gameId":1 , "player1": {"playerId": 1, "name": "María", barcos: 0, disparos: 0}, "player2": {"playerId": 2, "name": "Daniel", barcos: 0, disparos: 0}, "estado": "creada", "ganador":null}`     | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| DELETE      | /games/{gameId}                                  | N/A          | N/A                                                                                              | `{"message": "Game deleted"}`                                                                                                                                                                      | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| PATCH       | /games/{gameId}                                  | N/A          | `{"estado": "iniciada"}` /  `{"disparos": 1}`                                                    | `{"gameId":1 , "player1": {"playerId": 1, "name": "María", barcos: 10, disparos: 0}, "player2": {"playerId": 2, "name": "Daniel", barcos: 10, disparos: 0}, "estado": "iniciada", "ganador":null}` | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| GET         | /games/{gameId}                                  | N/A          | N/A                                                                                              | `{"gameId":1 , "player1": {"name": "María", barcos: 0, disparos: 30}, "player2": {"name": "Daniel", barcos: 4, disparos: 50}, "estado": "finalizada", "ganador":"player2"}`                        | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error                   |
| POST        | /games/{gameId}/player/{playerId}/boats          | N/A          | `{"tamaño": 4}`                                                                                  | `{"boatId":1 , "gameId": 1, "playerId": 1, "tamaño": 4}`                                                                                                                                           | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| DELETE      | /games/{gameId}/player/{playerId}/boats/{boatId} | N/A          | N/A                                                                                              | `{"message": "Boat deleted"}`                                                                                                                                                                      | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| GET         | /games/{gameId}/player/{playerId}/boats          | N/A          | N/A                                                                                              | `{"boats" : [{"boatId":1 , "gameId": 1, "playerId": 1, "tamaño": 4}]}`                                                                                                                             | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error                   |
| POST        | /users                                           | N/A          | `{"nombre": "María", "apellido": "Cifuentes", "dni":"12345678A", fechaNacimiento: "26/12/1997"}` | `{"userId":1 ,"nombre": "María", "apellido": "Cifuentes", "dni":"12345678A", fechaNacimiento: "26/12/1997"}`                                                                                       | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error              |
| DELETE      | /users/{userId}                                  | N/A          | N/A                                                                                              | `{"message": "User deleted"}`                                                                                                                                                                      | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                     |
| PATCH       | /users/{userId}                                  | N/A          | `{"fechaNacimiento": "26/12/1995}`                                                               | `{"userId":1 ,"nombre": "María", "apellido": "Cifuentes", "dni":"12345678A", fechaNacimiento: "26/12/1995"}`                                                                                       | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |


