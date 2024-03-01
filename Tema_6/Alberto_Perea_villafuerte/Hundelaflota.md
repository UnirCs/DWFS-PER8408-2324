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
- Crear una partida. *
- Eliminar una partida. *
- Modificar datos de una partida. *
- Iniciar una partida. *
- Finalizar una partida. *
- Consultar todos los datos (jugadores asociados, barcos de cada jugador, disparos realizados, ganador...) de una partida.
- Añadir un barco a la cuadrícula de un jugador en una partida. *
- Eliminar un barco de la cuadrícula de un jugador en una partida. *
- Consultar todos los barcos de un jugador de una partida.*
- Registrar un disparo de un jugador a otro en una partida.
- Crear un usuario.*
- Obtener datos de un usuario.*
- Eliminar un usuario.*

Ten en cuenta que podría no ser necesario definir un endpoint por cada una de las operaciones que se han listado. No obstante, dichas operaciones deben ser satisfechas por la API diseñada. Las primeras preguntas que deberás hacerte son:
- ¿Qué recursos tiene que manejar la API?
- ¿Cómo se relacionan entre sí?
- ¿Qué información (atributos) guarda cada recurso?

### Recursos identificados ###

- **Partidas (partidas):** 
- **Barcos (barcos):** 
- **Jugadores (jugadores):** //usuarios
- **Disparos (disparo):** 
### Relaciones ###
- **jugadores con partidas:** 
### Atributos ###

| Método HTTP | URI | Query Params | Request Body | Response Body | Códigos HTTP de respuesta |
  |-------------|----------------|--------------|--------------|------------------|-------------------------|
  | GET | /jugadores/{jugadorId} | jugadorId | N/A | `{ "nombre": "Jugador 1"}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
  | POST | /jugadores | N/A | `{ "nombre": "jugador 1"}` |`{"jugadorId": 1, "nombre: jugador 1"}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
  | DELETE | /jugadores/{jugadorId} | N/A | N/A | `{"message": "Jugador removed"}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
  | POST | /partidas | N/A | `{"jugadores":[{"jugadorId":1},{"jugadorId":2}]}` |`{"partidaId":1,"Fase":1,"Completado":false,"Ganador":false,"Jugadores":[{"jugadorId":1,"barcos":[],"disparos":[]},{"JugadorId":2 ,"barcos":[],"disparos":[]}]}` | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
  | DELETE | /partidas/{partidaId} | N/A | N/A |  `{"message": "Partida removed"}`  | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error |
  | PATCH | /partidas/{partidaId} | partidaId | `{"JugadorId":2,"Fase":1,"Completado":true "Ganador":true,"Jugadores":{"jugadorId":2, "barcos":[{"nombre":"Barco 1","posicion":["A1","A2","A3","A4"]},{"nombre":"Barco 2","posicion":["C2","D2","E2"]}],"disparos":["C5","D5"]}}` |`{"partidaId":1,"Fase":1,"Completado":true,"Ganador":true,"Jugadores":{"jugadorId":2, "barcos":[{"nombre":"Barco 1","posicion":["A1","A2","A3","A4"]},{"nombre":"Barco 2","posicion":["C2","D2","E2"]}],"disparos":["C5","D5"]}}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
  | GET | /partidas/{partidaId} | N/A | N/A | `{"partidas":{"partidaId":1,"Fase":1,"Completado":true,"jugadores":[{"jugadorId":2,"nombre":"Jugador 1","Ganador":true,"barcos":[{"nombre":"Barco 1","posicion":["A1","A2","A3","A4"]},{"nombre":"Barco 2","posicion":["C2","D2","E2"]}],"disparos":["C5","D5"]},{"jugadorId":2,"nombre":"Jugador 2","Ganador":false,"barcos":[{"nombre":"Barco 1","posicion":["B1","B2","B3","B4"]},{"nombre":"Barco 2","posicion":["A2","B2","E2"]}],"disparos":["E5","B5"]}]}}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error | 
