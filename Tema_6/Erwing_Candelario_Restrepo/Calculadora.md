# API de una calculadora online

**Recursos identificados:**

- Operaciones: La caluladora Online permite realizar las operaciones y almacenar en memoria sus resultado.

| Método HTTP | URI                       | Query Params | Request Body                                            | Response Body                                                                                                  | Códigos HTTP de respuesta                                                       |
| ----------- | ------------------------- | ------------ | ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| POST        | /operaciones              | N/A          | `{"TipoOperacion": "Multiplicar", "Cantidades": [8,2]}` | `{"operacionId": 1, "TipoOperacion": "Multiplicar", "Cantidades": [8,2], "Resultados": 16}`                    | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| GET         | /operaciones              | N/A          | N/A                                                     | `{"Operaciones": [{"OperacionId": 1, "TipoOperacion": "Multiplicar", "Cantidades": [8,2], "Resultados": 16}]}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                          |
| GET         | /operaciones/{operacioId} | N/A          | N/A                                                     | `{"operacionId": 1, "TipoOperacion": "Multiplicar", "Cantidades": [8,2], "Resultados": 16}`                    | 200 OK<br/>404 Not Found<br/>500 Internal Server Error                          |
