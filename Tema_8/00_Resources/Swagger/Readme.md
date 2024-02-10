# Documentación de APIs con Swagger

En este ejercicio vamos a documentar la API de la calculadora que hemos implementado en el ejercicio 1.

Si recordamos, las operaciones que la API soporta son las siguientes:
- Sumar N elementos (2+2, 2+2+2).
- Restar N elementos (2-2, 2-2-2).
- Multiplicar 2 elementos (2x2).
- Dividir 2 elementos (2/2).
- Raiz N-ésima de un número (Raíz cuadrada de 4, Raíz cúbica de 8).
- Potencia N-ésima de un número (2^2, 3^3, 4^4).
- Detalle de operacion

Lo que haremos a continuación es añadir una serie de dependencias a nuestro proyecto para que se genere la documentación de la API de forma automática.
El proceso de generación de la documentación se realizará en tiempo de compilación, por lo que no será necesario ejecutar la aplicación para que se genere la documentación.

## Paso 1: Añadir dependencias

Para generar la documentación de la API de forma automática, vamos a añadir las siguientes dependencias a nuestro proyecto:

```xml
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.3.0</version>
</dependency>
```

Recuerda obtener la versión más reciente de la dependencia en [Maven Repository](https://mvnrepository.com/artifact/org.springdoc/springdoc-openapi-starter-webmvc-ui).


## Paso 2: Añadir anotaciones

Para que Swagger pueda generar la documentación de la API, es necesario añadir una serie de anotaciones a nuestro código. Aquí tienes un ejemplo de cómo añadir anotaciones a un método:

```java
    @DeleteMapping("/products/{productId}")
    @Operation(
            operationId = "Eliminar un producto",
            description = "Operacion de escritura",
            summary = "Se elimina un producto a partir de su identificador.")
    @ApiResponse(
            responseCode = "200",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)))
    @ApiResponse(
            responseCode = "404",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Void.class)),
            description = "No se ha encontrado el producto con el identificador indicado.")
      
    public ResponseEntity<Void> deleteProduct(@PathVariable String productId) {
    ...
    }
```

En el ejemplo anterior, se ha añadido la anotación `@Operation` para indicar que el método `deleteProduct` es una operación de escritura. Además, se ha añadido la anotación `@ApiResponse` para indicar que la operación puede devolver un código de respuesta 200 o 404.
Junto a cada código de respuesta, se ha añadido la anotación `@Content` para indicar el tipo de contenido que se devuelve en la respuesta. En este caso, se devuelve un objeto de tipo `Void`.

Esto puede realizarse también sobre las entradas de la operación, para indicar el tipo de contenido que se espera recibir en la petición. Por ejemplo:

```java
    @PostMapping("/products")
    @Operation(
            operationId = "Insertar un producto",
            description = "Operacion de escritura",
            summary = "Se crea un producto a partir de sus datos.",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "Datos del producto a crear.",
                    required = true,
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = CreateProductRequest.class))))
    @ApiResponse(
            responseCode = "201",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = Product.class)))
            
    public ResponseEntity<Product> getProduct(@RequestBody CreateProductRequest request) {
    ...
    }
```

En el ejemplo anterior, se ha añadido la anotación `@io.swagger.v3.oas.annotations.parameters.RequestBody` para indicar que la operación espera recibir un objeto de tipo `CreateProductRequest` en la petición. Además, se ha añadido la anotación `@ApiResponse` para indicar que la operación puede devolver un código de respuesta 201.
La razón de que especifiquemos el nombre de paquete al completo en la anotación `@io.swagger.v3.oas.annotations.parameters.RequestBody` es que existe otra anotación con el mismo nombre en el paquete ` org.springframework.web.bind.annotation`, y si no especificamos el nombre de paquete al completo, el compilador no sabrá cuál de las dos anotaciones estamos usando.

## Paso 3: Generar la documentación

Para generar la documentación de la API no es necesario ejecutar la aplicación. Basta con compilarla haciendo uso de Maven.


## Paso 4: Visualizar la documentación

Una vez que se ha generado la documentación, podemos visualizarla en la siguiente URL:

```
http://localhost:8088/swagger-ui/index.html
```

Recuerda que el puerto puede ser diferente en tu caso, dependiendo de la configuración de tu aplicación.

Puedes tomar como referencia el [código de apoyo del microservicio de productos](https://github.com/UnirCs/back-end-inventory-products/blob/master/src/main/java/com/unir/products/controller/ProductsController.java).
Para más información, puedes consultar la [documentación oficial de Swagger](https://swagger.io/docs/).

## Entrega

Modifica el código de tu microservicio de la calculadora para que se genere la documentación de la API de forma automática, incluyendo las anotaciones necesarias en el código.
