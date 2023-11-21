const ImageHandler = require('./ImageHandler.js')
let IMAGEN='dog';
let path = 'input/'+ IMAGEN+'.jpg';
let handler = new ImageHandler(path);
/***************************************************************************/
function ejemplo()  //Ejemplo de construccion de una imagen
{
    let outputPath = 'output/ejemplo.jpg';
    let pixeles = [];
    let filas = 2;
    let columnas = 2;
    for (let i = 0; i < filas; i++)
    {
        let nuevaFila = [];
        console.log("Fila: " + i);
        for (let j = 0; j < columnas; j++)
        {
            console.log("Columna:" + j)
            let pixel = [0, 0, 0]; // R G B -> Red Green Blue -> Rojo Verde Azul
            if ((i + j) % 2 === 0) // Si la suma de la fila y la columna es par....
            { 
                pixel = [255, 255, 255];
            }
            console.log("Vamos a añadir el pixel " + pixel + " a la fila " + i + " columna " + j)
            nuevaFila.push(pixel);
        }
        console.log(nuevaFila)
        pixeles.push(nuevaFila);
    }
    console.log(pixeles.length);
    console.log(pixeles);
    handler.savePixels(pixeles, outputPath, filas, columnas);
}
/***************************************************************************/
function redConverter() //Esta función debe transformar una imagen en escala de rojos.
{                       //Una forma de conseguirlo es simplemente poner los canales G y B a 0 para cada pixel.
    let outputPath = 'output/'+IMAGEN+'_red.jpg';
    let pixels = handler.getPixels();
        /*------------------------------------------------------ */
            for (let F = 0; F < pixels.length; F++)
            {
                for (let C = 0; C < pixels[F].length; C++)
                {
                    pixels[F][C][1] = 0;
                    pixels[F][C][2] = 0;
                }
            }
        /*------------------------------------------------------ */
    handler.savePixels(pixels, outputPath);
}
/***************************************************************************/
function greenConverter()   //Esta función debe transformar una imagen en escala de verdes.
{                           //Una forma de conseguirlo es simplemente poner los canales R y B a 0 para cada pixel.
    let outputPath = 'output/'+IMAGEN+'_green.jpg';
    let pixels = handler.getPixels();
        /*------------------------------------------------------ */
            for (let F = 0; F < pixels.length; F++)
            {
                for (let C = 0; C < pixels[F].length; C++)
                {
                    pixels[F][C][0] = 0;
                    pixels[F][C][2] = 0;
                }
            }
        /*------------------------------------------------------ */
    handler.savePixels(pixels, outputPath);
}
/***************************************************************************/
function blueConverter()    //Esta función debe transformar una imagen en escala de azules.
{                           //Una forma de conseguirlo es simplemente poner los canales R y G a 0 para cada pixel.
    let outputPath = 'output/'+IMAGEN+'_blue.jpg';
    let pixels = handler.getPixels();
        /*------------------------------------------------------ */
            for (let F = 0; F < pixels.length; F++)
            {
                for (let C = 0; C < pixels[F].length; C++)
                {
                    pixels[F][C][0] = 0;
                    pixels[F][C][1] = 0;
                }
            }
        /*------------------------------------------------------ */
    handler.savePixels(pixels, outputPath);
}
/***************************************************************************/
function greyConverter()    //Esta función debe transformar una imagen a su equivalente en escala de grises.
{                           //Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y asignarle a cada canal de RGB esa media.
                            //Es decir, si un pixel tiene el valor [100, 120, 200], su media es 140 y por lo tanto
                            //lo debemos transformar en el pixel [140, 140, 140].
    let outputPath = 'output/'+IMAGEN+'_grey.jpg';
    let pixels = handler.getPixels();
        /*------------------------------------------------------ */
            for (let F = 0; F < pixels.length; F++)
            {
                for (let C = 0; C < pixels[F].length; C++)
                {
                    let MEDIA=(pixels[F][C][0]+pixels[F][C][1]+pixels[F][C][2])/3;
                    MEDIA=Math.trunc(MEDIA);
                    pixels[F][C][0] = MEDIA;
                    pixels[F][C][1] = MEDIA;
                    pixels[F][C][2] = MEDIA;
                }
            }
        /*------------------------------------------------------ */
    handler.savePixels(pixels, outputPath);
}
/***************************************************************************/
function blackAndWhiteConverter()   //Esta función debe transformar una imagen a su equivalente en Blanco y negro.
{                                   //Una forma de conseguirlo es calcular la media de los valores RGB de cada pixel y
                                    //si esta es menor que 128 transforamr el pixel en negro [0, 0, 0] o, en caso contrario,
                                    //transformar el pixel en blanco [255, 255, 255].
    let outputPath = 'output/'+IMAGEN+'_black_and_white.jpg';
    let pixels = handler.getPixels();
        /*------------------------------------------------------ */
            for (let F = 0; F < pixels.length; F++)
            {
                for (let C = 0; C < pixels[F].length; C++)
                {
                    let MEDIA=(pixels[F][C][0]+pixels[F][C][1]+pixels[F][C][2])/3;
                    MEDIA=Math.trunc(MEDIA);
                        if(MEDIA<128)
                        {
                            pixels[F][C][0] = 0;
                            pixels[F][C][1] = 0;
                            pixels[F][C][2] = 0;
                        }
                        else
                        {
                            pixels[F][C][0] = 255;
                            pixels[F][C][1] = 255;
                            pixels[F][C][2] = 255;
                        }
                }
            }
        /*------------------------------------------------------ */
    handler.savePixels(pixels, outputPath);
}
/***************************************************************************/
function scaleDown()    //Esta función debe reducir la imagen a la mitad.
{                       //Una forma de conseguirlo es quitar los valores de las filas y columnas pares.
                        //Otra forma es crear la imagen de nuevo unicamente con los valores de las filas y columnas pares.
    let outputPath = 'output/'+IMAGEN+'_scale_down.jpg';
    let pixels = handler.getPixels();
    /*------------------------------------------------------ */
    let REDUCIDA=[];
    for (let F = 0; F < pixels.length; F=F+2)
    {
        let FILA=[];
        for (let C = 0; C < pixels[F].length; C=C+2)
        {
            FILA.push(pixels[F][C]);
        }
        REDUCIDA.push(FILA);
    }
    /*------------------------------------------------------ */
    handler.savePixels(REDUCIDA, outputPath, handler.getShape()[0] / 2, handler.getShape()[1] / 2);
}
/***************************************************************************/
function dimBrightness(dimFactor)   //Esta función debe reducir el brillo de la imagen según el parámetro que recibe la función.
{                                   //Una forma de conseguirlo es dividir el valor de cada pixel por el parámetro dimFactor.
    let outputPath = 'output/'+IMAGEN+'_dimed.jpg';
    let pixels = handler.getPixels();
        /*------------------------------------------------------ */
            for (let F = 0; F < pixels.length; F++)
            {
                for (let C = 0; C < pixels[F].length; C++)
                {
                    pixels[F][C][0] = Math.trunc(pixels[F][C][0]/dimFactor);
                    pixels[F][C][1] = Math.trunc(pixels[F][C][1]/dimFactor);
                    pixels[F][C][2] = Math.trunc(pixels[F][C][2]/dimFactor);
                }
            }
        /*------------------------------------------------------ */
    handler.savePixels(pixels, outputPath);
}
/***************************************************************************/
function invertColors() //Esta función debe invertir el color de la imagen.
{                       //Una forma de conseguirlo es asignar a cada valor RGB de cada píxel el valor 255 - valorRGB.
                        //Por ejemplo, si un pixel tiene valor [10, 20, 50] su nuevo valor sera [255 - 10, 255 - 20, 255 - 50] => [245, 235, 205]
    let outputPath = 'output/'+IMAGEN+'_inverse.jpg';
    let pixels = handler.getPixels();
    /*------------------------------------------------------ */
        for (let F = 0; F < pixels.length; F++)
        {
            let FILA = pixels[F];
            for (let C = 0; C < pixels[F].length; C++)
            {
                pixels[F][C][0] = 255-pixels[F][C][0];
                pixels[F][C][1] = 255-pixels[F][C][1];
                pixels[F][C][2] = 255-pixels[F][C][2];
            }
        }
    /*------------------------------------------------------ */
    handler.savePixels(pixels, outputPath);
}
/***************************************************************************/
function merge(alphaFirst, alphaSecond) //merge - Junta dos imagenes con cierto factor de fusion
{                                       //Una forma de conseguirlo es sumar el valor de cada canal de cada píxel de cada imagen, 
                                        //habiéndolo multiplicado antes por el factor de fusión correspondiente.
                                        //@param alphaFirst - Factor de fusion para la primera imagen
                                        //@param alphaSecond - Factor de fusion para la segunda imagen
    let catHandler = new ImageHandler('input/cat.jpg');
    let dogHandler = new ImageHandler('input/dog.jpg');
    let outputPath = 'output/'+IMAGEN+'_merged.jpg';

    let catPixels = catHandler.getPixels();
    let dogPixels = dogHandler.getPixels();

    let pixels = [];
    /*------------------------------------------------------ */
        for (let F = 0; F < dogPixels.length; F++)
        {
            let FILA=[];
            for (let C = 0; C < dogPixels[F].length; C++)
            {
                let ROJO=Math.trunc(catPixels[F][C][0]*alphaFirst + dogPixels[F][C][0]*alphaSecond);
                let VERDE=Math.trunc(catPixels[F][C][1]*alphaFirst+ dogPixels[F][C][1]*alphaSecond);
                let AZUL=Math.trunc(catPixels[F][C][2]*alphaFirst + dogPixels[F][C][2]*alphaSecond);
                let UNION=[ROJO,VERDE,AZUL];
                FILA.push(UNION);
            }
            pixels.push(FILA);
        }
    /*------------------------------------------------------ */
    dogHandler.savePixels(pixels, outputPath);
}
/***************************************************************************/
/* Programa de prueba
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
/***************************************************************************/
let optionN = 1;
switch (optionN)
{
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
