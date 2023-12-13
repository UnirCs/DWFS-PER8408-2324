# API de una calculadora online

**Recursos identificados:**
- Calculations (cálculos): recurso que permite realizar las operaciones y almacenar su resultado. Dado que se debe almacenar la respuesta, la petición de cálculo
  será mediante método POST. El recurso requiere de un parámetro "operation" en el cuerpo de la petición que indique la operación y "operandos" que indica
  los valores involucrados en la operación. Será el backend el que se encargue de limitar las funcionalidades que presenta el enunciado, como comprobar en
  la división que solo hay dos operandos (devolviendo código 400 en ese caso).

| Método HTTP  | URI            | Query Params | Request Body | Response Body    | Códigos HTTP de respuesta |
|--------------|----------------|--------------|--------------|------------------|-------------------------|
| POST         | /calculations  | -            | `{"operation": "+", "operands": [2,2,2]}` | `{"calculationId": 1, "operation": "+", "operands": [2,2,2], "result": 6}` | 201 Created<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| GET         | /calculations  | -            | -                 | `{"calculations": [{"calculationId": 1, "operation": "+", "operands": [2,2,2], "result": 6}]}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
| GET         | /calculations/{calculationId}  | -            | -                 | `{"calculationId": 1, "operation": "+", "operands": [2,2,2], "result": 6}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
