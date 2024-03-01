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

---------------------------------------------------------------------------------------------------------------------------------
Metodo HTTP         URI          QueryParams       Body(Json)             Respuesta           Codigos HTTP
---------------------------------------------------------------------------------------------------------------------
post             /operaciones       N/A          {"suma":[num1,num2,numN] }       suma            201 Created
                                                                                                400 Bad Request
                                                                                                404 Not found
                                                                                                500 Internal Error
----------------------------------------------------------------------------------------------------------------------  
post            /operaciones                    {"resta":[num1,num2,numN] }       resta           201 Created
                                                                                                400 Bad Request
                                                                                                404 Not found
                                                                                                500 Internal Error    
-----------------------------------------------------------------------------------------------------------------------
post          /operaciones                  {"multiplicar":[num1,num2]} mulplicacion                                                                                     201 Created
                                                                                                400 Bad Request
                                                                                                404 Not found
                                                                                                500 Internal Error    
-----------------------------------------------------------------------------------------------------------------------
post         /operacion           {"dividir":[num1,num2]}               dividir         201 Created
                                                                                                400 Bad Request
                                                                                                404 Not found
                                                                                                500 Internal Error  
------------------------------------------------------------------------------------------------------------------------


                