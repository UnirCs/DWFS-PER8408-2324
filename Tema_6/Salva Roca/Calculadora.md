# API de una calculadora online

Las operaciones que la API soporta son las siguientes:

- Sumar N elementos (2+2, 2+2+2): a través del método POST /calculations, indicando en el cuerpo `"operation": "addition"` y los
  elementos a sumar en el array `operands` de N elementos.
- Restar N elementos (2-2, 2-2-2): a través del método POST /calculations, indicando en el cuerpo `"operation": "subtraction"`
  y los elementos a restar en el array `operands` de N elementos.
- Multiplicar N elementos (2x2, 2x2x2): a través del método POST /calculations, indicando en el
  cuerpo `"operation": "multiplication"` y los elementos a multiplicar en el array `operands` de N elementos.
- Dividir 2 elementos (2/2): a través del método POST /calculations, indicando en el cuerpo `"operation": "division"` y los
  elementos a multiplicar en el array `operands` de 2 elementos, siendo el primero el dividendo y el segundo el divisor.
  - Si el array `operands` proporcionado no contiene exactamente 2 elementos o el resultado de la división es infinito, la
    API devolverá 400 Bad Request.
- Raíz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8): a través del método POST /calculations, indicando en el
  cuerpo `"operation": "root"` y los elementos a multiplicar en el array `operands` de 2 elementos, siendo el primero el
  radicando y el segundo el índice. 
  - Si el array `operands` proporcionado no contiene exactamente 2 elementos, la API
    devolverá 400 Bad Request.
- Potencia N-ésima de un número (2^2, 3^3, 4^4): a través del método POST /calculations, indicando en el
  cuerpo `"operation": "potency"` y los elementos a multiplicar en el array `operands` de 2 elementos, siendo el primero
  la base y el segundo el exponente. 
  - Si el array `operands` proporcionado no contiene exactamente 2 elementos, la API
    devolverá 400 Bad Request.
- Detalle de operaciones en memoria: a través del método GET /calculations e indicando el calculationId como Query Param.
  - Si no se indica correctamente el Query Param `calculationId`, la API devuelve 400 Bad Request.
  - Si se indica un `calculationId` que no existe en memoria, la API devuelve 404 Not Found.

| Método HTTP | URI           | Query Params  | Cuerpo de la Petición                           | Cuerpo de la Respuesta                                 | Códigos de Respuesta                                                        |
|-------------|---------------|---------------|-------------------------------------------------|--------------------------------------------------------|-----------------------------------------------------------------------------|
| POST        | /calculations | N/A           | `{"operation": "addition", "operands": [2, 2]}` | `{"result": 4, "calculationId": 1}`                    | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error               |
| GET         | /calculations | calculationId | N/A                                             | `{"operation": "add", "operands": [2, 2], "result": 4` | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error  |
