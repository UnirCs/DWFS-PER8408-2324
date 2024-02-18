Instalación de SGBD Relacionales con Docker y consultas con SQL
==============================================================

Trabajaremos con MySQL (versión latest).

## 1. Requisitos previos

1. Debes [descargar Docker Desktop](https://www.docker.com/products/docker-desktop/) que incluye de por sí la instalación de Docker Engine (en el caso de Linux hay que descargar el engine por separado).
2. Debes disponer de algún programa que permita visualizar bases de datos. Durante el curso utilizaremos [JetBrains DataGrip](https://www.jetbrains.com/es-es/datagrip/), uno de los mejores IDEs profesionales para trabajar con bases de datos.

## 2. Instalación de MySQL

Sigue las instrucciones que encontrarás [aquí](https://github.com/UnirCs/DWFS-PER8408-2324/blob/master/Extra_BBDD/00_Resources/Readme.md).

## 3. Consultas sobre MySQL

Realiza [este tutorial de W3Schools](https://www.w3schools.com/sql/) para aprender los conceptos básicos del lenguaje SQL.

Utilizando DataGrip, ejecuta las siguientes consultas SQL en la base de datos ``employees`` de MySQL:
1. Obtener el número de hombres y mujeres de la base de datos. Ordenar de forma descendente.
2. Mostrar el nombre, apellido y salario de la persona mejor pagada de un departamento concreto (parámetro variable).
3. Mostrar el nombre, apellido y salario de la segunda persona mejor pagada de un departamento concreto (parámetro variable).
4. Mostrar el número de empleados contratados en un mes concreto (parámetro variable).

## 4. ¿Te has quedado con ganas de más?

En la segunda actividad de la asignatura haremos uso de una base de datos relacional para almacenar información.

Piensa en la aplicación que has desarrollado en la actividad individual. ¿Qué tablas y relaciones entre tablas necesitarías? Párate a pensarlo y diseña el modelo entidad relación o el modelo lógico que utilizarías. Como pista, necesitarás al menos dos tablas. Una para alojar la información del elemento característico de tu aplicación (libros, películas...) y otra para alojar la información de las operaciones que se realizan sobre dichos elementos (alquileres, compras...). ¿Qué atributos crees que debería tener cada tabla? ¿De qué forma se relacionarían?

Ánimo!
