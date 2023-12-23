import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardText from 'react-bootstrap/CardText';
import CardImg from 'react-bootstrap/CardImg';
import CardBody from 'react-bootstrap/CardBody';
import CardTitle from 'react-bootstrap/CardTitle';
import CardSubtitle from 'react-bootstrap/CardSubtitle';
import Button from 'react-bootstrap/Button';

const Movie = ({peli,i}) => {

  return (
    <Col key={i} className='mt-3 mb-1 d-flex'>
    <Card>
        <CardImg width="100%" src={peli.imagen} alt="Card image cap"/>
        <CardBody>
            <CardTitle tag="h5">{peli.titulo}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{peli.titulo}</CardSubtitle>
            <CardText>{peli.sinopsis}</CardText>
            <CardText>Duración:{peli.duracion} - Género:{peli.genero} - Puntuación:{peli.puntuacion}</CardText>
            <Button>Button</Button>
        </CardBody>
    </Card>
</Col>

  );
}

export default Movie;