import "../styles/header.css"

const Header = (props)=>
{
    return(
        <nav className="navbar navbar-dark bg-dark justify-content-center">
            <ul className="nav-item">
                <a className="nav-link" href="#">Peliculas</a>
            </ul>
            <ul className="nav-item">
                <a className="nav-link" href="#">Entradas</a>
            </ul>
            <ul className="nav-item">
                <a className="nav-link" href="#">Información</a>
            </ul>
        </nav>
    )
}

export default Header;
