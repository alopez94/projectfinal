import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./CSS/upperNavbar.css"

const UpperNavBar: React.FC = () => {
  return (
    <div className="mainbarstick">      
        <Navbar bg="dark" expand="xl">
          <Container>
            <Navbar.Brand className="justify-content-start" href="#home">
              <img
                alt=""
                src="logo-HBO_Max-White.png"
                width={"145px"}
                height={"27px"}
              />
            </Navbar.Brand>

            <Navbar.Collapse className="justify-content-end">
              <Button variant="outline-light" className="mpbtnsec">
                INGRESA
              </Button>
              <Button className="mpbtn">SUSCRIBETE AHORA</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     

    </div>
  );
};

export default UpperNavBar;
