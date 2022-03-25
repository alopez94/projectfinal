import "./dispositivos.css";
import Container from 'react-bootstrap/Container'
import {Row, Col} from 'react-bootstrap'


const Dispositivos: React.FC = () => {
  return (
    <div className="maindispositivos">
      <h1 className="mainbanner">Una experiencia sencilla y completa</h1>
      <h4 className="mainmessage">Disponibilidad varía de acuerdo al plan.</h4>
      <img className="mainimgdispo" src="img/backgrounddispotivos.png" alt="" />

      <Container className="infotextcontainer">
        <Row>
          <Col className="coltext" >
          <span className="infotext">
            <br />
            <br />
          Personaliza tu experiencia creando hasta 5 perfiles distintos por cuenta
          </span>
          </Col >
          <Col className="coltext" >
          <span className="infotext">
          <br />
            <br />
          Descarga tus historias preferidas para disfrutar offline donde quieras
          </span></Col>
          <Col className="coltext" >
          <span className="infotext">
          <br />
            <br />
          Crea perfiles para los pequeños con contenido de acuerdo a su edad
          </span>
          </Col>

          <Col className="coltext" >
          <span className="infotext">
          <br />
            <br />
          Agrega tus títulos favoritos para verlos cuando quieras
          </span>
          </Col>
        </Row>
        
      </Container>

      <img className="mainimgdispo" src="img/backgrounddispotivos2.png" alt="" />
    </div>
  );
};

export default Dispositivos;
