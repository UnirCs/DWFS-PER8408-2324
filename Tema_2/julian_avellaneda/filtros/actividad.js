const ImageHandler = require('./ImageHandler.js')


let path = 'input/dog.jpg';
let handler = new ImageHandler(path);


/**
 * Ejemplo de construccion de una imagen
 */
function ejemplo() {

    let outputPath = 'output/ejemplo.jpg';
    let pixeles = [];
    let filas = 2;
    let columnas = 2;
    for (let i = 0; i < filas; i++) {
        let nuevaFila = [];
        console.log("Fila: " + i);
        for (let j = 0; j < columnas; j++) {
            console.log("Columna:" + j)
            let pixel = [0, 0, 0]; // R G B -> Red Green Blue -> Rojo Verde Azul
            if ((i + j) % 2 === 0) { // Si la suma de la fila y la columna es par....
                pixel = [255, 255, 255];
            }
            console.log("Vamos a añadir el pixel " + pixel + " a la fila " + i + " columna " + j)
            nuevaFila.push(pixel);
        }
        console.log(nuevaFila)
        pixeles.push(nuevaFila);
    }
    console.log(pixeles);
    handler.savePixels(pixeles, outputPath, filas, columnas);
}

/**
 * Esta función debe transformar una imagen en escala de rojos.
 *
 * Una forma de conseguirlo es simplemente poner los canales G y B a 0 para cada pixel.
 */
