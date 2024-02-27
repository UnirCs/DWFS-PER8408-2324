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

## Propuesta

**Recursos identificados:**

- Jugadores (players): Representan los jugadores
- Partida (games): Representa la partida y relaciona un tablero con un jugador en un juego
- Tablero (board): Representa la cuadricula con los barcos y las acciones sobre el mismo, contiene la información de la flota y un registro de los disparos realizados

| Método HTTP | URI               | Query Params | Cuerpo de la Petición                                                                                                                                                             | Cuerpo de la Respuesta                                                                                                                                                                                                            | Códigos de Respuesta                                                            |
|-------------|-------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| POST        | /players          | N/A          | `{"username":"jdavellaneda","email":"uncorreo@gmail.com"}`                                                                                                                        | `{"id": 1, "username":"jdavellaneda","email":"uncorreo@gmail.com"}`                                                                                                                                                               | 201 Created<br/>400 Bad request<br/>500 Internal Server Error                   |
| GET         | /players          | N/A          | N/A                                                                                                                                                                               | `[{"id": 1, "username":"jdavellaneda","email":"uncorreo@gmail.com"}]`                                                                                                                                                             | 200 OK<br/>400 Bad request<br/>500 Internal Server Error                        |
| GET         | /players/{id}     | N/A          | N/A                                                                                                                                                                               | `{"id": 1, "username":"jdavellaneda","email":"uncorreo@gmail.com"}`                                                                                                                                                               | 200 OK<br/>400 Bad request<br/>404 Not found<br/>500 Internal Server Error      |
| DELETE      | /players/{id}     | N/A          | N/A                                                                                                                                                                               | N/A                                                                                                                                                                                                                               | 200 OK<br/>400 Bad request<br/>404 Not found<br/>500 Internal Server Error      |
| POST        | /games            | N/A          | `{"players":{"first":{"id":1,"board":1},"second":{"id":2,"board":1}},"status":"CREATED"}`                                                                                         | `{"id":"1","players":{"first":{"id":1,"board":1},"second":{"id":2,"board":1},"winner":null},"status":"CREATED","date":"2024-02-19T00:49:46Z"}`                                                                                    | 201 Created<br/>400 Bad request<br/>404 Not found<br/>500 Internal Server Error |
| PATCH       | /games/{id}       | N/A          | `{"players": {"winner": 1 },"status":"FINISHED"}`                                                                                                                                 | `{"id":"1","players":{"first":{"id":1,"board":1},"second":{"id":2,"board":1},"winner": 1 },"status":"FINISHED","date":"2024-02-19T00:49:46Z"}`                                                                                    | 200 OK <br/>400 Bad request<br/>404 Not found<br/>500 Internal Server Error     |
| DELETE      | /games/{id}       | N/A          | N/A                                                                                                                                                                               | N/A                                                                                                                                                                                                                               | 200 OK <br/>400 Bad request<br/>404 Not found<br/>500 Internal Server Error     |
| POST        | /board            | N/A          | `{"fleet":{"status":"SUNK","ships":[{"name":"Patrol","positions":[{"id":"A1","hit":true}]},{"name":"Destroyer","positions":[{"id":"A1","hit":false},{"id":"A2","hit":false}]}]}}` | `{"id": 1, "fleet":{"status":"SUNK","ships":[{"name":"Patrol","positions":[{"id":"A1","hit":true}]},{"name":"Destroyer","positions":[{"id":"A1","hit":false},{"id":"A2","hit":false}]}]}}`                                        | 201 Created <br/>400 Bad request<br/>500 Internal Server Error                  |
| PATCH       | /board/{id}       | N/A          | `{"fleet":{"ships":[{"name":"Patrol","positions":[{"id":"A2"}]}]}]}}`                                                                                                             | `{"id": 1, "fleet":{"status":"SUNK","ships":[{"name":"Patrol","positions":[{"id":"A2","hit":true}]},{"name":"Destroyer","positions":[{"id":"A1","hit":false},{"id":"A2","hit":false}]}]}}`                                        | 200 OK <br/>400 Bad request<br/>404 Not found<br/>500 Internal Server Error                       |
| POST        | /board/{id}/shots | N/A          | `{"position":"A1"}`                                                                                                                                                               | `{"id": 1, "fleet":{"status":"SUNK","ships":[{"name":"Patrol","positions":[{"id":"A1","hit":true}]},{"name":"Destroyer","positions":[{"id":"A1","hit":false},{"id":"A2","hit":false}]}]},"shots":[{"position":"A1","hit":true}]}` | 200 OK <br/>400 Bad request<br/>404 Not found<br/>500 Internal Server Error                       |
| GET         | /board/{id}       | N/A          | N/A                                                                                                                                                                               | `{"id": 1, "fleet":{"status":"SUNK","ships":[{"name":"Patrol","positions":[{"id":"A1","hit":true}]},{"name":"Destroyer","positions":[{"id":"A1","hit":false},{"id":"A2","hit":false}]}]},"shots":[{"position":"A1","hit":true}]}`  | 200 OK <br/>400 Bad request<br/>404 Not found<br/>500 Internal Server Error                       |

- La partida se puede iniciar o finalizar modificando el estado de la misma.
- Similar al juego, el tablero del jugador tiene una cuadricula vacía donde registra los disparos realizados y otra cuadricula con sus barcos. El tablero contiene esta información, por lo que el disparo se realizar sobre este recurso. Internamente se valida el tablero del oponente que se obtiene de los datos de la partida para saber si el disparo es o no exitoso.

