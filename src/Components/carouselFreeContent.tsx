import "./CSS/carouselFreeContent.css";
import { Card, Container, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";


const CarouselFreeCont: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="mainbackground">
      <div className="mainText">
        Episodios gratis de HBO Max, sin necesidad de una suscripción
      </div>
      <Container className="carouselconteiner">
        <Carousel
          responsive={responsive}
          
          infinite={true}
          
        >
          <Card className="cards">
            <Card.Img className="cardimg2" variant="top" src="img/car2img1.jpg" />
            <Card.Body>
              <Card.Text className="cardsText2">VER GRATIS</Card.Text>
            </Card.Body>
          </Card>
          <Card className="cards">
            <Card.Img className="cardimg2" variant="top" src="img/car2img2.png" />
            <Card.Body>
              <Card.Text className="cardsText2">VER GRATIS</Card.Text>
            </Card.Body>
          </Card>

          <Card className="cards">
            <Card.Img className="cardimg2" variant="top" src="img/car2img3.png" />
            <Card.Body >
              <Card.Text className="cardsText2">VER GRATIS</Card.Text>
            </Card.Body>
          </Card>
        </Carousel>        
      </Container>

      <Button  className="bt2">Explora Mas</Button>
    </div>
  );
};

export default CarouselFreeCont;
