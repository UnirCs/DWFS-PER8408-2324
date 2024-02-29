# API CALCULADORA

http Metodo | URI | Query Param |Body Json | Respuestas Json | Codigo Respuestas
------------- | ------------- | ------------- | ------------- | ------------- | -------------
  POST  | /api/operaciones | N/A | {"idOperacion": 1,"valor1": 2,"valor2": 2, "operador": "sumar"} | {"resultado":4} | 201 Created 400 Bad Request 500 Internal Server Error
 POST  | /api/operaciones | N/A | {"idOperacion": 2,"valor1": 2,"valor2": 2, "operador": "restar"} | {"resultado":0} | 201 Created 400 Bad Request 500 Internal Server Error
 POST  | /api/operaciones | N/A | {"idOperacion": 3,"valor1": 2,"valor2": 3, "operador": "multiplicar"} | {"resultado":6} | 201 Created 400 Bad Request 500 Internal Server Error
 POST  | /api/operaciones | N/A | {"idOperacion": 4,"valor1": 8,"valor2": 2, "operador": "Dividir"} | {"resultado":4} | 201 Created 400 Bad Request 500 Internal Server Error
POST  | /api/operaciones | N/A | {"idOperacion": 5,"valor1": 4,"valor2": 2, "operador": "sqrt"} | {"resultado":2} | 201 Created 400 Bad Request 500 Internal Server Error
POST  | /api/operaciones | N/A | {"idOperacion": 6,"valor1": 8,"valor2": 3, "operador": "sqrt"} | {"resultado":2} | 201 Created 400 Bad Request 500 Internal Server Error
GET  | /api/operaciones | N/A | {"idOperacion": 7,"valor1": 3,"valor2": 3, "operador": "potencia"} | {"resultado":2} | 200 OK 404 Not Found 500 Internal Server Error