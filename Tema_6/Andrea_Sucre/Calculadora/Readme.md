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


| Método HTTP | URI                   | Query Params | Request Body              | Response Body                                                                                                                                                                                                                                                                                                                           | Códigos HTTP de respuesta         |
|-------------|-----------------------|--------------|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| POST        | /api/v1/sum           | -            | ``{ "values": [-1, 3] }`` | ``{"data":{ "operation_id": 1, "result": 2 }, "error": null }`` <br/> <br/> ``{"data": null, "error": { "code": "INVALID_OPERATION", message: "This operation is not valid" } }`` <br/><br/> ``{"data": null, "error": { "code": "INTERNAL_SERVER_ERROR", message: "Internal server error" } }``                                        | 200 <br/><br/> 400 <br/> <br/>500 |
| POST        | /api/v1/multiply      | -            | ``{ "values": [-1, 3] }`` | ``{"data":{ "operation_id": 1, "result": -3}, "error": null }`` <br/> <br/> ``{"data": null, "error": { "code": "INVALID_OPERATION", message: "This operation is not valid" } }`` <br/><br/> ``{"data": null, "error": { "code": "INTERNAL_SERVER_ERROR", message: "Internal server error" } }``                                         | 200 <br/><br/> 400 <br/> <br/>500 |
| POST        | /api/v1/divide        | -            | ``{ "values": [-1, 3] }`` | ``{"data":{ "operation_id": 1, "result": 0.33}, "error": null }`` <br/> <br/> ``{"data": null, "error": { "code": "INVALID_OPERATION", message: "This operation is not valid" } }`` <br/><br/> ``{"data": null, "error": { "code": "INTERNAL_SERVER_ERROR", message: "Internal server error" } }``                                       | 200 <br/><br/> 400 <br/> <br/>500 |
| POST        | /api/v1/square        | -            | ``{ "values": [4] }``     | ``{"data":{ "operation_id": 1, "result": 2}, "error": null }`` <br/> <br/> ``{"data": null, "error": { "code": "INVALID_OPERATION", message: "This operation is not valid" } }`` <br/><br/> ``{"data": null, "error": { "code": "INTERNAL_SERVER_ERROR", message: "Internal server error" } }``                                          | 200 <br/><br/> 400 <br/> <br/>500 |
| POST        | /api/v1/power         | -            | ``{ "values": [2, 2] }``  | ``{"data":{ "operation_id": 1, "result": 4}, "error": null }`` <br/> <br/> ``{"data": null, "error": { "code": "INVALID_OPERATION", message: "This operation is not valid" } }`` <br/><br/> ``{"data": null, "error": { "code": "INTERNAL_SERVER_ERROR", message: "Internal server error" } }``                                          | 200 <br/><br/> 400 <br/> <br/>500 |
| GET         | /api/v1/operation/:id | -            | -                         | ``{"data":{ "operation_id": 1, "result": 4, "operation": "power", "values": [2, 2]} , "error": null }`` <br/> <br/> ``{"data": null, "error": { "code": "INVALID_OPERATION", message: "This operation is not valid" } }`` <br/><br/> ``{"data": null, "error": { "code": "INTERNAL_SERVER_ERROR", message: "Internal server error" } }`` | 200 <br/><br/> 400 <br/> <br/>500 |