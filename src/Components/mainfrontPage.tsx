import { Container, Button, Row } from "react-bootstrap";

const MainFrontPage: React.FC = () => {
  return (
        <div>

        <Container fluid >
            
            <Row >
           
                
                <video  className="mpbgrnvi" autoPlay loop muted>
                    <source src="HBOMAX.mp4" type="video/mp4" />
                </video>
                
            </Row>

            <Row>

                <div className="mptextsubs" style={{ marginTop: "-250px" }}>
                    <div className="mpbordertext">
                        <h3>COMIENZA A DISFRUTAR LAS MEJORES HISTORIAS</h3>
                        <h2>HECHAS PARA TI</h2>
                    </div>
                <div style={{ textAlign: "center" }}>
                    <Button variant="outline-light" className="mpbtn">
                    SUSCRIBETE AHORA
                    </Button>
                    <p>Ahorra hasta 33% con el plan anual*</p>
                </div>
                </div>

            </Row>

            <Row>
                
            <div>
               
            </div>

            </Row>
                
            </Container>
        </div>
  );
};

export default MainFrontPage;
