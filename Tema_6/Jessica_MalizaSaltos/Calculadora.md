# API de una calculadora online

Las operaciones que la API debe soportar son las siguientes:
- Sumar N elementos (2+2, 2+2+2).
- Restar N elementos (2-2, 2-2-2).
- Multiplicar 2 elementos (2x2).
- Dividir 2 elementos (2/2).
- Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
- Potencia N-ésima de un número (2^2, 3^3, 4^4).
- Detalle de operacion

Recursos: Operaciones
1. suma
2. resta
3. multiplicar
4. divicion
5. raiz/divicion
6. potencia

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Metodo HTTP   |     URI   |       QueryParams  |    Body(Json)                              |      Respuesta      |     Codigos HTTP
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
post   |     /operaciones  |    N/A  |  {"operacion": "suma",  "numeros": [2, 2]} | {"operaciones":[{"id":1, "operacion":"suma", "resultado":4}]} |   201 Created
                                                                                                                                                         400 Bad Request
                                                                                                                                                        404 Not found
                                                                                                                                                     500 Internal Error
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------  
post   |    /operaciones  |        |  {"operacion": "resta",  "numeros": [4, 2]} | {"operaciones":[{"id":2, "operacion":"resta", "resultado":2}]}  |    201 Created
                                                                                              								  400 Bad Request
                                                                                                							404 Not found
                                                                                               								 500 Internal Error    
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
post   |   /operaciones |        | {"operacion": "multiplicacion", "numeros": [4, 6]} |{"operaciones":[{"id":3, "operacion":multiplicacion, "resultado":24}]} |201 Created
                                                                                               								 400 Bad Request
                                                                                              								  404 Not found
                                                                                              							  500 Internal Error    
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
post   |   | /operaciones |       |{"operacion":"division", "numeros": [6, 3]} |{"operaciones":[{"id":4, "operacion":division, "resultado":2}]} | 201 Created
                                                                                               								 400 Bad Request
                                                                                               								 404 Not found
                                                                                               								 500 Internal Error  
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
post   |     /operaciones |    | {"operacion": "raiz_cuadrada", "numero": 9}|{"operaciones":[{"id":5, "operacion":raiz_cuadrada, "resultado":3}]} | 201 Created
                                                                                               								 400 Bad Request
                                                                                               								 404 Not found
                                                                                               								 500 Internal Error  
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
post   |     /operaciones |    | {"operacion": "potencia","base": 3,"exponente": 2}|{"operaciones":[{"id":6, "operacion":potencia, "resultado":9}]} | 201 Created
                                                                                               								 400 Bad Request
                                                                                               								 404 Not found
                                                                                               								 500 Internal Error  
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
get    |  /operaciones/3  |  |  {"id": 3,"operacion": "multiplicacion","numeros": [4, 6],"resultado": 24}} |     201 Created
                                                                                               								 400 Bad Request
                                                                                              								  404 Not found
                                                                                              							  500 Internal Error