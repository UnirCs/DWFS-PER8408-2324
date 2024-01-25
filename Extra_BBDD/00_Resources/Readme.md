Instalación de MySQL
====================

## Parte I: Creación del contenedor de la base de datos MySQL

Abre una consola en tu equipo (Terminal o Power shell) y ejecuta el siguiente comando para descargar la imagen más reciente de MySQL:

        docker pull mysql

Una vez la imagen haya sido descargada, debemos crear un nuevo contenedor a partir de ella. Para ello, ejecuta el siguiente comando donde estaremos creando un contenedor que expondrá el puerto 3306 del propio contenedor en el puerto 3306 de nuestra máquina local. El nombre de la base de datos será ``bbdda-mysql`` y la contraseña del usuario ``root`` será ``mysql``. La versión de MySQL que se instalará será la última disponible en el momento de ejecutar el comando.

        docker run -p 3306:3306 --name bbdda-mysql -e MYSQL_ROOT_PASSWORD=mysql -d mysql:latest

## Parte II: Instalación del Schema ``Employees`` de MySQL

 Utilizaremos la [base de datos de empleados](https://dev.mysql.com/doc/employee/en/employees-installation.html) que ofrece MySQL como ejemplo y seguiremos las instrucciones de instalación para disponer de una base de datos para pruebas.

   - En nuestra máquina local descargaremos todo el contenido de la rama ``master`` de [este repositorio](https://github.com/datacharmer/test_db) que contiene la base de datos de ejemplo. Podemos hacerlo a través del botón verde ``Code <>`` y después ``Download ZIP``.
   - En nuestra máquina local, descomprimiremos el archivo de forma que tengamos un directorio llamado ``test_db-master``.
   - En nuestra máquina local, desde una consola moveremos el contenido de la carpeta ``test_db-master`` al contenedor. Para ello, ejecutaremos el siguiente comando (en este caso se está lanzando el comando desde el home de mi máquina) donde el containerId lo obtendremos de la pestaña ``Containers`` de Docker Desktop, bajo el nombre de nuestro contenedor (lo copiamos automáticamente, un ejemplo sería ``1ba486dddba4b943b783a7a8468d56eb5b686086614128d38271f8a1cd920a16``):

            docker cp Downloads/test_db-master <<containerId>>:/employees
     
   - Entramos a la consola del contenedor (seleccionando nuestro contenedor en ejecución) y haciendo click en "CLI":
     
     <img src="https://raw.githubusercontent.com/UnirCs/BBDD-PER8263-2324/master/Tema_1/00_Resources/imgs/1_docker%20modo%20cli.png">
     
   - Navegamos a la carpeta ``employees`` que creamos a través del comando anterior:
     
     <img src="https://raw.githubusercontent.com/UnirCs/BBDD-PER8263-2324/master/Tema_1/00_Resources/imgs/2_docker%20entrando%20a%20carpeta.png">
     
   - Ejecutamos el archivo ``employees.sql`` tal como se muestra:
     
     <img src="https://raw.githubusercontent.com/UnirCs/BBDD-PER8263-2324/master/Tema_1/00_Resources/imgs/3_creando%20schema.png">
     
   - En este punto la base de datos debería tener instalado el Schema de pruebas.

## Parte III: Conexión desde DataGrip

Conectaremos con la base de datos MySQL a través de DataGrip y ejecutaremos alguna consulta para comprobar que todo funciona correctamente.

   - En la parte superior izquierda de la aplicación, le damos al símbolo ``+`` para crear una nueva conexión. En este caso, MySQL.
     
     <img src="https://raw.githubusercontent.com/UnirCs/BBDD-PER8263-2324/master/Tema_1/00_Resources/imgs/4_Seleccion%20de%20db.png">
     
   - Introducimos los datos necesarios teniendo en cuenta los valores que usamos durante la creación del contenedor (usuario ``root`` y contraseña ``mysql``). El host siempre será localhost y el puerto es ``3306`` puesto que ese fue el que expusimos al exterior en nuestro contenedor.
     
     <img src="https://raw.githubusercontent.com/UnirCs/BBDD-PER8263-2324/master/Tema_1/00_Resources/imgs/5_Setup%20de%20db%20mysql.png">
     
   - Probamos la conexión. Debe aparecer una mensaje en verde indicando que hay conectividad.
     
     <img src="https://raw.githubusercontent.com/UnirCs/BBDD-PER8263-2324/master/Tema_1/00_Resources/imgs/6_Setup%20de%20db%20mysql%20ok.png">
     
   - En la base de datos habrá varios schemas por defecto instalados. Seleccionamos el schema ``employees`` que acabamos de instalar.
     
     <img src="https://raw.githubusercontent.com/UnirCs/BBDD-PER8263-2324/master/Tema_1/00_Resources/imgs/7_seleccion%20de%20schema.png">
     
   - Ejecutamos una consulta a modo de prueba para ver que la conexión efectivamente funciona.
  
     <img src="https://raw.githubusercontent.com/UnirCs/BBDD-PER8263-2324/master/Tema_1/00_Resources/imgs/9_ejecucion%20de%20sentencia%20sql.png">


Como curiosidad, puedes utilizar DataGrip para ver el modelo E/R de un schema.

   <img src="https://raw.githubusercontent.com/UnirCs/BBDD-PER8263-2324/master/Tema_1/00_Resources/imgs/8_vista%20de%20diagrama.png">
