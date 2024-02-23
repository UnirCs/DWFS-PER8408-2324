Metodo HTTP 	URI 	Query params 	Cuerpo de la petición 	Cuerpo de la respuesta 	Codigos de respuesta 
POST 	/partidas 	N/A 	{ 	{ 	200 OK 
			Data:{ 	Data:{ 	 
			nombre:”Partida”, 	Id:1, 	
			iniciada:false, 	nombre:”Peli”, 	
			} 	iniciada:false 	
			} 	} 	
				} 	
DELETE 	/partidas/{id} 	N/A 	N/A 	OK 	200 OK 
					400 Not Found 
PATCH iniciar o finalizar 	/partidas/{id} 	N/A 	{ 	{ 	200 OK 
			Data:{ 	respuesta:{ 	500 Internal Server Error 
			Id:1, 	Id:1, 	400 Not Found 
			Iniciado:true 	Iniciado:true 	
			} 	} 	
			} 	} 	
PATCH disparar 	/partidas/{id} 	N/A 	{ 	OK 	200 OK 
			U_dispara:u1, 		500 Internal Server Error 
			U_disparado:u2, 		400 Not Found 
			Posicion_disparada: 4,5 		
			Data:{ 		
			Id:1, 		
			Iniciado:true 		
			} 		
			} 		
POST 	/barcos 	N/A 	{ 	OK 	200 ok 
			Posiciones:3, 		500 Internal Server error 
			Estado:”” 		400 not found 
			} 		 
GET 	/barcos/{id} 	N/A 	N/A 	{ 	200 OK 
				Posiciones:3, 	400 Not Found 
				Estado=”tocado” 	
				} 	
POST 	/usuarios 	N/A 	{ 	OK 	200 OK 
			Nombre:”nombre” 		403 Forbidden 
			Password:”pass” 		500 INternal Server Error 
			} 		
GET 	/usuarios/{nombre_usuario} 	N/A 	N/A 	{ 	200 OK 
				Nombre:”nombre” 	400 Not Found 
				Password:”pass” 	500 INternal server error 
				} 	