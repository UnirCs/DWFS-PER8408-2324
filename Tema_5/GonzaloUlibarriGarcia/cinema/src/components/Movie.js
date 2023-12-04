
import "../styles/movie.css"

const Movie = (props)=>
{
    const { imagen, titulo, sinopsis, duracion, genero, puntuacion, entrada } = props;
    return(
    <div className="container">
        <div className="row justify-content-center align-items-center">
            <div className="col-md-7 mb-7">
                <div className="card">
                    <img src={imagen} className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title">{titulo}</h3>
                            <p className="card-text">Sinopsis: {sinopsis}</p>
                             <p className="card-text">Duración: {duracion} minutos</p>
                            <p className="card-text">Género: {genero}</p>
                            <p className="card-text">Puntuación: {puntuacion}</p>
                        </div>
                    <button type="button" className="btn btn-success" data-info={entrada}>Comprar entrada</button>
                </div>
            </div>

        </div>
    </div>
    )
}


export default Movie