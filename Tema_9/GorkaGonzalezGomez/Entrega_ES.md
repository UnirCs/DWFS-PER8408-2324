# Consultas con Elasticsearch

Con este ejercicio trataremos de asimilar los conceptos estudiados en clase sobre los tipos de datos y operaciones en Elasticsearch.
Deberás crear un clúster de prueba tal como se indica en [estas instrucciones](https://github.com/UnirCs/elasticsearch-operations-postman) e insertar los datos de prueba que se presentan. Encontrarás también una colección de Postman que puede ser de gran ayuda a la hora de realizar el ejercicio y trabajar con Elasticsearch en general.
Recuerda hacer uso de la [documentación](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl.html).

## 1. Ejercicio

<b> Para cada operación solicitada, incluye el comando cURL que se obtiene de Postman </b> en un archivo Entrega_ES.md

### Parte I) Generar un alias
- 1) `` 
    curl --location 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/_aliases' \
     --header 'Content-Type: application/json' \
     --data '{
     "actions": [
     {
     "add": {
     "index": "employees",
     "alias": "employees-alias"
     }
     }
     ]
     }'
    ``

### Parte II) Inserción de elementos
- 1)   ``
       curl --location 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_doc' \
        --header 'Content-Type: application/json' \
        --data '{
        "FirstName":"GORKA",
        "LastName":"GONZALEZ",
        "Designation":"Software ENGINEER",
        "Salary":"1000000",
        "DateOfJoining":"2022-09-19",
        "Address":"Carrer d'\''Isaac Albeniz nº33 1º 6ª, Badalona 08914",
        "Gender":"Male",
        "Age":23,
        "MaritalStatus":"Single",
        "Interests":"NBA, Football, Swimming, MMA"
        }' ``

### Parte III) Obtención simple de elementos
- 1) ``curl --location 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_doc/hJQ3s40Br2gdZFhDe21W'``

### Parte IV) Eliminación de elementos
- 1) ``curl --location --request DELETE 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_doc/hJQ3s40Br2gdZFhDe21W'``

### Parte V) Consultas
- 1) ``curl --location --request GET 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "term": {
     "Designation": {
     "value": "Software Engineer"
     }
     }
     }
     }'``
- 2) ``curl --location --request GET 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "bool": {
     "must_not": {
     "term": { "Designation": "Software Engineer"  }
     }
     }
     }
     }'``
- 3) ``curl --location --request GET 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "size": 35,
     "query": {
     "term": {
     "Designation": {
     "value": "Software Engineer"
     }
     }
     }
     }'``
- 4) ``curl --location --request GET 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "from": 70,
     "size": 35,
     "query": {
     "term": {
     "Designation": {
     "value": "Software Engineer"
     }
     }
     }
     }'``
- 5) ``curl --location --request GET 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "size": 13,
     "query": {
     "range": {
     "Salary": {
     "gt": "67000"
     }
     }
     }
     }'``
- 6) ``curl --location --request GET 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_count' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "range": {
     "DateOfJoining": {
     "gte": "2003-05-01",
     "lt": "2003-06-01"
     }
     }
     }
     }'``
- 7) ``curl --location --request GET 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "match": {
     "FirstName": "NATALIE"
     }
     }
     }'``
- 8) ``curl --location --request GET 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "multi_match": {
     "query": "Street",
     "type": "bool_prefix",
     "fields": [
     "Address",
     "Address._2gram",
     "Address._3gram"
     ]
     }
     }
     }'``
- 9) ``curl --location --request GET 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_search' \
     --header 'Content-Type: application/json' \
     --data '{
     "query": {
     "multi_match": {
     "query": "wood",
     "type": "bool_prefix",
     "fields": [
     "Address",
     "Address._2gram",
     "Address._3gram"
     ]
     }
     }
     }'``.
- 10) ``curl --location --request GET 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_search' \
      --header 'Content-Type: application/json' \
      --data '{
      "query": {
      "multi_match": {
      "query": "Wrestling",
      "type": "bool_prefix",
      "fields": [
      "Interests",
      "Interests._2gram",
      "Interests._3gram"
      ]
      }
      }
      }'``.
- 11) ``curl --location --request GET 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_search' \
      --header 'Content-Type: application/json' \
      --data '{
      "query": {
      "multi_match": {
      "query": "Wrestling",
      "type": "bool_prefix",
      "fields": [
      "Interests",
      "Interests._2gram",
      "Interests._3gram"
      ]
      }
      },
      "aggs": {
      "Generos": {
      "terms": {
      "field": "Gender"
      }
      }
      }
      }'``
- 12) ``curl --location --request GET 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_search' \
      --header 'Content-Type: application/json' \
      --data '{
      "query":{
      "multi_match":{
      "query":"Wrestling",
      "type":"bool_prefix",
      "fields":[
      "Interests",
      "Interests._2gram",
      "Interests._3gram"
      ]
      }
      },
      "aggs":{
      "Generos":{
      "terms":{
      "field":"Gender"
      },
      "aggs":{
      "Edad media":{
      "avg":{
      "field":"Age"
      }
      }
      }
      }
      }
      } '``
- 13) ``curl --location --request GET 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees/_search' \
      --header 'Content-Type: application/json' \
      --data '{
      "aggs": {
      "Salarios": {
      "range": {
      "field": "Salary",
      "ranges": [
      {"key": "Menor de 60000", "to": "60000"},
      {"key": "Entre 60000 y 67000", "from": "60000", "to": "67000"},
      {"key": "Superior a 67000", "from": "67000"}
      ]
      }
      }
      }
      }'``
- 14) ``{
      "aggs":{
      "Salarios": {
      "range": {
      "field": "Salary",
      "ranges": [
      {"key": "Menor de 60000", "to": "60000"},
      {"key": "Entre 60000 y 67000", "from": "60000", "to": "67000"},
      {"key": "Superior a 67000", "from": "67000"}
      ]
      },
      "aggs":{
      "Casados":{
      "terms":{
      "field":"MaritalStatus"
      }
      }
      }
      }
      }
      }``

### Parte VI) Crear otro índice y modificar el alias
- 1) ``curl --location --request PUT 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees-v2' \
     --header 'Content-Type: application/json' \
     --data '{
     "mappings":{
     "properties":{
     "Address":{
     "type":"search_as_you_type"
     },
     "Age":{
     "type":"integer"
     },
     "DateOfJoining":{
     "type":"date",
     "format":"yyyy-MM-dd"
     },
     "Designation":{
     "type":"keyword"
     },
     "FirstName":{
     "type":"text"
     },
     "Gender":{
     "type":"keyword"
     },
     "Interests":{
     "type":"text"
     },
     "LastName":{
     "type":"text"
     },
     "MaritalStatus":{
     "type":"keyword"
     },
     "Salary":{
     "type":"double"
     }
     }
     }
     }'``
    ``curl --location 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/_aliases' \
     --header 'Content-Type: application/json' \
     --data '{
     "actions": [
     {
     "add": {
     "index": "employees-v2",
     "alias": "employees-alias"
     }
     }
     ]
     }'``
- 2) Se obtienen los mismos resultados que anteriormente.
- 3) ``curl --location --request DELETE 'https://4mjh6cq16n:sjabe7dh7v@unir-search-5927145159.us-east-1.bonsaisearch.net:443/employees'``
