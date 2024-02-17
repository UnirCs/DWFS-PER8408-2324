# API de una calculadora online

### Operaciones:
1. Sumar N elementos (2+2, 2+2+2).
2. Restar N elementos (2-2, 2-2-2).
3. Multiplicar 2 elementos (2x2).
4. Dividir 2 elementos (2/2).
5. Raíz enésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
6. Potencia enésima de un número (2^2, 3^3, 4^4).
7. Detalle de operación

### Recursos identificados:
- Operación (operaciones): Representa una operación matemática realizada en la calculadora.


| N° | Método HTTP      | URI                        | Query Params | Request Body                                                       | Response Body                                                                                          | Códigos HTTP de respuesta |
|----|------------------|----------------------------|--------------|--------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|---------------------------|
| 1  | POST             | /operaciones               | N/A          | `{"operacion": "suma", "operandos": [1, 2, 3], "operador": null}`  | `{"operacionID": 101, "operacion": "suma", "operandos": [1, 2, 3], "operador": null, "resultado": 6}`  | 201, 400, 500             |
| 2  | POST             | /operaciones               | N/A          | `{"operacion": "resta", "operandos": [9, 3, 3], "operador": null}` | `{"operacionID": 102, "operacion": "resta", "operandos": [9, 3, 3], "operador": null, "resultado": 3}` | 201, 400, 500             |
| 3  | POST             | /operaciones               | N/A          | `{"operacion": "multiplicacion", "operandos": [2], "operador": 3}` | `{"operacionID": 103, "operacion": "multiplicacion", "operandos": [2], "operador": 3, "resultado": 6}` | 201, 400, 500             |
| 4  | POST             | /operaciones               | N/A          | `{"operacion": "division", "operandos": [10], "operador": 2}`      | `{"operacionID": 104, "operacion": "division", "operandos": [10], "operador": 2, "resultado": 5}`      | 201, 400, 500             |
| 5  | POST             | /operaciones               | N/A          | `{"operacion": "radicacion", "operandos": [27], "operador": 3}`    | `{"operacionID": 105, "operacion": "radicacion", "operandos": [27], "operador": 3, "resultado": 3}`    | 201, 400, 500             |
| 6  | POST             | /operaciones               | N/A          | `{"operacion": "potencia", "operandos": [2], "operador": 3}`       | `{"operacionID": 106, "operacion": "potencia", "operandos": [2], "operador": 3, "resultado": 8}`       | 201, 400, 500             |
| 7  | GET              | /operaciones/{operacionID} | N/A          | N/A                                                                | `{"operacionID": 101, "operacion": "suma", "operandos": [1, 2, 3], "operador": null, "resultado": 6}`  | 200, 404, 500             |
