# API de una app de gestión de eventos y reservas en línea

**Recursos identificados:**
- Spaces (espacios) -> salas para alquilar. Pueden ser de 3 tipos: espacio de trabajo, salas de reuniones o auditorios
- Bookings (reservas) -> para gestionar las reservas de espacios
- Events (eventos) -> para gestionar los eventos
- Clients (clientes) -> los clientes que pueden hacer las reservas

- Búsqueda de espacios disponibles: los usuarios podrán hacer búsqueda de los espacios por localicación, fecha y tipo de espacio. Podrán especificar si buscan que esté ocupado o libre. Si no se especifica el parámetro se buscarán solo los libres para esas fechas.
- El controlador de eventos deberá comprobar para hacer la inserción que el espacio solicitado corresponde a un Auditorio, de lo contrario devolverá un código 400 con el texto "El espacio no corresponde a un auditorio"
- Los tipos de sala son: espacio de trabajo (1), salas de reuniones (2) y auditorios (3)


| Método HTTP  | URI            | Query Params | Request Body | Response Body    | Códigos HTTP de respuesta |
|--------------|----------------|--------------|--------------|------------------|-------------------------|
| GET         | /spaces  | occupied, locationId, date, spaceType            | - | `[{"spaceId": 1, "spaceType": 1, "location": "1", "name": "sala101", "capacity": 6, "occupied": false},{"spaceId": 2, "spaceType": 2, "location": "1", "name": "sala102", "capacity": 8, "occupied": false}]` | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error |
| POST         | /bookings  | -            | `{"spaceId": 1, "clientId": "2", "startDate": "2024-02-10 10:00", "endDate": "2024-02-10 11:00"}`| `{"bookingId": 100, "spaceId": 1, "clientId": "2", "startDate": "2024-02-10 10:00", "endDate": "2024-02-10 11:00"}` | 201 Created<br/>400 Bad request<br/>500 Internal Server Error |
| DELETE         | /bookings/{bookingId}  | -            | - | `{"bookingId": 100, "spaceId": 1, "clientId": "2", "startDate": "2024-02-10 10:00", "endDate": "2024-02-10 11:00"}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
| PATCH         | /bookings/{bookingId}  | -            | `{"endDate": "2024-02-10 12:00"}`| `{"bookingId": 100, "spaceId": 1, "clientId": "2", "startDate": "2024-02-10 10:00", "endDate": "2024-02-10 12:00"}` | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST         | /locations/{locationId}/spaces  | -            | `{"spaceType": 1, "name": "sala101", "capacity": 6}`| `{"spaceId": 1, "spaceType": 1, "location": "1", "name": "sala101", "capacity": 6}` | 201 Created<br/>400 Bad request<br/>500 Internal Server Error |
| PATCH         | /locations/{locationId}/spaces/{spaceId}  | -            | `{"capacity": 8}`| `{"spaceId": 1, "spaceType": 1, "location": "1", "name": "sala101", "capacity": 8}` | 200 OK<br/>400 Bad request<br/>404 Not found<br/>500 Internal Server Error |
| DELETE         | /locations/{locationId}/spaces/{spaceId}  | -            | - | `{"spaceId": 1, "spaceType": 1, "location": "1", "name": "sala101", "capacity": 6}` | 200 OK<br/>404 Not Found<br/>500 Internal Server Error |
| POST         | /locations/{locationId}/events  | -            | `{"description": "Festival Múscica", "startDate": "2024-02-15 09:00", "endDate": "2024-02-16 23:59", "spaceId": 25}` | `{"eventId":3, "description": "Festival Múscica", "startDate": "2024-02-15 09:00", "endDate": "2024-02-16 23:59", "spaceId": 25}` | 201 Created<br/>400 Bad request<br/>500 Internal Server Error |
