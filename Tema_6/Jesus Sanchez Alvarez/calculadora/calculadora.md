Metodo HTTP 	URI 	Query params 	Cuerpo de la petición 	Cuerpo de la respuesta 	Codigos de respuesta 
POST 	/suma 	N/A 	{ 	{ 	200 OK 
			elementos:[2,3,1] 	Resultado:6 	
			} 	} 	
POST 	/resta 	N/A 	{ 	{ 	200 OK 
			Elementos:[10,8,2] 	Resultado:0 	
			, 	} 	
			} 		
POST 	/multiplicacion 	N/A 	{ 	{ 	200 OK 
			E1:2, 	Resultado:6 	
			E2:3, 	} 	
			resultado:6 		
			} 		
POST 	/division 	N/A 	{ 	{resultado:{ 	200 OK 
			Dividendo:8, 	Dividendo:8, 	403 Forbidden 
			divisor:2, 	Divisor:2, 	500 Internal Server Error 
			} 	resultado:4 	
				}} 	
GET 	/detalle/{id_operacion} 	id 	N/A 	{resultado:{ 	200 ok 
				Elementos:[2,2,2], 	201  
				Resultado:6 	400 not found 
				Operacion_id:1 	500 Internal Server Error 
				}} 	
