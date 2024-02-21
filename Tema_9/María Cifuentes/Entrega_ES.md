# Consultas con Elasticsearch

## 1. Ejercicio

<b> Para cada operación solicitada, incluye el comando cURL que se obtiene de Postman </b> en un archivo Entrega_ES.md

### Parte I) Generar un alias
- 1) Genera un alias para el indice employees, que se llamará ``employees-alias``. A partir de ahora realizaremos las consultas siempre sobre este alias y no sobre el índice original.
```
curl --location 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/_aliases' \
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
```
### Parte II) Inserción de elementos
- 1) Inserta un nuevo elemento en el índice utilizando tus datos (puedes inventartelos si lo consideras). Guarda el ID de documento que has obtenido tras la creacion del elemento.
```
curl --location 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_doc' \
--header 'Content-Type: application/json' \
--data '{
   "FirstName":"María",
   "LastName":"Cifuentes",
   "Designation":"Java Developer",
   "Salary":"1000000",
   "DateOfJoining":"2022-01-13",
   "Address":"8445 Green Street Morristown, NJ 07960",
   "Gender":"Female",
   "Age":26,
   "MaritalStatus":"Single",
   "Interests":"R/C Boats,Dolls,Cloud Watching,Animals/pets/dogs,Crocheting,Casino Gambling"
}'
```
### Parte III) Obtención simple de elementos
- 1) Utilizando el ID del paso anterior, obtén los datos de tu registro. Deberías obtener lo mismo que anteriormente escribiste.
```
curl --location 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_doc/DEe8ko0B-Gty6Sx9vhSc'
```
### Parte IV) Eliminación de elementos
- 1) Elimina el elemento que has creado anteriormente.
```
curl --location --request DELETE 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_doc/DEe8ko0B-Gty6Sx9vhSc'
```

