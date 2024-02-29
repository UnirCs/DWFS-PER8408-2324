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

**Recursos identificados:**
- partidas : Representa las partidas que se van a crear.
- barcos: Representa los barcos de las partidas.
- disparos: los disparos realizados.
- usuarios: los ususarios de las partidas.


| Método HTTP | URI              | Query Params | Request Body                    | Response Body                   | Códigos HTTP de respuesta |
|-------------|------------------|--------------|---------------------------------|---------------------------------|-------------------------  |
| POST        | /partidas        | -            | {"nombre":"Partida1",           |   {"id": 1,                     | 201                       |
|             |                  |              |  "jugadores":["user1","user2"]} |    "nombre":"Partida1",         | 400                       |
|             |                  |              |                                 |    "estado": "pendiente"}       | 409                       |
|             |                  |              |                                 |                                 | 500                       |
|-----------------------------------------------------------------------------------------------------------------------------------------------|
| DELETE      | /partidas/{id}   | -            | -                               |  {"accion":"Eliminar"           | 200                       |
|             |                  |              |                                 |   "nombre": "Partida1"}         | 400                       |
|             |                  |              |                                 |                                 | 404                       |
|             |                  |              |                                 |                                 | 500                       |
|-------------|------------------|--------------|---------------------------------|---------------------------------|---------------------------|
| PATCH       | /partidas/{id}   | -            | #Modificar Generico             |   {"id": 1,                     | 200                       |
|             |                  |              |  {"nombre":"Partida1",          |    "accion": "Modificada",      | 400                       |
|             |                  |              |  "jugadores":["user3","user4"]} |    "nombre": "Partida1"}        | 404                       |
|             |                  |              |                                 |                                 | 500                       |
|             |                  |              | #Iniciar Partida                |                                 |                           |
|             |                  |              |  {"jugadorIniciador": "user1",  |   {"mensaje": "ha comenzado"}   |                           |
|             |                  |              |    "estado": "01" }             |                                 |                           |
|             |                  |              |                                 |                                 |                           |
|             |                  |              | #Finalizar Partida              |                                 |                           |
|             |                  |              |  {"jugadorFinalizador": "user1",|   {"mensaje": "ha finalizado",  |                           |
|             |                  |              |    "estado": "02" }             |   "ganador": "user1"}           |                           |
|             |                  |              |                                 |                                 |                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------|
| GET         | /partidas/{id}   | -            | -                               |   {"id": 1,                     | 200                       |
|             |                  |              |                                 |    "nombre":"Partida1",         | 400                       |
|             |                  |              |                                 |    "estado": "finalizada",      | 404                       |
|             |                  |              |                                 |    "jugadores": [               | 500                       |
|             |                  |              |                                 |        {"nombre": "Usuario1",   |                           |
|             |                  |              |                                 |         "jugadas": ["A3"...],   |                           |
|             |                  |              |                                 |         "barcos": [             |                           |
|             |                  |              |                                 |            {"tipo": "barco_4",  |                           |
|             |                  |              |                                 |             "orientacion": "V"},|                           |
|             |                  |              |                                 |            {"tipo": "barco_2",  |                           |
|             |                  |              |                                 |             "orientacion": "h"} |                           |
|             |                  |              |                                 |             ]}]}                |                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------|
| POST        | /partidas/{id}/  | -            | {"tipo": "barco_4",             |   {"id": 1,                     | 201                       |
|             | jugadores/       |              |  "posicion": {                  |    "tipo": "barco_4",           | 400                       |
|             | {jugadorId}/     |              |               "fila": 2,        |    "orientacion": "vertical"}   | 409                       |
|             | barcos           |              |               "columna": 3      |                                 | 500                       |
|             |                  |              |               },                |                                 |                           |
|             |                  |              |  "orientacion": "V" }           |                                 |                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------|
| DELETE      | /partidas/{id}/  | -            | -                               |   {"accion":"Eliminar",         | 200                       |
|             | jugadores/       |              |                                 |    "tipo": "barco_4"}           | 400                       |
|             | {jugadorId}/     |              |                                 |                                 | 409                       |
|             | barcos/{barcoId} |              |                                 |                                 | 500                       |
|             |                  |              |                                 |                                 |                           |
|             |                  |              |                                 |                                 |                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------|
| GET         | /partidas/{id}/  | -            | -                               |   {"jugador": "user1",          | 200                       |
|             | jugadores/       |              |                                 |    "barcos": [                  | 400                       |
|             | {jugadorId}/     |              |                                 |       {"tipo": "barco_4",       | 404                       |
|             | barcos           |              |                                 |        "posicion": {            | 500                       |
|             |                  |              |                                 |            "fila": 0,           |                           |
|             |                  |              |                                 |            "columna": 2         |                           |
|             |                  |              |                                 |            },                   |                           |
|             |                  |              |                                 |        "orientacion": "V"       |                           |
|             |                  |              |                                 |         },                      |                           |
|             |                  |              |                                 |        // ... otros barcos ...  |                           |
|             |                  |              |                                 |        ]                        |                           |
|             |                  |              |                                 |     }                           |                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------|
| POST        | /partidas/{id}/  | -            | {"jugador": "user1",            |   {"resultado": "agua"}         | 201                       |
|             | disparos         |              |  "fila": 5,                     |                                 | 400                       |
|             |                  |              |  "columna": 6}                  |                                 | 404                       |
|             |                  |              |                                 |                                 | 409                       |
|             |                  |              |                                 |                                 | 500                       |
|-----------------------------------------------------------------------------------------------------------------------------------------------|
| POST        | /usuarios/       | -            | {"nombre": "user3",             |   {"id": 1,                     | 201                       |
|             |                  |              |  "correo": "correo@us.com"      |    "nombre": "user3"}           | 400                       |
|             |                  |              |  "password":"*********",        |                                 | 409                       |
|             |                  |              |  "dirección":"Direccion1"}      |                                 | 500                       |
|             |                  |              |                                 |                                 |                           |
|             |                  |              |                                 |                                 |                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------|
| GET         | /usuarios/{id}   | -            | -                               |   {"id": 1,                     | 200                       |
|             |                  |              |                                 |    "nombre": "user3",           | 400                       |
|             |                  |              |                                 |    "correo": "correo@us.com"}   | 404                       |
|             |                  |              |                                 |                                 | 500                       |
|             |                  |              |                                 |                                 |                           |
|             |                  |              |                                 |                                 |                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------|
| DELETE      | /usuarios/{id}   | -            | -                               |   {"accion":"Eliminar",         | 200                       |
|             |                  |              |                                 |    "nombre": "user3"}           | 400                       |
|             |                  |              |                                 |                                 | 404                       |
|             |                  |              |                                 |                                 | 500                       |
|             |                  |              |                                 |                                 |                           |
|             |                  |              |                                 |                                 |                           |
|-----------------------------------------------------------------------------------------------------------------------------------------------|