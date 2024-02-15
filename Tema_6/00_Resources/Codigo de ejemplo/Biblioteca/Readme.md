# API de una biblioteca online

En este ejercicio vamos a diseñar la API REST de una biblioteca online.

Las operaciones que la API debe soportar son las siguientes:
- Obtener un listado de todos los libros de la biblioteca.
- Filtrar los libros por título y autor.
- Registrar un nuevo préstamo.
- Dar de baja un préstamo.
- Obtener un listado de todos los préstamos de un usuario.
- Modificar título, autor o año de un libro.
- Generar un reporte de los libros prestados a un usuario.

**Recursos identificados:**
- Libro (books): Representa un libro de la biblioteca.
- Préstamo (loans): Representa un préstamo de un libro a un usuario.
- Usuario (users): Representa un usuario de la biblioteca.
- Reporte (reports): Representa un reporte de los libros prestados a un usuario.

| Método HTTP                            | URI                   | Query Params  | Cuerpo de la Petición                                              | Cuerpo de la Respuesta                                                                | Códigos de Respuesta                                    |
|----------------------------------------|-----------------------|---------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------|
| GET                                    | /books                | title, author | N/A                                                                | `{"books": [{"id": 789, "title": "RESTful Design", "author": "John Doe"}]}`           | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error   |
| POST                                   | /loans                | N/A           | `{"userId": 123, "bookId": 789, "dueDate": "2023-08-01"}`          | `{"loanId": 321, "userId": 123, "bookId": 789, "dueDate": "2023-08-01"}`              | 201 Created<br/>400 Bad Request<br/>500 Internal Server Error |
| DELETE (podría haber sido PUT o PATCH) | /loans/{loanId}       | N/A           | N/A                                                                | `{"message": "Loan returned"}`                                                        | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
| GET                                    | /users/{userId}/loans | N/A           | N/A                                                                | `{"loans": [{"loanId": 321, "bookId": 789, "dueDate": "2023-08-01"}]}`                | 200 OK<br/>404 Not Found<br/>500 Internal Server Error      |
| PATCH                                  | /books/{bookId}       | N/A           | `{"title": "Advanced REST", "author": "Jane Smith", "year": 2023}` | `{"bookId": 789, "title": "Advanced REST", "author": "Jane Smith", "year": 2023}`     | 200 OK<br/>400 Bad Request<br/>404 Not Found<br/>500 Internal Server Error |
| POST                                   | /users/{userId}/reports/     | N/A           | N/A                                                                | `{"userId": 123, "loans": [{"loanId": 321, "bookId": 789, "dueDate": "2023-08-01"}]}` | 202 Accepted<br/>404 Not Found<br/>500 Internal Server Error    |

