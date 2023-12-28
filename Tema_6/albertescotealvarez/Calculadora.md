# API Calculadora #

### Recursos identificados ###

- **Operación (operation):** Representa el conjunto de operaciones matemáticas que se pueden realizar en nuestra API. Este elemento no es estrictamente necesario pero lo he añadido para una mejor comprensión de los endpoints.
- **Addición (addition):** Representa una operación matemática de suma.
- **Sustracción (subtraction):** Representa una operación matemática de resta.
- **Multiplicación (multiplication):** Representa una operación matemática de multiplicación.
- **División (division):** Representa una operación matemática de división.
- **Raíz (root):** Representa una operación matemática de raíz N-ésima de un número.
- **Potencia (power):** Representa una operación matemática de potencia N-ésima de un número.

| Método HTTP | URI                         | Query Params | Request Body                                                                                  | Response Body                                                                                        | Códigos HTTP de respuesta |
|-------------|-----------------------------|--------------|-----------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|---------------------------|
| POST        | /operations/additions       | N/A          | ``{"operands": [{"addend": [2,2]}, {"addend": [2,2,2]}]}``                                    | ``{"id": 1, "result": [4,6]}``                                                                       | 201, 400, 500             |
| POST        | /operations/subtractions    | N/A          | ``{"operands": [{minuend: 2, subtrahend: [2]}, {minuend: 2, subtrahend: [2,2]}}``             | ``{"id": 2, "result": [0,-2]}``                                                                      | 201, 400, 500             |
| POST        | /operations/multiplications | N/A          | ``{"operands": {"multiplicand": 2, "multiplier": 2}}``                                        | ``{"id": 3, "result": 4}``                                                                           | 201, 400, 500             |
| POST        | /operations/divisions       | N/A          | ``{"operands": {"dividend": 2, "divisor": 2}}``                                               | ``{"id": 4, "quotient": 1, "remainder": 0}``                                                         | 201, 400, 500             |
| POST        | /operations/roots           | N/A          | ``{"operands": [{"radicand": 4, "index": 2}, {"radicand": 8, "index": 3}]}``                  | ``{"id": 5, "result": [2, 2]}``                                                                      | 201, 400, 500             |
| POST        | /operations/powers          | N/A          | ``{"operands": [{"base": 2, "power": 2}, {"base": 3, "power": 3}, {"base": 4, "power": 4}]}`` | ``{"id": 6, "result": [4, 27, 256]}``                                                                | 201, 400, 500             |
| GET         | /operations/{id}            | N/A          | N/A                                                                                           | ``{"operation": "addition", "operands": [{"addend": [2,2]}, {"addend": [2,2,2]}], "result": [4,6]}`` | 200, 404, 500             |