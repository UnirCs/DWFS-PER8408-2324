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


| Método HTTP | URI                     | Query Params | Request Body              | Response Body                                                                                           | Códigos HTTP de respuesta |
|-------------|-------------------------|--------------|---------------------------|---------------------------------------------------------------------------------------------------------|---------------------------|
| POST        | /api/v1/additions       | -            | ``{ "values": [-1, 3] }`` | ``{"data":{ "operation_id": 1, "result": 2 }, "error": null }``                                         | 200 OK                    |
| POST        | /api/v1/multiplications | -            | ``{ "values": [-1, 3] }`` | ``{"data":{ "operation_id": 1, "result": -3}, "error": null }``                                         | 200 OK                    |
| POST        | /api/v1/divisions       | -            | ``{ "values": [-1, 3] }`` | ``{"data":{ "operation_id": 1, "result": 0.33}, "error": null }``                                       | 200 OK                    |
| POST        | /api/v1/roots           | -            | ``{ "values": [4] }``     | ``{"data":{ "operation_id": 1, "result": 2}, "error": null }``                                          | 200 OK                    |
| POST        | /api/v1/powers          | -            | ``{ "values": [2, 2] }``  | ``{"data":{ "operation_id": 1, "result": 4}, "error": null }``                                          | 200 OK                    |
| GET         | /api/v1/operations/:id  | -            | -                         | ``{"data":{ "operation_id": 1, "result": 4, "operation": "power", "values": [2, 2]} , "error": null }`` | 200 OK                    |


<br/>  
400 Bad Request   

    {"data": null, "error": { "code": "INVALID_OPERATION", message: "This operation is not valid" } }     

<br/>  
500 Internal Server Error   

    {"data": null, "error": { "code": "INTERNAL_SERVER_ERROR", message: "Internal server error" } }
