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

**Recursos identificados**

- Operación (operations): Representa una operación matemática realizada por la calculadora.
- Suma (sums): Representa una operación matemática de tipo suma realizada por la calculadora.
- Resta (subtractions): Representa una operación matemática de tipo resta realizada por la calculadora.
- Multiplicación (multiplications): Representa una operación matemática de tipo multiplicación realizada por la calculadora.
- División (divisions): Representa una operación matemática de tipo división realizada por la calculadora.
- Root (roots): Representa una operación matemática de tipo raíz realizada por la calculadora.
- Potencias (powers): Representa una operación matemática de tipo potencia realizada por la calculadora.

| Método HTTP | URI                         | Query Params | Cuerpo de la petición                               | Cuerpo de la respuesta                                                                                    | Códigos HTTP de respuesta |
|-------------|-----------------------------|--------------|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------|---------------------------|
| POST        | /operations/sums            | N/A          | {"operands": {"addends": [2,2]}}                    | {"operationId": 1, "operands": {"addends": [2,2]}, "result": 4}                                           | 201, 400, 500             |
| POST        | /operations/substractions   | N/A          | {"operands": {"minuend": 2, "substrahend": [2]}}    | {"operationId": 2, "operands": {"minuend": 2, "substrahend": [2]}, "result": 0}                           | 201, 400, 500             |
| POST        | /operations/multiplications | N/A          | {"operands": {"multiplicand": 2, "multiplier": 2 }} | {"operationId": 3, "operands": {"multiplicand": 2, "multiplier": 2 }, "result": 4}                        | 201, 400, 500             |
| POST        | /operations/divisions       | N/A          | {"operands": {"dividend": 2, "divisor": 2 }}        | {"operationId": 4, "operands": {"dividend": 2, "divisor": 2 }, "result": {"quotient": 1, "remainder": 0}} | 201, 400, 500             |
| POST        | /operations/roots           | N/A          | {"operands": {"radicand": 8, "index": 3 }}          | {"operationId": 5, "operands": {"radicand": 8, "index": 3 }, "result": 2}                                 | 201, 400, 500             |
| POST        | /operations/powers          | N/A          | {"operands": {"base": 4, "power": 4 }}              | {"operationId": 6, "operands": {"base": 4, "power": 4 }, "result": 256}                                   | 201, 400, 500             |
| GET         | /operations/{operationId}   | N/A          | N/A                                                 | {"operationId": 1, "operands": {"addends": [2,2]}, "result": 4}                                           | 200, 404, 500             | 


