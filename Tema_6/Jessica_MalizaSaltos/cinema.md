# API de un sistema de reserva de butacas de cine

En este ejercicio vamos a diseñar la API REST para el cine en el que venimos trabajando en los ejercicios de los anteriores temas.

Las operaciones que la API debe soportar son las siguientes:
- Crear, eliminar y modificar películas. POST, DELETE, PUT
- Crear, eliminar y modificar (parcialmente) salas.  PATCH
- Crear, eliminar y modificar (parcialmente) usuarios. PATCH
- Crear una reserva para un usuario en una sala. POST
- Cancelar una reserva para un usuario en una sala. PUT
- Modificar una reserva para un usuario en una sala.PUT
- Registrar un pago de una reserva. post
RECURSOS:
1. PELICULAS
2. SALAS
3. USUARIOS
4. RESERVA
5. PAGOS

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Metodo HTTP   |     URI      |  QueryParams  |    Body(Json)                              |      Respuesta      |     Codigos HTTP
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
post		/peliculas   | N/A           | {"Titulo":"Nombre de la pelicula","genero":"Caricatura","tiempo":1:60 min}|{"idPelicula":1,"Titulo":"Nombre de la pelicula","genero":"Caricatura","tiempo":1:60 min} | 201                                                                           													     400    
						     404 
						     500 
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
put		/peliculas/{idPelicula}   | N/A           | {"nuevotiempo":1:30 min}|{"idPelicula":1,"Titulo":"Nombre de la pelicula","genero":"Caricatura","nuevotiempo":1:30 min} | 2001                                                                          													     400    
						     404 
						     500 
 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
delete		/peliculas/{idPelicula}   | N/A           | N |{"mensaje":"Pelicula Eliminada"}| 200                                                                         													     400    
						     
						     500 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
post		/salas   | N/A           | {"nombreSala":"Sala 1","Capacidad":300,"Ubucacion":"Inicio"}|{"idSala":1,"nombreSala":"Sala 1","Capacidad":300,"Ubucacion":"Inicio"} | 201                                                                           													     400    
						     404 
						     500 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
patch		/salas/{idSala}   | N/A           | {"nuevaCapacidad":150}|{"idSala":1,"nombreSala":"Sala 1","nuevaCapacidad":150,"Ubucacion":"Inicio"} | 200                                                                           													     400    
						     404 
						     500 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
delete		/salas/{idSala}   | N/A           | N |{"mensaje":"Sala Eliminada"}| 200                                                                         													     400    
						     
						     500 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
post		/usuarios  | N/A           | {"nombreUser":"Pedro","edad":26,"direccion":"Chibuleo"}|{"id":1,"nombreUser":"Pedro","edad":26,"direccion":"Chibuleo"} | 201                                                                           													     400    
						     404 
						     500 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
patch		/usuarios/{id}   | N/A           | {"nombreUser":"Maria"}|{"id":1,"nombreUser":"Maria","edad":26,"direccion":"Chibuleo"} | 200                                                                           													     400    
						     404 
						     500 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
delete		/usuarios/{id}  | N/A           | N |{"mensaje":"Usuario Eliminada"}| 200                                                                         													     400    
						     404 
						     500 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
post		/reservas   | N/A           | {"idUsuario":1,"Date":'1/02/2023',"idPelicula":1,"idSala":1, "sillas":[{"fila": 'A', Nasiento:12}]} | {"idreserva":1,"idUsuario":1,"Date":'1/02/2023',"idPelicula":1,"idSala":1, "sillas":[{"fila": 'A', Nasiento:12}]} | 201                                                                          													     400    
						     404 
						     500 

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
delete		/reservas/{idReserva}   | N/A           | N | "MENSAJE":"Reserva Canselada" | 200                                                                        													     400   
											 500 


------------------------------------------------------------------------------------------------------------------------------------------------------------------------
put		/reservas/{idReserva}  | N/A           | {"NuevaDate":'15/02/2023' | {"idreserva":1,"idUsuario":1,"NuevaDate":'15/02/2023',"idPelicula":1,"idSala":1, "sillas":[{"fila": 'A', Nasiento:12}]} | 200                                                                          													     400    
						     404 
						     500 
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
post		/pagos   | N/A           | {"costoPelicula":7.50,"idreserva":1,"TotalPagar":7.50 | {"idPago":1,"costoPelicula":7.50,"idreserva":1,"TotalPagar":7.50 } | 201                                                                          													     400    
						     404 
						     500 


