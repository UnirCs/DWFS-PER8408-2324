Metodo HTTP|URI|Query params|Cuerpo de la petición|Cuerpo de la respuesta|Codigos de respuesta|
GET|/sumas/{id}|id|N/A|{resultado:{|200 OK|
Elementos:[2,2,2],|
Resultado:6|
Operacion_id:1|
}}|
|
POST|/sumas|N/A|{|{|200 OK|
elementos:[2,3,1]|Resultado:6||
}|}|
GET|/restas/{id}|id|N/A|{resultado:{|200OK|
Elementos:[8,2,2],|
Resultado:4|
Operacion_id:2|
}}|
|
POST|/restas|N/A|{|{|200 OK|
Elementos:[10,8,2]|Resultado:0|
,|}|
}|
GET|/multiplicaciones/{id}|id|N/A|{resultado:{|200 ok|
Elementos:[8,2],|400 Not Found|
Resultado:16|
Operacion_id:2|
}}|
|
POST|/multiplicaciones|N/A|{|{|200 OK|
E1:2,|Resultado:6|
E2:3,|}|
resultado:6|
}|
GET|/divisiones/{id}|id|N/A|{resultado:{|200 Ok||
Elementos:[8,2],|400 Not Found|
Resultado:4|
Operacion_id:2|
}}|
|
POST|/divisiones|N/A|{|{resultado:{|200 OK|
Dividendo:8,|Dividendo:8,|403 Forbidden|
divisor:2,|Divisor:2,|500 Internal Server Error|
}|resultado:4|
}}|