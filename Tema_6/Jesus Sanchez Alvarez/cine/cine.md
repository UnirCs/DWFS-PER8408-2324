Metodo HTTP|URI|Query params|Cuerpo de la petición|Cuerpo de la respuesta|Codigos de respuesta 
POST|/peliculas|N/A|{|{[|200 OK 
			Data:{|P1:{..},| 
			titulo:”Peli”,|P2:{…}|
			duración: 1h,|]|
			resumen: “resum”|}|
			}|	
			}|	
DELETE|/peliculas/{id}|N/A|N/A|{true}|200 OK 
PUT|/peliculas/{id}|N/A|{|{true}|200 OK 
			Data:{|	
			titulo:”Peli”-Modificada,|	
			resumen: “resum modificado”|	
			}|	
			|	
			}|	
POST|/usuarios|N/A|{|{|200 OK 
			Usuario:{|Usuario:{|500 Internal Server Error 
			Nombre:”nom1”,|Nombre:”nom1”,|
			Apellidos:”apellidos1”,|Apellidos:”apellidos1”,|
			Mail:”mail@gmail.com”|Mail:”mail@gmail.com”|
			}|}|
			}|}|
DELETE|/usuarios/{ id }|N/A|N/A|OK|200 OK 
					400 Not Found 
					500 Internal Server Error 
PATCH|/usuarios/{id }|N/A|{|{|200 ok 
			Id:1,|Id:1,|201  
			Nombre:”nombre”|Nombre:”nombre”,|400 not found 
			}|Apellidos:”apellidos”,|401 
				Mail:”mail”|
				}|
POST|/salas|N/A|{|{|200 OK 
			sala:{|sala:{|500 Internal Server Error 
			Numero:3,|id:3,|
			asientos:15|asientos:15|
			}|}|
			}|}|
DELETE|/salas/{ id }|N/A|N/A|OK|200 OK 
					400 Not Found 
					500 Internal Server Error 
PATCH|/salas/{id }|N/A|{|{|200 ok 
			Id:3,|Id:3,|400 not found 
			Asientos:12|Asientos:12| 
			}|}|
POST|/reservas|N/A|{|{|200 OK 
			Usuario:”nombre”,|Usuario:”nombre”,|500 Internal Server Error 
			sala:”3”|sala:”3”|
			}|}|
DETELE|/reservas/{id}|id|n/a|OK|200 OK 
					500 Internal Server Error 
POST|/pagos|n/a|{id_Reserva:”1”}|OK|200 OK 
					500 INternal Server Error 