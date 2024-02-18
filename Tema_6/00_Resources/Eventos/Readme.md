# API para gestión de eventos

Imagina que estás trabajando para una empresa que se especializa en la gestión de eventos y reservas en línea para una cadena de espacios de coworking distribuidos en varias ciudades.

La empresa desea implementar una API REST para facilitar la reserva de espacios de trabajo, salas de reuniones, y la organización de eventos. La API debe permitir a los usuarios: 
- Buscar espacios disponibles basados en ubicación, fecha, y tipo de espacio (espacio de trabajo individual, sala de reuniones o auditorio para eventos)
- Hacer reservas, cancelar reservas, y modificar reservas existentes.
- Además, debe permitir a los administradores de la empresa agregar, modificar o eliminar los espacios disponibles en diferentes ubicaciones. También deben poder crear nuevos eventos. Un evento solo puede crearse correctamente si el tipo de espacio asociado es un auditorio.

