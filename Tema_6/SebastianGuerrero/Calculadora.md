
## Información - API CALCULADORA
A nivel general se crea un solo endpoint con el método post para realizar las distintas operaciones, la respuesta de cualquier operación ejecutada obtendrá el mismo resultado lo cual es el id de la operacion y el resultado segun corresponda, en dependencia de lo que se indique en el body se ejecutara la operación correspondiente de la siguiente manera:

### Operación suma:
La operación de ``suma`` se realiza indicando que corresponde a la "operation" "addition" en el body:
`{"operation":"addition","values":[2,2,2]}` .
### Operación resta:
La operación de ``resta`` se realiza indicando que corresponde a la "operation" "substration" en el body:
`{"operation":"substration","values":[2,2,2]}` .
### Operación multiplicación:
La operación de ``multiplicación`` se realiza indicando que corresponde a la "operation" "addition" en el body:
`{"operation":"multiplication","values":[2,2]}` .
### Operación división:
La operación de ``división`` se realiza indicando que corresponde a la "operation" "addition" en el body:
`{"operation":"división","values":[2,2]}` .
### Operación raiz N-ésima:
La operación de ``raiz`` se realiza indicando que corresponde a la "operation" "addition" en el body:
`{"operation":"root","values":[2,2]}` .
### Operación potencia N-ésima:
La operación de ``potencia`` se realiza indicando que corresponde a la "operation" "addition" en el body:
`{"operation":"power","values":[2,2]}` .

#### **Importante
* En los casos de la multiplicación, división, raiz y potencia se realiza la validación del campo values, en caso que la longitud del array sea mayor a 2 el API responderá status 400 BadRequest indicando que la petición esta erronea, en caso de errores en operaciones como división por cero la respuesta será status 500 Internal Server Error.


| Método HTTP                             | URI                    | Query Params | Cuerpo de la Petición                                  | Cuerpo de la Respuesta                                                 | Códigos de Respuesta                                     |
|-----------------------------------------|------------------------|--------------|--------------------------------------------------------|------------------------------------------------------------------------|----------------------------------------------------------|
| POST                                    | /operations            | N/A          | `{"operation":"value_operation","values":[2,2,2,2,2]}` | `{"id_operation":1,"result":4}`                                        | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error |
| GET                                     | /operations/{id}       | N/A          | N/A                                                    | `{"id_operation":1,"operation":"operation","values":[4,2],"result":2}` | 200 OK<br/>400 Bad Request<br/>500 Internal Server Error |

