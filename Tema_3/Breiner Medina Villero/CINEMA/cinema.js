const N = 10; // Definir el tamaño de la matriz de butacas Número de filas y columnas
var N_SILLAS_SOLICITADAS; // Ajustar el número de asientos solicitados
let FILA2=null;
let TOTAL_SILLAS_VACIAS;
let VACIAS=[];  // Vector con sillas vacias en un fila dada
/*****************************************************************************************/
function SETUP()    /* Función para inicializar la matriz de butacas*/
{
    let ID = 1; // Iniciar el contador de IDs
    let SILLAS = []; // Matriz
    for (let f = 0; f < N; f++)
    {
        // Nueva fila
        let FILA = [];
        for (let c = 0; c < N; c++)
        {
            // Nuevo asiento
            FILA.push
            (
                {
                    id: ID++,
                    estado: false,
                }
            )
        }
        SILLAS.push(FILA);
    }
    return SILLAS;
}
/*************************************************************************/
let BUTACAS = SETUP(); // Inicializar la matriz
//console.log(BUTACAS);// Imprimir la matriz
/******************************************************************************************************************/
/* ********************* Halla el # de fila donde hay cupo para las sillas solicitadas y el # de sillas desocupadas */
function NFILA_NVACIAS(MATRIZ,N_SILLAS_SOLICITADAS)
{
    let SW=false;
    TOTAL_SILLAS_VACIAS=0;
    FILA2=null;
    for(let f=N-1;f>=0 && SW===false;f--)
    {
            TOTAL_SILLAS_VACIAS=0;
            VACIAS.length=0;
            for(let c=0;c<=N-1;c++)
            {
                if(MATRIZ[f][c].estado === false)
                {
                    TOTAL_SILLAS_VACIAS=TOTAL_SILLAS_VACIAS+1;
                    VACIAS.push
                    (
                        {
                            id:MATRIZ[f][c].id,
                            estado:MATRIZ[f][c].estado,
                        }
                    )
                }
            }
            if(TOTAL_SILLAS_VACIAS>=N_SILLAS_SOLICITADAS)
            {
                FILA2=f;
                SW=true;
            }
    }
}
/*************************************************************************/
function SUGGETS(MATRIZ,N_SILLAS_SOLICITADAS) /* Halla sillas vacias consecutivas en la fila dada*/
{
    let  VECTOR=[];
    let i=0;
    /*-------------------------------------------------------------------------*/  
        if(N_SILLAS_SOLICITADAS===1)
        {
            if (VACIAS.length>0)
            {
                for(let c=0;c<=VACIAS.length-1;c++)
                {
                    if(VACIAS[c].estado === false)
                    {
                        VECTOR[0]=VACIAS[c].id;
                        return VECTOR;
                    }
                }
            }
            else
            {
                VECTOR.length=0;    
            }
        } 
        /*-------------------------------------------------------------------------*/  
        if(N_SILLAS_SOLICITADAS<=0)
        {
            VECTOR.length=0;
            return VECTOR;
        }
        /*-------------------------------------------------------------------------*/  
        if(N_SILLAS_SOLICITADAS>0)
        {
            for (let c = 0; c <= VACIAS.length-2; c++)
            {
                if (VECTOR.length < N_SILLAS_SOLICITADAS)
                {
                    if (VACIAS[c].id + 1 === VACIAS[c + 1].id)
                    {
                        VECTOR[i] = VACIAS[c].id;
                        VECTOR[i + 1] = VACIAS[c + 1].id;
                        i = i + 1;
                    } else
                    {
                        VECTOR.length = 0;
                        i = 0;
                    }
                } else
                {
                    return VECTOR;
                }
            }
            /*-------------------------------------------------------------------------*/    
            if(VECTOR.length<N_SILLAS_SOLICITADAS)
            {
                VECTOR.length=0;
                return VECTOR;
            }
            else
            {
                return VECTOR;
            }
        }
}
/*************************************************************************/
function TODOS(N_SILLAS_SOLICITADAS)
{
    NFILA_NVACIAS(BUTACAS,N_SILLAS_SOLICITADAS);
    console.log(SUGGETS(BUTACAS,N_SILLAS_SOLICITADAS));
}
/*************************************************************************/
console.log("Sillas preseleccionadas: ");
TODOS(0);