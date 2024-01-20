La API soportar las siguientes operaciones:

    Sumar N elementos (2+2, 2+2+2).
    Restar N elementos (2-2, 2-2-2).
    Multiplicar 2 elementos (2x2).
    Dividir 2 elementos (2/2).
    Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
    Potencia N-ésima de un número (2^2, 3^3, 4^4).
    Detalle de operacion

| Método HTTP | URI        | Query Params | Request Body         | Response Body                                                 | Códigos HTTP de respuesta |
|-------------|------------|--------------|----------------------|---------------------------------------------------------------|---------------------------|
| POST        | /add       | N/A          | {"operands":[2,2,2]} | {"Id":1,"result":6}                                           | 201,400,500               |
| POST        | /subtract  | N/A          | {"operands":[2,2,2]} | {"Id":2,"result":-2}                                          | 201,400,500               |
| POST        | /multiply  | N/A          | {"operands":[2,2]}   | {"Id":3,"result":4}                                           | 201,400,500               |
| POST        | /div       | N/A          | {"operands":[2,2]}   | {"Id":4,"result":1}                                           | 201,400,500               |
| POST        | /sqrt      | N/A          | {"operands":[2,4]}   | {"Id":5,"result":2}                                           | 201,400,500               |
| POST        | /potency   | N/A          | {"operands":[2,2]}   | {"Id":6,"result":4}                                           | 201,400,500               |
| GET         | /detail/ID | ID           | N/A                  | {"Id":3,"operation":,"multiply","operands":[2,2],"result":,4} | 200,400,500               |                