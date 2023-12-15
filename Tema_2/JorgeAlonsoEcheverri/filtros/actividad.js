const basePath = '../../00_Resources/filtros/';
const ImageHandler = require(basePath + '/ImageHandler.js');

const POS_R = 0;
const POS_G = 1;
const POS_B = 2;

let path = basePath + 'input/tucan.jpg';
let handler = new ImageHandler(path);

/**
 * Definición objeto Pixel
 */
class Pixel {

    constructor(R, G, B) {
        this.R = R;
        this.G = G;
        this.B = B;
    }

}

/**
 * Función que calcula el promedio de un array dado
 * @param a
 * @returns {number}
 */
let average = (a) => a.reduce((prev, actual) => prev + actual, 0) / a.length;

/**
 * Ejemplo de construccion de una imagen
 */
function ejemplo() {

    let outputPath = basePath + 'output/ejemplo.jpg';
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
function redConverter(pixels = handler.getPixels()) {
    let outputPath = basePath + 'output/tucan_red.jpg';

    let redPixel = new Pixel(0, 0, 0);

    pixels.forEach(pixel => {
        pixel.forEach(colour => {
            colour[POS_G] = redPixel.G;
            colour[POS_B] = redPixel.B;
        })
    });

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de verdes.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y B a 0 para cada pixel.
 */
function greenConverter(pixels = handler.getPixels()) {
    let outputPath = basePath + 'output/tucan_green.jpg';

    let greenPixel = new Pixel(0, 0, 0);

    pixels.forEach(pixel => {
        pixel.forEach(colour => {
            colour[POS_R] = greenPixel.R;
            colour[POS_B] = greenPixel.B;
        })
    });

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen en escala de azules.
 *
 * Una forma de conseguirlo es simplemente poner los canales R y G a 0 para cada pixel.
 */
function blueConverter(pixels = handler.getPixels()) {
    let outputPath = basePath + 'output/tucan_blue.jpg';

    let bluePixel = new Pixel(0, 0, 0);

    pixels.forEach(pixel => {
        pixel.forEach(colour => {
            colour[POS_R] = bluePixel.R;
            colour[POS_G] = bluePixel.G;
        })
    });

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
function greyConverter(pixels = handler.getPixels()) {
    let outputPath = basePath + 'output/tucan_grey.jpg';

    pixels.forEach(pixel => {
        pixel.forEach(colour => {
            let averageValue = average(colour);
            let greyPixel = new Pixel(averageValue, averageValue, averageValue);

            colour[POS_R] = greyPixel.R;
            colour[POS_G] = greyPixel.G;
            colour[POS_B] = greyPixel.B;
        })
    });

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe transformar una imagen a su equivalente en Blanco y negro.
 *
 * Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
 * si esta es menor que 128 transforamr el pixel en negro [0, 0, 0] o, en caso contrario,
 * transformar el pixel en blanco [255, 255, 255].
 */
function blackAndWhiteConverter(pixels = handler.getPixels()) {
    let outputPath = basePath + 'output/tucan_black_and_white.jpg';

    pixels.forEach(pixel => {
        pixel.forEach(colour => {
            let newPixel = average(colour) < 128 ? new Pixel(0, 0, 0)
                : new Pixel(255, 255, 255);

            colour[POS_R] = newPixel.R;
            colour[POS_G] = newPixel.G;
            colour[POS_B] = newPixel.B;
        })
    });

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe reducir la imagen a la mitad.
 *
 * Una forma de conseguirlo es quitar los valores de las filas y columnas pares.
 * Otra forma es crear la imagen de nuevo unicamente con los valores de las filas y columnas pares.
 */
function scaleDown(pixels = handler.getPixels()) {
    let outputPath = basePath + 'output/tucan_scale_down.jpg';
    let scaleDownPixels = [];

    //For this case the for-loop is better than built-in forEach
    /*pixels.forEach((pixel, pixelIndex) => {
        let scaleDownColors = [];
        pixel.forEach((colour, colourIndex) => {
            if (pixelIndex % 2 === 0 && colourIndex % 2 === 0) {
                scaleDownColors.push(colour);
            }
        })
        if (pixelIndex % 2 === 0) {
            scaleDownPixels.push(scaleDownColors);
        }
    });*/

    for (let row = 0; row < pixels.length; row += 2) {
        let scaleDownColors = [];
        for (let col = 0; col < pixels.length; col += 2) {
            scaleDownColors.push(pixels[row][col]);
        }
        scaleDownPixels.push(scaleDownColors);
    }

    handler.savePixels(scaleDownPixels, outputPath, handler.getShape()[0] / 2, handler.getShape()[1] / 2);
}

/**
 * Esta función debe reducir el brillo de la imagen según el parámetro qye recibe la función.
 *
 * Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
 */
function dimBrightness(dimFactor, pixels = handler.getPixels()) {
    let outputPath = basePath + 'output/tucan_dimed.jpg';

    pixels.forEach(pixel => {
        pixel.forEach(colour => {
            let dimPixel = new Pixel(colour[0] / dimFactor, colour[1] / dimFactor, colour[2] / dimFactor);

            colour[POS_R] = dimPixel.R;
            colour[POS_G] = dimPixel.G;
            colour[POS_B] = dimPixel.B;
        })
    });

    handler.savePixels(pixels, outputPath);
}

/**
 * Esta función debe invertir el color de la imagen.
 *
 * Una forma de conseguirlo es asignar a cada valor RGB de cada píxel el valor 255 - valorRGB.
 *
 * Por ejemplo, si un pixel tiene valor [10, 20, 50] su nuevo valor sera [255 - 10, 255 - 20, 255 - 50] => [245, 235, 205]
 */
function invertColors(pixels = handler.getPixels()) {
    let outputPath = basePath + 'output/tucan_inverse.jpg';

    pixels.forEach(pixel => {
        pixel.forEach(colour => {
            let invertPixel = new Pixel(255 - colour[0], 255 - colour[1], 255 - colour[2]);

            colour[POS_R] = invertPixel.R;
            colour[POS_G] = invertPixel.G;
            colour[POS_B] = invertPixel.B;
        })
    });

    handler.savePixels(pixels, outputPath);
}

/**
 * merge - Junta dos imagenes con cierto factor de fusion
 * Una forma de conseguirlo es sumar el valor de cada canal de cada píxel de cada imagen, habiéndolo multiplicado antes por el factor de fusión correspondiente.
 * @param alphaFirst - Factor de fusion para la primera imagen
 * @param alphaSecond - Factor de fusion para la segunda imagen
 */
function merge(alphaFirst, alphaSecond) {
    let catHandler = new ImageHandler(basePath + 'input/cat.jpg');
    let dogHandler = new ImageHandler(basePath + 'input/dog.jpg');
    let outputPath = basePath + 'output/merged.jpg';

    let catPixels = catHandler.getPixels();
    let dogPixels = dogHandler.getPixels();

    let pixels = [];

    catPixels.forEach((pixel, pixelIndex) => {
        let fusion = [];
        pixel.forEach((colour, colourIndex) => {
            let dogColorR = dogPixels[pixelIndex][colourIndex][POS_R] * alphaFirst;
            let dogColorG = dogPixels[pixelIndex][colourIndex][POS_G] * alphaFirst;
            let dogColorB = dogPixels[pixelIndex][colourIndex][POS_B] * alphaFirst;

            let catColorR = colour[POS_R] * alphaSecond;
            let catColorG = colour[POS_G] * alphaSecond;
            let catColorB = colour[POS_B] * alphaSecond;

            let fusionPixel = new Pixel(catColorR + dogColorR, catColorG + dogColorG, catColorB + dogColorB);

            fusion.push([fusionPixel.R, fusionPixel.G, fusionPixel.B]);
        })
        pixels.push(fusion);
    });

    dogHandler.savePixels(pixels, outputPath);
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
let optionN = 6;

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
