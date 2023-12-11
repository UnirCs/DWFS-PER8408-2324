import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
  return (
//     <Container fluid>
//     <header className="container-fluid m-0 d-flex altura bg-info rounded">
//         <div className = "row mx-auto">
//             <div className = "col d-flex m-0 align-self-center">
//                 <h1>CINEMA - UNIR</h1>
//             </div>    
//         </div>
//     </header>
// </Container>
<Container fluid className="vh-100 d-flex flex-column bg-info image"> 
<Row className="h-100">
<Row>
        <Col className='align-items-center d-flex' md={{ span: 6, offset: 3 }}>
           <div className='bg-info div-header'> <h1 className='white'>Bienvenido a cine UNIR</h1></div>
        </Col>
        <Col className='align-items-center d-flex' md={{ span: 6, offset: 3 }}>
           <div className='triangulo-2'></div>
        </Col>
      </Row>
    </Row>
    </Container>
  
  );
}

export default Header;
