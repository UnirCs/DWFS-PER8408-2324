## 1. Ejercicio

### Parte I) Generar un alias
Genera un alias para el indice employees, que se llamará ``employees-alias``. A partir de ahora realizaremos las consultas siempre sobre este alias y no sobre el índice original.

```
curl --location 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/_aliases' \
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
Inserta un nuevo elemento en el índice. Guarda el ID de documento que has obtenido tras la creación del elemento.

```
curl --location 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_doc' \
--header 'Content-Type: application/json' \
--data '{
   "FirstName":"Otho",
   "LastName":"Feest",
   "Designation":"Dynamic Functionality Officer",
   "Salary":"{{randomSalary}}",
   "DateOfJoining":"{{randomDatePast}}",
   "Address":"813 Greenfelder Orchard",
   "Gender":"{{randomGender}}",
   "Age":{{randomAge}},
   "MaritalStatus":"{{randomMaritalStatus}}",
   "Interests":"{{randomInterests}}"
}'
```

```
{
    ...
    "_id": "CnkKno0B85oxy4WXiUGn"
    ...
}
```

### Parte III) Obtención simple de elementos
Utilizando el ID del paso anterior, obtén los datos de tu registro. Deberías obtener lo mismo que anteriormente escribiste.

```
curl --location 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_doc/CnkKno0B85oxy4WXiUGn'
```

```
{
    ...
    "_source": {
        "FirstName": "Otho",
        "LastName": "Feest",
        "Designation": "Dynamic Functionality Officer",
        "Salary": "9100",
        "DateOfJoining": "2016-08-05",
        "Address": "813 Greenfelder Orchard",
        "Gender": "Male",
        "Age": 42,
        "MaritalStatus": "Widowed",
        "Interests": "Gardening, Swimming, Knitting"
    }
}
```

### Parte IV) Eliminación de elementos
Elimina el elemento que has creado anteriormente.

```
curl --location --request DELETE 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_doc/CnkKno0B85oxy4WXiUGn'
```

### Parte V) Consultas
1) Obtener empleados cuyo puesto sea ``Software Engineer``.

```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search' \
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

2) Obtener empleados cuyo puesto NO sea ``Software Engineer``.

```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "query": {
        "bool": {
            "must_not": {
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

3) Obtener la primera página de empleados cuya ``designation`` sea ``Software Engineer`` asumiendo un tamaño de página de 35 elementos.

```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search' \
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

4) Obtener la tercera página de empleados cuya ``designation`` sea ``Software Engineer`` asumiendo un tamaño de página de 35 elementos.

```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search' \
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

5) Obtener los primeros 13 empleados cuyo salario sea mayor a 67.000 dólares.

```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "from": 0,
    "size": 13,
    "query": {
        "range": {
            "Salary": {
                "gte": 67000
            }
        }
    }
}'
```

6) Obtener <b> el número total </b> que hayan entrado en la empresa en el mes de Mayo del año 2003. No se pide una consulta específica, solo saber el número total de hits.

```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search?filter_path=hits.total.value' \
--header 'Content-Type: application/json' \
--data '{
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

7) Obtener empleados cuyo nombre sea ``NATALIE``.

```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search' \
--header 'Content-Type: application/json' \
--data '{
    "query": {
        "match": {
            "FirstName": "NATALIE"
        }
    }
}'
```

8) Obtener empleados cuya dirección sea o contenga ``Street``.

```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search' \
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

9) Obtener empleados cuya dirección sea o contenga ``wood``.

```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search' \
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

10) Obtener empleados interesados en ``Wrestling``.

```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search' \
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
}'
```

11) Obtener el número de hombres y mujeres interesad@s en ``Wrestling``.

```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search?filter_path=aggregations.Gender.buckets' \
--header 'Content-Type: application/json' \
--data '{
    "size": 0,
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
        "Gender": {
            "terms": {
                "field": "Gender"
            }
        }
    }
}'
```

12) En base a la consulta anterior, obtener la edad media de cada grupo (grupo hombres y grupo mujeres).
```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search?filter_path=aggregations.Gender.buckets' \
--header 'Content-Type: application/json' \
--data '{
    "size": 0,
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
        "Gender": {
            "terms": {
                "field": "Gender"
            },
            "aggs": {
                "age_avg": {
                    "avg": {
                        "field": "Age"
                    }
                }
            }
        }
    }
}'
```

13) Obtener el número de empleados en función de los siguientes tramos de salario: menor de 60.000 dólares (``tramo 1``), entre 60.000 dólares y 67.000 dólares (``tramo 2``) y superior a 67.000 dólares (``tramo 3``).

```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search?filter_path=aggregations' \
--header 'Content-Type: application/json' \
--data '{
    "size": 0,
    "aggs": {
        "salary_ranges": {
            "range": {
                "field": "Salary",
                "keyed": true,
                "ranges": [
                    {"key": "tramo 1", "to": 60000},
                    {"key": "tramo 2", "from": 60000, "to": 67000},
                    {"key": "tramo 3", "from": 67000}
                ]
            }
        }
    }
}'
```

14) En base a la consulta anterior, para cada tramo, hallar el número de empleados que están casados y no casados.

```
curl --location --request GET 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/employees-alias/_search?filter_path=aggregations' \
--header 'Content-Type: application/json' \
--data '{
    "size": 0,
    "aggs": {
        "salary_ranges": {
            "range": {
                "field": "Salary",
                "keyed": true,
                "ranges": [
                    {"key": "tramo 1", "to": 60000},
                    {"key": "tramo 2", "from": 60000, "to": 67000},
                    {"key": "tramo 3", "from": 67000}
                ]
            },
            "aggs": {
                "marital_status": {
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
1) Crea un nuevo índice de la misma forma que hiciste al principio, pero ahora llámalo ``employees-v2`` y mete en él todos los datos del fichero de prueba. Modifica el alias ``employees-alias`` que creaste antes para que apunte tanto al índice ``employees`` original como al nuevo ``employees-v2``. Puedes comprobar que lo has hecho correctamente ejecutando la operación "Obtener todos los alias" de la colección de Postman.

```
{
    "employees": {
        "aliases": {
            "employees-alias": {}
        }
    },
    "employees-v2": {
        "aliases": {
            "employees-alias": {}
        }
    }
}
```

2) Realiza alguna de las consultas anteriores. ¿Qué observas?

- Antes de crear el índice ``employees-v2``:
```
{
    "hits": {
        "total": {
            "value": 4264
        }
    }
}
```

- Después de crear el nuevo índice ``employees-v2``:
```
{
    "hits": {
        "total": {
            "value": 8528
        }
    }
}
```

- Se obtiene resultados que incluyen datos de ambos índices.

3) Elimina ``employees`` del conjunto de índices a los que hace referencia el alias.

```
curl --location 'https://69q006qsz:o5osknbjz5@unir-search-5505445610.us-west-2.bonsaisearch.net:443/_aliases' \
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

```
{
    "employees": {
        "aliases": {}
    },
    "employees-v2": {
        "aliases": {
            "employees-alias": {}
        }
    }
}
```