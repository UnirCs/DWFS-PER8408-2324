# API para gestión de eventos

Recursos identificados:
- Usuarios (users): que realizan las operaciones y tienen un identificador (userId).
- Espacios de trabajo (workspaces): Espacios para aliquilar
    - Identificador (workspaceId).
    - Ubicación (location), fecha (date) y tipo de espacio (workspaceType).
- Reservas (bookings): Representan las reservas.
  - Fecha-hora de inicio (initDate), fecha-hora de fin (endDate).
  - Estado (status) que nos permite saber si una reserva está cancelada, pendiente o activa.
- Eventos (events): Representan los eventos.
  - Fecha-hora de inicio (initDate)y de fin (endDate)
  - Titulo (title) y descripción (description)

Operaciones:

- Buscar espacios (GET) y agregar (POST), modificar (PUT) o eliminar espacios (DELETE)
- Crear o hacer una reserva (POST)  
- Cancelar reserva (PATCH)
- Modificar reserva (PUT)
- Crear eventos (POST) 


| Método HTTP | URI                                | Query Params                        | Request Body                                                                                                                                            | Response Body                                                                                                                                                          | Códigos HTTP de respuesta                                      |
|-------------|------------------------------------|-------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| GET         | /workspaces                        | location<br/>date<br/>workspaceType | N/A                                                                                                                                                     | `{"workspaces": [ {"workspaceId": 123, "location" : "ZONE A", "date": "2024-01-08", "workspaceType": "AUDITORIUM", "status": "AVAILABLE"}] }`                          |200 OK<br/>404 Not Found<br/>500 Internal Server Error    |
| POST        | /workspaces/{workspaceId}          | N/A                                 | `{"location" : "ZONE A", "initDate": "2024-01-08", "workspaceType": "AUDITORIUM", "status": "AVAILABLE", "userId": 123}`                                | `{"workspaceId": 123, "location" : "ZONE A", "initDate": "2024-01-08", "workspaceType": "AUDITORIUM", "status": "AVAILABLE"}`                                          |201 Created<br/>400 Bad Request<br/>500 Internal Server Error   |
| PUT         | /workspaces/{workspaceId}          | N/A                                 | `{"location" : "ZONE A", "initDate": "2024-01-08", "workspaceType": "AUDITORIUM", "status": "AVAILABLE, "userId": 123"}`                                | `{"workspaceId": 123, "location" : "ZONE A", "initDate": "2024-01-08", "workspaceType": "AUDITORIUM", "status": "BLOCKED"}`                                            | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error  |
| DELETE      | /workspaces/{workspaceId}          | N/A                                 | `{"userId": 123"}`                                                                                                                                      | `{"msg": "Workspace deleted"}`                                                                                                                                         |200 OK<br/>404 Not Found<br/>500 Internal Server Error    |
| POST        | /workspaces/{workspaceId}/bookings | N/A                                 | `{"initDate": "2024-01-08 8:00", "endDate": "2024-01-08 10:00", "status": "PENDING", "userId": 123}`                                                                   | `{"bookingId": 123, initDate": "2024-01-08 8:00", "endDate": "2024-01-08 10:00", "status": "PENDING", "userId": 123}`                                                  |201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| PATCH       | /workspaces/{workspaceId}/bookings | N/A                                 | `{"status": "CANCELED"}`                                                                                                                                | `{"bookingId": 123, initDate": "2024-01-08 8:00", "endDate": "2024-01-08 10:00", "status": "CANCELED", "userId": 123}`                                                                |200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error   |
| PUT         | /workspaces/{workspaceId}/bookings | N/A                                 | `{"bookingId": 123, initDate": "2024-01-08 8:00", "endDate": "2024-01-08 11:00", "status": "PENDING", "userId": 123}`                                                  | `{"bookingId": 123, initDate": "2024-01-08 8:00", "endDate": "2024-01-08 11:00", "status": "PENDING", "userId": 123}`                                                                 |200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error  |
| POST        | /workspaces/{workspaceId}/events   | N/A                                 | `{"initDate": "2024-01-08 8:00", "endDate": "2024-01-08 10:00", "title": "Recital Poesia", "description": "Recital poesia con acompañamiento musical", "userId": 123}` | `{"eventId": 123, initDate": "2024-01-08 8:00", "endDate": "2024-01-08 10:00", "title": "Recital Poesia", "description": "Recital poesia con acompañamiento musical", "userId": 123}` |201 Created<br/>400 Bad Request<br/>500 Internal Server Error    |
