import "../styles/footer.css"

const Footer = (props)=>
{
    return(
        <div className="footer bg-light text-center text-lg-start">
            <div className="text-center p-1">
                © 2020 Copyright:
                <a className="text-dark" href="https://github.com/gonzalouli">Gonzalo Ulibarri</a>
            </div>
            <div className="text-center p-1">
                Calle del UNIR 91, 34
            </div>
            <div className="text-center p-1">
                Teléfono: 669988556
            </div>
            <div className="text-center p-1" >
                Email: gonzalo.ulibarri178@comunidadunir.net
            </div>
        </div>
    )
}

export default Footer;