function redConverter() {
    let outputPath = 'output/dog_red.jpg';
    let pixels = handler.getPixels();

    //Aqui tu codigo
    pixels.forEach( (row) => {
        row.forEach( pixel => {
            transformPixel(pixel, {red: pixel[0], green: 0, blue: 0})
        })
    })

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de verdes.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y B a 0 para cada pixel.
 */
function greenConverter() {
    let outputPath = 'output/dog_green.jpg';
    let pixels = handler.getPixels();

    //Aqui tu codigo
    pixels.forEach( (row) => {
        row.forEach( pixel => {
            transformPixel(pixel, {red: 0, green: pixel[1], blue: 0})
        })
    })

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de azules.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y G a 0 para cada pixel.
 */
function blueConverter() {
    let outputPath = 'output/dog_blue.jpg';
    let pixels = handler.getPixels();

    //Aqui tu codigo
    pixels.forEach( (row) => {
        row.forEach( pixel => {
            transformPixel(pixel, {red: 0, green: 0, blue: pixel[2]})
        })
    })

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en escala de grises.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * asignarle a cada canal de RGB esa media.
 *
 * Es decir, si un pixel tiene el valor [100, 120, 200], su media es 140 y por lo tanto
 * lo debemos transformar en el pixel [140, 140, 140].
 */
function greyConverter() {
    let outputPath = 'output/dog_grey.jpg';
    let pixels = handler.getPixels();

    //Aqui tu codigo
    pixels.forEach( (row) => {
        row.forEach( pixel => {
            const average = pixel.reduce((sum, current) => sum + current) / pixel.length;
            transformPixel(pixel, {red: average, green: average, blue: average})
        })
    })

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en Blanco y negro.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * si esta es menor que 128 transforamr el pixel en negro [0, 0, 0] o, en caso contrario,
 * transformar el pixel en blanco [255, 255, 255].
 */
function blackAndWhiteConverter() {
    let outputPath = 'output/dog_black_and_white.jpg';
    let pixels = handler.getPixels();

    //Aqui tu codigo
    pixels.forEach( (row) => {
        row.forEach( pixel => {
            const average = pixel.reduce((sum, current) => sum + current) /  pixel.length;
            const colour = average < 128 ? 0 : 255;
            transformPixel(pixel, {red: colour, green: colour, blue: colour})
        })
    })

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe reducir la imagen a la mitad.
 *
 * Una forma de conseguirlo es quitar los valores de las filas y columnas pares.
 * Otra forma es crear la imagen de nuevo unicamente con los valores de las filas y columnas pares.
 */
function scaleDown() {
    let outputPath = 'output/dog_scale_down.jpg';
    let pixels = handler.getPixels();

    //Aqui tu codigo
    // Filtra solo columnas impares
    // En las columnas impares filtra las filas impares
    // Esto deja solo los valores de filas y columnas impares, o sea remueve los pares
    pixels = pixels.filter((current, index) => isOdd(index))
        .map( rows => rows.filter( (current, index) => isOdd(index)));


    handler.savePixels(pixels, outputPath, handler.getShape()[0] / 2, handler.getShape()[1] / 2);
}

const isOdd = (value) => value % 2 !== 0;

/**
 * Esta función debe reducir el brillo de la imagen según el parámetro qye recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor) {
    let outputPath = 'output/dog_dimed.jpg';
    let pixels = handler.getPixels();

    //Aqui tu codigo
    pixels.forEach( (row) => {
        row.forEach( pixel => {
            transformPixel(pixel, {red: pixel[0] / dimFactor, green: pixel[1] / dimFactor, blue: pixel[2] / dimFactor})
        })
    })

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe invertir el color de la imagen.
 *
 * Una forma de conseguirlo es asignar a cada valor RGB de cada píxel el valor 255 - valorRGB.
 *
 * Por ejemplo, si un pixel tiene valor [10, 20, 50] su nuevo valor sera [255 - 10, 255 - 20, 255 - 50] => [245, 235, 205]
 */
function invertColors() {
    let outputPath = 'output/dog_inverse.jpg';
    let pixels = handler.getPixels();

    //Aqui tu codigo
    pixels.forEach( (row) => {
        row.forEach( pixel => {
            transformPixel(pixel, {red: 255 - pixel[0], green: 255 - pixel[1], blue: 255 - pixel[2]})
        })
    })

    handler.savePixels(pixels, outputPath);
}

/**
 * merge - Junta dos imagenes con cierto factor de fusion
 * Una forma de conseguirlo es sumar el valor de cada canal de cada píxel de cada imagen, habiéndolo multiplicado antes por el factor de fusión correspondiente.
 * @param alphaFirst - Factor de fusion para la primera imagen
 * @param alphaSecond - Factor de fusion para la segunda imagen
 */
function merge(alphaFirst, alphaSecond) {
    let catHandler = new ImageHandler('input/tucan.jpg');
    let dogHandler = new ImageHandler('input/cat.jpg');
    let outputPath = 'output/merged.jpg';

    let catPixels = catHandler.getPixels();
    let dogPixels = dogHandler.getPixels();

    let pixels = [];

    //Aqui tu codigo
    catPixels.forEach( (row, columnIndex) => {
        row.forEach( (pixel, rowIndex) => {
            transformPixel(pixel, {red: pixel[0] * alphaFirst, green: pixel[0] * alphaFirst, blue: pixel[0] * alphaFirst})
            transformPixel(getPixel(dogPixels, columnIndex, rowIndex), {})
        })
    })

    dogHandler.savePixels(pixels, outputPath);
}

const getPixel = (pixels, column, row) => {
    return pixels[column][row];
}

const transformPixel = (pixel, {red, green, blue}) => {
    pixel[0] = red;
    pixel[1] = green;
    pixel[2] = blue;
}

/**
 * Programa de prueba
 * NO DEBES MODIFICAR ESTAS LÍNEAS DE CÓDIGO
 *
 * Ejecuta el archivo actividad.js tal como se indica en el archivo Readme.md
 * En la carpeta output/ apareceran los resultados para cada uno de los casos
 *
 *     Ejecutar ejemplo: 0
 *     Conversor a rojos: 1
 *     Conversor a verdes: 2
 *     Conversor a azules: 3
 *     Conversor a grises: 4
 *     Conversor blanco y negro: 5
 *     Redimensionar: 6
 *     Reducir brillo: 7
 *     Negativo: 8
 *     Fusion de imagenes: 9
 */
let optionN = 8;

switch (optionN) {
    case 1: redConverter(); break;
    case 2: greenConverter(); break;
    case 3: blueConverter(); break;
    case 4: greyConverter(); break;
    case 5: blackAndWhiteConverter(); break;
    case 6: scaleDown(); break;
    case 7: dimBrightness(2); break;
    case 8: invertColors(); break;
    case 9: merge(0.3, 0.7); break;
    default: ejemplo();
}