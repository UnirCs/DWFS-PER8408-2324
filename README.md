PER 8408- 2023/2024
================

Usaremos este repositorio para nuestro trabajo colaborativo a través del curso.
El objetivo es que afiancemos los conocimientos que vamos obteniendo en las clases.

Trabajaremos con Git. Puedes descargarlo, si no lo tienes instalado ya en tu máquina, [aquí](https://git-scm.com/downloads).

Si sigues las instrucciones correctamente, solo tendrás que realizar lo indicado en las partes I, II y III una vez. 
Las instrucciones de las partes IV y V las tendrás que llevar a cabo siempre que quieras añadir un nuevo ejercicio

### Parte I: Realizar un Fork
* Haz un ``Fork`` de este repositorio en tu propia cuenta (esto generará un nuevo repositorio en tu cuenta de GitHub). Este paso solo tienes que realizarlo una vez, a través de la propia interfaz de GitHub.
* Una vez tengas el repositorio copiado, deberás actualizarlo periódicamente para obtener los últimos cambios disponibles. Esto se hace [configurando un 'remote' para un fork](https://help.github.com/articles/configuring-a-remote-for-a-fork) y [sincronizando tu fork](https://help.github.com/articles/syncing-a-fork). En resumen, necesitas seguir los siguientes pasos (todas estas instrucciones deben ser ejecutadas dentro del directorio de trabajo de tu repositorio local):

### Parte II: Clonar el repositorio local
* Clona el repositorio de cuenta de GitHub en tu máquina local (la propia interfaz de GitHub te da la URL en el botón verde "<> Code")

       git clone <<url de tu repositorio>>

* Establece un 'remote', siendo este el repositorio original:

       git remote add upstream https://github.com/UnirCs/DWFS-PER8408-2324

### Parte III: Mantener el repositorio local actualizado
* Busca cualquier cambio en el remote (en el repositorio original):

       git fetch upstream

* Sitúate en la rama master de tu fork:

       git checkout master

* Fusiona los cambios del 'remote' (repositorio original) en tu rama master (repositorio local):

         git merge upstream/master

### Parte IV: Modificar el contenido del repositorio
En este punto, tienes el repositorio local actualizado. Haz las adiciones necesarias en el repositorio, de acuerdo con el ejercicio específico. Recuerda que debes entregar los ejercicios dentro de la carpeta del tema correspondiente, y además crear una carpeta con tu nombre, donde pondrás los archivos de tus ejercicios.

* Indexa tus cambios, confirma tus cambios en el repositorio local y súbelos a tu repositorio de GitHub:

       git add .
       git commit -m "Mensaje que describa los cambios realizados"
       git push origin master

### Parte V: Abrir una Pull Request
* En GitHub, haz una ``Pull Request`` o solicitd de cambios, para que pueda verificar tus ejercicios y aceptarlos en la rama master del repositorio original si todo está bien y no hay conflictos. El origen debe ser el repositorio de tu cuenta de GitHub y, el destino, este repositorio.
