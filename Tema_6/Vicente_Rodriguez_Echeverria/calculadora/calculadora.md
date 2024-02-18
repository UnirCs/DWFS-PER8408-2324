# API de una calculadora online
En este ejercicio vamos a diseñar la API REST de una calculadora.

Las operaciones que la API debe soportar son las siguientes:
- Sumar N elementos (2+2, 2+2+2).
- Restar N elementos (2-2, 2-2-2).
- Multiplicar 2 elementos (2x2).
- Dividir 2 elementos (2/2).
- Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
- Potencia N-ésima de un número (2^2, 3^3, 4^4).
- Detalle de operacion

Nuestra calculadora tendrá memoria y siempre se podrán consultar los datos de operaciones realizadas, a través de un ID de operación.


| Método HTTP | URI | Query Params | Request Body | Response Body | Códigos HTTP de respuesta |
|-------------|-------------------------|--------------|---------------------------|---------------------------------------------------------------------------------------------------------|---------------------------|
| POST        | /api/operaciones       | -            | ``{ "operacion": "suma", numero[5,3,4]`` | ``{"operacion": "suma", "numeros": [5,3,4],"resultado": 12,"error": "null", "id": "1"}``                                         | 201 Created <br/> 400 Bad Request <br/> 500 Internal Server Error |
| POST        | /api/operaciones       | -            | ``{ "operacion": "resta", numero[2,2,-2]`` | ``{"operacion": "resta", "numeros": [2,2,-2],"resultado": 2,"error": "null", "id": "2"}``                                         | 201 Created <br/> 400 Bad Request <br/> 500 Internal Server Error |
| POST        | /api/operaciones       | -            | ``{ "operacion": "multiplicacion", numero[2,2,2]`` | ``{"operacion": "multiplicacion", "numeros": [2,2,2],"resultado": 8,"error": "null", "id": "3"}``                                         | 201 Created <br/> 400 Bad Request <br/> 500 Internal Server Error |
| POST        | /api/operaciones       | -            | ``{ "operacion": "division", numero[2,2]`` | ``{"operacion": "division", "numeros": [2,2],"resultado": 1,"error": "null", "id": "4"}``                                         | 201 Created <br/> 400 Bad Request <br/> 500 Internal Server Error |
| POST        | /api/operaciones       | -            | ``{ "operacion": "raiz", numero[4,2]`` | ``{"operacion": "raiz", "numeros": [4,2],"resultado": 2,"error": "null", "id": "5"}``                                         | 201 Created <br/> 400 Bad Request <br/> 500 Internal Server Error |
| POST        | /api/operaciones       | -            | ``{ "operacion": "potencia", numero[2,2]`` | ``{"operacion": "potencia", "numeros": [2,2],"resultado": 4,"error": "null", "id": "6"}``                                         | 201 Created <br/> 400 Bad Request <br/> 500 Internal Server Error |
| GET        | /api/operaciones/{id}       | -            | - | ``{"operacion": "potencia", "numeros": [2,2],"resultado": 4,"error": "null", "id": "1"}``                                         | 200 OK <br/> 400 Bad Request <br/> 500 Internal Server Error |