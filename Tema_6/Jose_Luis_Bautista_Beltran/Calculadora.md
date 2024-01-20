# Ejercicio 1 : API de Calculadora
### Fecha: 19/01/2024
### Autor : José Luis Bautista Beltrán
------------

En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:

- Sumar N elementos (2+2, 2+2+2).
- Restar N elementos (2-2, 2-2-2).
- Multiplicar 2 elementos (2x2).
- Dividir 2 elementos (2/2).
- Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8). (sqrt(4,2),sqrt(8,3))
- Potencia N-ésima de un número (2^2, 3^3, 4^4).
- Detalle de operacion

Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.

Para mi caso he simplificado al manejo de **expresiones matemáticas** y con sólo dos métodos POST y GET accedo al servicio y obtengo lo que se ha procesado.


| Método HTTP | URI | Query Params | Request Body | Response Body | Códigos HTTP de respuesta |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| POST | /api/calculator/ | - | ``{"expression" : "2+2+2"} ``| ``{"id": 1, "result":6, "expression" : "2+2+2"}`` | 201 Created 400 Bad Request 404 Not Found 500 Internal Error |
| GET | /api/calculator/{id}/ | {id=1} | - | ``{"id": 1,"expression" : "2+2+2"}`` | 200 OK 400 Bad request 404 Not Found 500 Internal Error |

El otro modelo planteado es hacer los servicios clásicos de dos operadores y un servicio por cada operación.

(Lo hice inicialmente pero luego me dí cuenta que es mejor con sintáxis)

| Método HTTP | URI | Query Params | Request Body | Response Body | Códigos HTTP de respuesta |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| GET | /api/calculator/{id}/ | {id=1} | ``-`` | ``{"id": 1,"expression" : "2+2+2"}`` | 200 OK 400 Bad request 404 Not Found 500 Internal Error |
| POST | /api/calculator/addition/ | - | ``{"operator1" : 1 ,"operator2" : 1}`` | ``{"id": 1, "result":2}`` | 201 Created 400 Bad Request 404 Not Found 500 Internal Error |
| GET | /api/calculator/addition/{id}/ | {id=1} | ``-`` | ``{"id": 1, "result":2}`` | 200 OK 400 Bad request 404 Not Found 500 Internal Error |
| POST | /api/calculator/subtraction/ | - | ``{"operator1" : 1 ,"operator2" : 1}`` | ``{"id": 2, "result":0}`` | 201 Created 400 Bad Request 404 Not Found 500 Internal Error |
| GET | /api/calculator/subtraction/{id}/ | {id=2} | ``-`` | ``{"id": 2, "result":0}`` | 200 OK 400 Bad request 404 Not Found 500 Internal Error |
| POST | /api/calculator/multiplication/ | - | ``{"operator1" : 8 ,"operator2" : 5}`` | ``{"id": 3, "result":40}`` | 201 Created 400 Bad Request 404 Not Found 500 Internal Error |
| GET | /api/calculator/multiplication/{id}/ | {id=3} | ``-`` | ``{"id": 3, "result":40}`` | 200 OK 400 Bad request 404 Not Found 500 Internal Error |
| POST | /api/calculator/division/ | - | ``{"operator1" : 14 ,"operator2" : 2}`` | ``{"id": 4, "result":7}`` | 201 Created 400 Bad Request 404 Not Found 500 Internal Error |
| GET | /api/calculator/division/{id}/ | {id=4} | ``-`` | ``{"id": 4, "result":7}`` | 200 OK 400 Bad request 404 Not Found 500 Internal Error |
| POST | /api/calculator/sqrt/ |  | ``{"operator1" : 4 ,"operator2" : 2}`` | ``{"id": 5, "result":2}`` | 201 Created 400 Bad Request 404 Not Found 500 Internal Error |
| GET | /api/calculator/sqrt/{id}/ | {id=5} | ```` | ``{"id": 5, "result":2}`` | 200 OK 400 Bad request 404 Not Found 500 Internal Error |
| POST | /api/calculator/pow/ | - | ``{"operator1" : 5 ,"operator2" : 2}`` | ``{"id": 6, "result":25}`` | 201 Created 400 Bad Request 404 Not Found 500 Internal Error |
| GET | /api/calculator/pow/{id}/ | {id=6} | ``-`` | ``{"id": 6, "result":25}`` | 200 OK 400 Bad request 404 Not Found 500 Internal Error |
