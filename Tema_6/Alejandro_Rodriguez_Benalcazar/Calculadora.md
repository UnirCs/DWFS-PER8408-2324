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

**Recursos identificados:**
- Operación (operation): Representa una operación realizada en la calculadora.
- Suma (sum): Representa una operación de suma.
- Resta (subtract): Representa una operación de resta.
- Multiplicación (multiply): Representa una operación de multiplicación.
- División (divide): Representa una operación de división.
- Raíz Cuadrada (square-root): Representa una operación de raíz cuadrada.
- Potencia (power): Representa una operación de potencia.
- Historial (history): Representa el historial de operaciones realizadas por un usuario en la calculadora.


| Método HTTP | URI                                 | Query Params | Cuerpo de la Petición        | Cuerpo de la Respuesta                                                      | Códigos de Respuesta                                          |
|-------------|-------------------------------------|--------------|------------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------|
| GET         | /calculator/operation/{operationId} | N/A          | N/A                          | `{"operationId": 123, "operation": "2 + 2", "result": 4}`                   | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |
| POST        | /calculator/sum                     | N/A          | `{"numbers": [2, 2, 2]}`     | `{"operationId": 124, "operation": "2 + 2 + 2", "result": 6}`               | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /calculator/subtract                | N/A          | `{"numbers": [2, 2, 2]}`     | `{"operationId": 125, "operation": "2 - 2 - 2", "result": -2}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /calculator/multiply                | N/A          | `{"numbers": [2, 2]}`        | `{"operationId": 126, "operation": "2 x 2", "result": 4}`                   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /calculator/divide                  | N/A          | `{"numbers": [2, 2]}`        | `{"operationId": 127, "operation": "2 / 2", "result": 1}`                   | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /calculator/square-root             | N/A          | `{"number": 4}`              | `{"operationId": 128, "operation": "√4", "result": 2}`                      | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| POST        | /calculator/power                   | N/A          | `{"base": 2, "exponent": 3}` | `{"operationId": 129, "operation": "2^3", "result": 8}`                     | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| GET         | /calculator/history/{userId}        | N/A          | N/A                          | `{"operations": [{"operationId": 123, "operation": "2 + 2", "result": 4}]}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error        |

