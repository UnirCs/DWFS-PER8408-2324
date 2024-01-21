API de un sistema de reserva de butacas de cine

Las operaciones que la API debe soportar son las siguientes:

    Crear, eliminar y modificar películas.
    Crear, eliminar y modificar (parcialmente) salas.
    Crear, eliminar y modificar (parcialmente) usuarios.
    Crear una reserva para un usuario en una sala.
    Cancelar una reserva para un usuario en una sala.
    Modificar una reserva para un usuario en una sala.
    Registrar un pago de una reserva.

| Método HTTP | URI               | Query Params | Request Body                                                                                                      | Response Body | Códigos HTTP de respuesta |
|-------------|-------------------|--------------|-------------------------------------------------------------------------------------------------------------------|---------------|---------------------------|
| POST        | /movies           | N/A          | {"name":"The Beekeeper", "hall":[1,3],"Time":["12:00","13:00","17:00"]}                                           | {"MovieId":1} | 201,400,500               |
| DELETE      | /movies/{movieId} | movieId      | N/A                                                                                                               | N/A           | 200,400,500               |
| POST        | /movies/{movieId} | movieId      | {"name":"The Beekeeper", "hall":[1,3],"Time":["12:30","13:15","17:00"]}                                           | N/A           | 201,400,500               |
| POST        | /hall             | N/A          | {"rows":10,"columns":10}                                                                                          | {"hallId":1}  | 201,400,500               |
| DELETE      | /hall/{hallId}    | hallId       | N/A                                                                                                               | N/A           | 200,400,500               |
| PATCH       | /hall/{hallId}    | hallId       | {"rows":12,"columns":10}                                                                                          | N/A           | 201,400,500               |
| POST        | /users            | N/A          | {"name":"Manuel","last name 1":"Garcia","last name 2":"Garcia", "email":"manug25@gmail.com","phone":"666.555.444" | {"userId":1}  | 201,400,500               |
| DELETE      | /users/{userId}   | userId       | N/A                                                                                                               | N/A           | 200,400,500               |
| PATCH       | /users            | userId       | {"name":"Manuel","last name 1":"Garcia","last name 2":"Lopez", "email":"manug25@gmail.com","phone":"666.555.444"  | {"userId":1}  | 201,400,500               |
| POST        | /book             | N/A          | {userId:1, hallId:1, "Time":"12:30",row:3,column:5                                                                | bookId        | 201,400,500               |
| DELETE      | /book/{bookId}    | bookId       | N/A                                                                                                               | N/A           | 200,400,500               |
| PUT         | /book/{bookId}    | bookId       | {userId:1, hallId:1, "Time":"13:15",row:3,column:5                                                                | N/A           | 201,400,500               |
| POST        | /pay              | N/A          | {userId:1,bookId1}                                                                                                | payId         | 200,400,500               |

