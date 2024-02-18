## 1. Ejercicio

<b> Para cada operación solicitada, incluye el comando cURL que se obtiene de Postman </b> en un archivo Entrega_ES.md

### Parte I) Generar un alias
- 1) Genera un alias para el indice employees, que se llamará ``employees-alias``. A partir de ahora realizaremos las consultas siempre sobre este alias y no sobre el índice original.

```
curl --location --request POST 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/_aliases' \
--header 'Content-Type: application/json' \
--data-raw '{
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
curl --location --request POST 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_doc' \
--header 'Content-Type: application/json' \
--data-raw '{
   "FirstName":"MARC",
   "LastName":"CARNÉ",
   "Designation":"Software Engineer",
   "Salary":"40000",
   "DateOfJoining":"1994-06-02",
   "Address":"Carrer Santa Joana d'\''Arc 28, 1, BCN 08032",
   "Gender":"Male",
   "Age":29,
   "MaritalStatus":"Married",
   "Interests":"Motorcycles,Cars"
}'
```
ID obtenido: QT2gN40Bc11jWJklkoOA

### Parte III) Obtención simple de elementos
- 1) Utilizando el ID del paso anterior, obtén los datos de tu registro. Deberías obtener lo mismo que anteriormente escribiste.

```
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_doc/QT2gN40Bc11jWJklkoOA'
```

### Parte IV) Eliminación de elementos
- 1) Elimina el elemento que has creado anteriormente.

```
curl --location --request DELETE 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_doc/QT2gN40Bc11jWJklkoOA'
```

### Parte V) Consultas
- 1) Obtener empleados cuyo puesto sea ``Software Engineer``. [Revisa la documentación sobre term queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-term-query.html)

```
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
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
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": {
        "bool":{
            "must_not":{
                "term": {
                    "Designation": {
                        "value": "Software Engineer"
                    }
                }
            }
        }
    }
}'
```

- 3) Obtener la primera página de empleados cuya ``designation`` sea ``Software Engineer`` asumiendo un tamaño de página de 35 elementos. [Revisa la documentación sobre paginación](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/paginate-search-results.html)

```
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "from":0,
    "size":35,
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
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "from":105,
    "size":35,
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
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "from":0,
    "size":13,
    "query": {
        "range": {
            "Salary":{
                "gte": 67000
            }
        }
    }
}'
```

- 6) Obtener <b> el número total </b> que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta específica, solo saber el número total de hits.

```
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "from":0,
    "size":0,
    "query": {
        "range": {
            "DateOfJoining":{
                "gte": "2003-05-01",
                "lte": "2003-05-31"
            }
        }
    }
}'
```

- 7) Obtener empleados cuyo nombre sea ``NATALIE``. [Revisa la documentación sobre match queries](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl-match-query.html)

```
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": {
        "match": {
            "FirstName": "NATALIE"
        }
    }
}'
```

- 8) Obtener empleados cuya dirección sea o contenga ``Street``. [Revisa la documentación sobre queries sobre campos search-as-you-type](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-as-you-type.html)

Si queremos que salga ``Street`` de forma completa

```
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
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
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
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
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": {
        "match": {
            "Interests": "Wrestling"
        }
    }
}'
```

- 11) Obtener el número de hombres y mujeres interesad@s en ``Wrestling``.[Revisa la documentación sobre term aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-bucket-terms-aggregation.html)

```
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
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
            }
        }
    }
}'
```

- 12) En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres). [Revisa la documentación sobre sub-agregaciones](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations.html) y [sobre la agregación avg](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-metrics-avg-aggregation.html)

```
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
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
                "avg_grade": { 
                    "avg": { "field": "Age" } }
            }
        }
    }
}'
```

- 13) Obtener el número de empleados en función de los siguientes tramos de salario: menor de 60.000 dólares (``tramo 1``), entre 60.000 dólares y 67.000 dólares (``tramo 2``) y superior a 67.000 dólares (``tramo 3``). [Revisa la documentación sobre range aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations-bucket-range-aggregation.html)

```
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "size": 0,
    "aggs": {
        "Rangos de edad": {
            "range": {
                "field": "Salary",
                "ranges": [
                    {"key": "Menos de 60.000 dólares", "to":60000},
                    {"key": "De 60.000 a 67.000 dólares", "from": 60000, "to":67000},
                    {"key": "Más de 67.000 dólares", "from": 67000}
                ]
            }
        }
    }
}'
```

- 14) En base a la consulta anterior, para cada tramo, hallar el número de empleados que están casados y no casados.

```
curl --location --request GET 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/employees-aliases/_search' \
--header 'Content-Type: application/json' \
--data-raw '{
    "size": 0,
    "aggs": {
        "Rangos de edad": {
            "range": {
                "field": "Salary",
                "ranges": [
                    {"key": "Menos de 60.000 dólares", "to":60000},
                    {"key": "De 60.000 a 67.000 dólares", "from": 60000, "to":67000},
                    {"key": "Más de 67.000 dólares", "from": 67000}
                ]
            }, "aggs": {
            "Estado civil": {
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
    ".kibana_1": {
        "aliases": {
            ".kibana": {}
        }
    },
    "employees-v2": {
        "aliases": {
            "employees-alias": {}
        }
    },
    "employees": {
        "aliases": {
            "employees-alias": {}
        }
    }
}
```

- 2) Realiza alguna de las consultas anteriores. ¿Qué observas?

Realizo la consulta #7.
Al realizar la consulta al álias del índice (que hace referencia a dos índices) recibo dos documentos. En realidad es el mismo documento pero para cada uno de los índices, ya que un índice es la copia del otro.
El resultado obtenido es:
```
{
    "took": 3,
    "timed_out": false,
    "_shards": {
        "total": 2,
        "successful": 2,
        "skipped": 0,
        "failed": 0
    },
    "hits": {
        "total": {
            "value": 2,
            "relation": "eq"
        },
        "max_score": 8.805075,
        "hits": [
            {
                "_index": "employees-v2",
                "_type": "_doc",
                "_id": "RHT5PI0BE1rI7thzakXD",
                "_score": 8.805075,
                "_source": {
                    "FirstName": "NATALIE",
                    "LastName": "SERVIS",
                    "Designation": "Senior Software Engineer",
                    "Salary": "61000",
                    "DateOfJoining": "2003-09-19",
                    "Address": "34 Kingston St. El Dorado, AR 71730",
                    "Gender": "Female",
                    "Age": 35,
                    "MaritalStatus": "Unmarried",
                    "Interests": "Guitar,Learning A Foreign Language,Blacksmithing,Embroidery,Collecting,Becoming A Child Advocate,Taxidermy"
                }
            },
            {
                "_index": "employees",
                "_type": "_doc",
                "_id": "8j3_PI0Bc11jWJklB4e3",
                "_score": 8.804775,
                "_source": {
                    "FirstName": "NATALIE",
                    "LastName": "SERVIS",
                    "Designation": "Senior Software Engineer",
                    "Salary": "61000",
                    "DateOfJoining": "2003-09-19",
                    "Address": "34 Kingston St. El Dorado, AR 71730",
                    "Gender": "Female",
                    "Age": 35,
                    "MaritalStatus": "Unmarried",
                    "Interests": "Guitar,Learning A Foreign Language,Blacksmithing,Embroidery,Collecting,Becoming A Child Advocate,Taxidermy"
                }
            }
        ]
    }
}
```

- 3) Elimina ``employees`` del conjunto de índices a los que hace referencia el alias.

```
curl --location 'https://z7m3926u42:bcvaqe4gvk@unir-search-3659402253.us-east-1.bonsaisearch.net:443/_aliases' \
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