import "./iconicBrand.css";
import { useState } from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";

const IconicBrands: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [iconaddress, seticonaddress] = useState("img/hboiconcarousel3");

 
  const handleSelect = (selectedIndex:any, e:any) => {
    setIndex(selectedIndex);
    console.log(selectedIndex);
    };
  const iconvalue = (e:any) => {

   
    if(e.target.value===1){
        seticonaddress("img/hboiconcarousel3.png");
    }
    else if(e.target.value===2){
        seticonaddress("img/hbo2iconcarousel3.png");
    }
    else if(e.target.value===3){
        seticonaddress("img/warnersconcarousel3.png");
    }
    else if(e.target.value===4){
        seticonaddress("img/DCiconcarousel3.png");
    }
    else if(e.target.value===5){
        seticonaddress("img/CNiconcarousel3.png");
    }

    console.log(e.target.value);
    console.log(iconaddress);
  } 

  return (

    <div className="mainbackground">
      <Container className="maincontainer">
        <h1 className="titlemainbrands">Explora nuestras Marcas Icónicas</h1>

        <div className="maincarddiv">
          {/* aqui va el carousel */}
          <div className="    ">
              <span aria-hidden="true" className="carousel-control-prev-icon" />
              {/* Aqui tengo que mandar el URL del Icono al cual se le hace click */}
              
              <img src={iconaddress} alt="" />

              <span aria-hidden="true" className="carousel-control-next-icon" />
            </div>
          <Carousel controls={true} activeIndex={index} onSelect={handleSelect} >           

            <Carousel.Item>
              <img
                className="iconbrandImageCarousel"
                src="img/carousel3.1.png"
                alt="First slide"
              />              
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="iconbrandImageCarousel"
                src="img/carousel3.2.png"
                alt="Second slide"
              />            
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="iconbrandImageCarousel"
                src="img/carousel3.3.png"
                alt="Third slide"
              />             
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="iconbrandImageCarousel"
                src="img/carousel3.4.png"
                alt="Third slide"
              />              
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="iconbrandImageCarousel"
                src="img/carousel3.5.png"
                alt="Third slide"
              />            
            </Carousel.Item>

          </Carousel>
        </div>

        <Container className="btncontainerbrands">
            <Row>
                <Col className="btncol1">
                <button id="btn1" onClick={iconvalue} value={1} className="btn1">
                  
                    </button>                
                </Col>
                <Col>
                <button id="btn2" onClick={iconvalue} value={2} className="btn2"></button>
                </Col>
                <Col>
                <button id="btn3" onClick={iconvalue} value={3} className="btn3"></button>
                </Col>
                <Col>
                <button id="btn4" onClick={iconvalue} value={4} className="btn4"></button>
                </Col>
                <Col>
                <button id="btn5" onClick={iconvalue} value={5} className="btn5"></button>
                </Col>
            </Row>            
        </Container>

      </Container>
    </div>
  );
};

export default IconicBrands;