### Parte V) Consultas
- 1) Obtener empleados cuyo puesto sea ``Software Engineer``. [Revisa la documentación sobre term queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-term-query.html)
```
curl --location --request GET 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "query": {
        "term": {
            "Designation": {
                "value": "Software Engineer"
            }
        }
    }
}'
```
- 2) Obtener empleados cuyo puesto NO sea ``Software Engineer``. [Revisa la documentación sobre bool queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-bool-query.html)
```
curl --location 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
  "query": {
    "bool" : {
      "must_not" : {
        "term" : { "designation" : "Software Engineer" }
      }
    } 
  }
}'
```
- 3) Obtener la primera página de empleados cuya ``designation`` sea ``Software Engineer`` asumiendo un tamaño de página de 35 elementos. [Revisa la documentación sobre paginación](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/paginate-search-results.html)
```
curl --location --request GET 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "from": 0,
    "size": 35,
    "query": {
        "term": {
            "Designation": {
                "value": "Software Engineer"
            }
        }
    }
}'
```
- 4) Obtener la tercera página de empleados cuya ``designation`` sea ``Software Engineer`` asumiendo un tamaño de página de 35 elementos.
```
curl --location --request GET 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
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
}'
```
- 5) Obtener los primeros 13 empleados cuyo salario sea mayor a 67.000 dólares. [Revisa la documentación sobre range queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-range-query.html)
```
curl --location --request GET 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "from": 0,
    "size": 13,
    "query": {
        "range": {
            "Salary": {
                "gt": 67.000
            }
        }
    }
}'
```
- 6) Obtener <b> el número total </b> que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta específica, solo saber el número total de hits.
```
curl --location --request GET 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "from": 0,
    "size": 0,
    "query": {
        "range": {
            "DateOfJoining": {
                "gte": "2003-05-01",
                "lte": "2003-05-31"
            }
        }
    }
}'
```
- 7) Obtener empleados cuyo nombre sea ``NATALIE``. [Revisa la documentación sobre match queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-match-query.html)
```
curl --location --request GET 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "query": {
        "match": {
            "FirstName": "NATALIE"
        }
    }
}'
```
- 8) Obtener empleados cuya dirección sea o contenga ``Street``. [Revisa la documentación sobre queries sobre campos search-as-you-type](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-as-you-type.html)
```
curl --location --request GET 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
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
}'
```
- 9) Obtener empleados cuya dirección sea o contenga ``wood``.
```
curl --location --request GET 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
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
}'
```
- 10) Obtener empleados interesados en ``Wrestling``.
```
curl --location --request GET 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "query": {
        "match": {
            "Interests": "Wrestling"
        }
    }
}'
```
- 11) Obtener el número de hombres y mujeres interesad@s en ``Wrestling``.[Revisa la documentación sobre term aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-bucket-terms-aggregation.html)
```
curl --location --request GET 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "size":0,
    "query": {
        "match": {
            "Interests": "Wrestling"
        }
    },
  "aggs":{
      "Generos":{
         "terms":{
            "field":"Gender"
         }
      }
  }
}'
```
- 12) En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres). [Revisa la documentación sobre sub-agregaciones](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations.html) y [sobre la agregación avg](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-metrics-avg-aggregation.html)
```
curl --location --request GET 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "size": 0,
    "query": {
        "match": {
            "Interests": "Wrestling"
        }
    },
    "aggs": {
        "Generos": {
            "terms": {
                "field": "Gender"
            },
            "aggs": {
                "Edad media": {
                    "avg": {
                        "field": "Age"
                    }
                }
            }
        }
    }
}'
```
- 13) Obtener el número de empleados en función de los siguientes tramos de salario: menor de 60.000 dólares (``tramo 1``), entre 60.000 dólares y 67.000 dólares (``tramo 2``) y superior a 67.000 dólares (``tramo 3``). [Revisa la documentación sobre range aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-bucket-range-aggregation.html)
```
curl --location --request GET 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
  "aggs": {
    "salary_ranges": {
      "range": {
        "field": "Salary",
        "ranges": [
          { "to": 60000 },
          { "from": 60000, "to": 67000 },
          { "from": 67000 }
        ]
      }
    }
  }
}'
```
- 14) En base a la consulta anterior, para cada tramo, hallar el número de empleados que están casados y no casados.
```
curl --location --request GET 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "size":0,
    "aggs": {
        "salary_ranges": {
            "range": {
                "field": "Salary",
                "ranges": [
                    {
                        "to": 60000
                    },
                    {
                        "from": 60000,
                        "to": 67000
                    },
                    {
                        "from": 67000
                    }
                ]
            },
            "aggs": {
                "MaritalStatus": {
                    "terms": {
                        "field": "MaritalStatus"
                    }
                }
            }
        }
    }
}'
```

### Parte VI) Crear otro índice y modificar el alias
- 1) Crea un nuevo índice de la misma forma que hiciste al principio, pero ahora llámalo ``employees-v2`` y mete en él todos los datos del fichero de prueba. Modifica el alias ``employees-alias`` que creaste antes para que apunte tanto al índice ``employees`` original como al nuevo ``employees-v2``. Puedes comprobar que lo has hecho correctamente ejecutando la operación "Obtener todos los alias" de la colección de Postman.
```
{
    "employees": {
        "aliases": {
            "employees-alias": {}
        }
    },
    ".kibana_1": {
        "aliases": {
            ".kibana": {}
        }
    },
    "employees-v2": {
        "aliases": {
            "employees-alias": {}
        }
    }
}
```
- 2) Realiza alguna de las consultas anteriores. ¿Qué observas?
Al lanzar la petición contra el alias, como ahora apunta a los dos índices, devuelve el resultado x2
- 3) Elimina ``employees`` del conjunto de índices a los que hace referencia el alias.
```
curl --location 'https://fc07fz7rij:o3w2trvg1x@unir-cluster-2949166454.eu-west-1.bonsaisearch.net:443/_aliases' \
--header 'Content-Type: application/json' \
--data '{
    "actions": [
        {
            "remove": {
                "index": "employees",
                "alias": "employees-alias"
            }
        }
    ]
}'
```
