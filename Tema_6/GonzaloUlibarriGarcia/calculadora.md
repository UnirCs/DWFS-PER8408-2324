
- Suma (adds): Identifica la suma de N operandos.
- Resta (subtracts): Identifica la resta de N operandos.
- Multiplicacion (multiplications): Identifica la multiplicacion de dos operandos.
- Division (splits): Identifica la division de un dividendo y un divisor.
- Raiz (roots): Identifica la raiz N-esima de un radicando.
- Potencia (powers): Identifica la potencia N-esima de una base.


| Método HTTP | URI                   | Query Params | Cuerpo de la Petición                                                    | Cuerpo de la Respuesta                                                 | Códigos de Respuesta                                          |
|-------------|-----------------------|------------|--------------------------------------------------------------------------|------------------------------------------------------------------------|---------------------------------------------------------------|
| POST        | /additions            | N/A        | `{ "elements": { "operands": [2,2,2], "divisor": "1" "exponent": "1" }}` | `{"id": 1, "result": 6}`                                               | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /subtractions         | N/A        | `{ "elements": { "operands": [2,2,2], "divisor": "1" "exponent": "3" }}` | `{"id": 2, "result": -2}`                                              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /multiplications      | N/A        | `{ "elements": { "operands": [2,2], "divisor": "1" "exponent": "1" }}`   | `{"id": 3, "result": 4}`                                               | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /splits               | N/A        | `{ "elements": { "operands": [2], "divisor": "2" "exponent": "1" }}`     | `{"id": 4, "result": 1}`                                               | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /roots                | N/A        | `{ "elements": { "operands": [4], "divisor": "1" "exponent": "1/2" }}`   | `{"id": 5, "result": 2}`                                               | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /powers               | N/A        | `{ "elements": { "operands": [2], "divisor": "1" "exponent": "3" }}`     | `{"id": 5, "result": 8}`                                               | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /detail/{operationID} | id         | N/A                                                                      | `{ "operands": [2,2,2], "result": 6, "operation": "add" }`             | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error      |
| GET         | /detail/{operationID} | id         | N/A                                                                      | `{ "operands": [2,2,2], "result": -4, "operation": "subtract" }`       | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error      |
| GET         | /detail/{operationID} | id         | N/A                                                                      | `{ "operands": [2,2], "result": 4, "operation": "multiplies" }`        | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error      |
| GET         | /detail/{operationID} | id         | N/A                                                                      | `{ "operands": [2,2], "result": 1, operation: "sqplit"}`               | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error      |
| GET         | /detail/{operationID} | id         | N/A                                                                      | `{ "basis": 2, "exponent": 3, "result": 8, "operation": "pow" }`       | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error      |
| GET         | /detail/{operationID} | id         | N/A                                                                      | `{ "basis": 8, "exponent": 0.3333, "result": 2 ,"operation": "sqrt" }` | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error      |


`{ "elements": { "operands": [], "divisor": "1" "exponent": "1" }} }`  