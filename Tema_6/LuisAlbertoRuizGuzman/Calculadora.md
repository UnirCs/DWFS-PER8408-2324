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
- operaciones: Las operaciones que permite hacer la calculadora.

| Método HTTP | URI              | Query Params | Request Body                | Response Body               | Códigos HTTP de respuesta |
|-------------|------------------|--------------|-----------------------------|-----------------------------|-------------------------  |
| POST        | /operaciones     | -            | #Para Suma:                 | ``{"id": #############,  `` | 201                       |
|             |                  |              | {"operacion": "sumar",      | ``{"operacion": "XXXX",  `` | 400                       |
|             |                  |              | "elementos": [2, 2, 2]}     | `` "resultado": ##### }  `` | 409                       |
|             |                  |              |                             |                             | 500                       |
|             |                  |              |#Para Resta:                 |                             |                           |
|             |                  |              | {"operacion": "restar",     |                             |                           |
|             |                  |              | "elementos": [2, 2, 2]}     |                             |                           |
|             |                  |              |                             |                             |                           |
|             |                  |              |#Para Miltiplicar:           |                             |                           |
|             |                  |              | {"operacion": "multiplicar",|                             |                           |
|             |                  |              | "elementos": [2, 2]}        |                             |                           |
|             |                  |              |                             |                             |                           |
|             |                  |              |#Para Dividir:               |                             |                           |
|             |                  |              | {"operacion": "Dividir",    |                             |                           |
|             |                  |              | "elementos": [2, 2]}        |                             |                           |
|             |                  |              |                             |                             |                           |
|             |                  |              |#Para Raiz:                  |                             |                           |
|             |                  |              | {"operacion": "Raiz",       |                             |                           |
|             |                  |              | "elementos": [2, 2]}        |                             |                           |
|             |                  |              |                             |                             |                           |
|             |                  |              |#Para Potencia:              |                             |                           |
|             |                  |              | {"operacion": "Potencia",   |                             |                           |
|             |                  |              | "elementos": [2, 2]}        |                             |                           |
|---------------------------------------------------------------------------------------------------------------------------------------|
| GET         |/operaciones/{id} | -            | -                           |  {"id": 1,                  | 200                       |
|             |                  |              |                             |   "operacion": "suma",      | 400                       |
|             |                  |              |                             |   "elementos": [2, 2, 2],   | 404                       |
|             |                  |              |                             |   "resultado": 6 }          | 500                       |
|-------------|------------------|--------------|-----------------------------|-----------------------------|---------------------------|