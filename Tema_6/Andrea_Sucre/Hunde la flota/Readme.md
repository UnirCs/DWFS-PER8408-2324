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

## Recursos

- Partidas (games)
- Turnos (turns)
- Jugadores (users)
- Barcos (ships)


| Método HTTP | URI                                   | Query Params | Request Body                                                        | Response Body                                                                                                                                                                                                                                                                                                                                                    | Códigos HTTP de respuesta |
|-------------|---------------------------------------|--------------|---------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|
| POST        | /api/v1/games                         | -            | ``{ "player_one_id": 1, "player_two_id": 2 }``                      | ``{"data":{ "id": 1, "status": "created" } , "error": null }``                                                                                                                                                                                                                                                                                                   | 201 Created               |
| DELETE      | /api/v1/games/:id                     | -            | -                                                                   | -                                                                                                                                                                                                                                                                                                                                                                | 204 No Content            |
| PUT         | /api/v1/games/:id                     | -            | ``{ "player_one_id": 1, "player_two_id": 3, "status": "created" }`` | -                                                                                                                                                                                                                                                                                                                                                                | 204 No Content            |
| GET         | /api/v1/games/:id                     | -            | -                                                                   | ``{"data":{ "id": 1, "status": "ongoing", "winner_user_id": null, "player_one": { "id": 1, "name": "Pedro", "shots": 2, ships": [ { "id": 1, "name": "Ship A", "remaining_slots": 1, "slots": 3 } ] }, "player_two": { "id": 2, "name": "Sara", "shots": 2, ships": [ { "id": 1, "name": "Ship B", "remaining_slots": 1, "slots": 3 } ] }  } , "error": null }`` | 200 OK                    |
| GET         | /api/v1/games/:id/users/:id/ships     | -            | -                                                                   | ``{"data":{ "id": 1, "name": "Pedro", "shots": 2, ships": [ { "id": 1, "name": "Ship A", "remaining_slots": 1, "slots": 3 } ] }  } , "error": null }``                                                                                                                                                                                                           | 200 OK                    |
| POST        | /api/v1/games/:id/users/:id/ships     | -            | ``{ "id": 1, "name": "Ship A", "remaining_slots": 1, "slots": 3 }`` | ``{"data":{ "id": 1 } , "error": null }``                                                                                                                                                                                                                                                                                                                        | 201 Created               |
| DELETE      | /api/v1/games/:id/users/:id/ships/:id | -            | -                                                                   | -                                                                                                                                                                                                                                                                                                                                                                | 204 No Content            |
| PUT         | /api/v1/games/:id/users/:id/ships     | -            | ``{ "id": 1, "name": "Ship A", "remaining_slots": 0, "slots": 3 }`` | -                                                                                                                                                                                                                                                                                                                                                                | 204 No Content            |
| POST        | /api/v1/users                         | -            | ``{ "name": "Pedro" }``                                             | ``{"data":{ "id": 1 } , "error": null }``                                                                                                                                                                                                                                                                                                                        | 201 Created               |
| GET         | /api/v1/users/:id                     | -            | -                                                                   | ``{"data":{ "id": 1, "name": "Pedro", "games_won": 20, "games_lost": 4 }``                                                                                                                                                                                                                                                                                       | 200 OK                    |
| DELETE      | /api/v1/users/:id                     | -            | -                                                                   | -                                                                                                                                                                                                                                                                                                                                                                | 204 No Content            |

  - El estado (status) se actualizará con el método PUT para iniciar la partida con el estado 'ongoing' y finalizar como 'ended'
  - El disparo de un jugador a otro se actualizará mediante el método PUT de los ships del jugador atacado




<br/>  
400 Bad Request   

    {"data": null, "error": { "code": "INVALID_OPERATION", message: "This operation is not valid" } }     

<br/>  
500 Internal Server Error   

    {"data": null, "error": { "code": "INTERNAL_SERVER_ERROR", message: "Internal server error" } }
