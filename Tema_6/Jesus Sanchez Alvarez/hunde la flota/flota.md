Metodo HTTP 	URI 	Query params 	Cuerpo de la petición 	Cuerpo de la respuesta 	Codigos de respuesta 
POST 	/partida 	N/A 	{ 	{ 	200 OK 
			Data:{ 	Data:{ 	
			nombre:”Peli”, 	Id:1, 	
			iniciada:false 	nombre:”Peli”, 	
			} 	iniciada:false 	
			} 	} 	
				} 	
DELETE 	/partida/{id} 	id 	N/A 	OK 	200 OK 
					400 Not Found 
PATCH iniciar o finalizar 	/partida/{id} 	N/A 	{ 	{ 	200 OK 
			Data:{ 	respuesta:{ 	500 Internal Server Error 
			Id:1, 	Id:1, 	400 Not Found 
			Iniciado:true 	Iniciado:true 	
			} 	} 	
			} 	} 	
POST 	/barco 	N/A 	{ 	{resultado:{ 	200 ok 
			Posiciones:3, 	Elementos:[2,2,2], 	500 Internal Server error 
			} 	Operacion_id:1 	400 not found 
				}} 	
GET 	/barco 	{id} 	N/A 	{ 	200 OK 
				Posiciones:3, 	400 Not Found 
				} 	
POST 	/disparar 	N/A 	{ 	OK 	200 OK 
			U_dispara: usuario1, 		400 Not Found 
			U_disparado:usuario2 		500 INternal Server Error 
			} 		
POST 	/usuarios 	N/A 	{ 	OK 	200 OK 
			Nombre:”nombre” 		403 Forbidden 
			Password:”pass” 		500 INternal Server Error 
			} 		
GET 	/usuarios/{nombre_usuario} 	id 	N/A 	{ 	200 OK 
				Nombre:”nombre” 	400 Not Found 
				Password:”pass” 	500 INternal server error 
				} 	
