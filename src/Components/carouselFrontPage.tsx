import { Card } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carousel1JSON from  "../carouselimg1.json"


let imgcar1s = carousel1JSON;

const CarouselFp: React.FC = () => {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
     
     
    return (
    
    <div style={{backgroundColor: "rgb(32, 4, 68)", paddingTop: "150px", paddingBottom: "75px"}}>
        
        <h1 style={{textAlign: "center", color: "white"}}>Alerta de spoiler: HBO Max tiene novedades para ti</h1>
        <Carousel 
        responsive={responsive}
        transitionDuration={0.1}
        infinite={true}
        customTransition="all .5"
        autoPlaySpeed={700}
        
        >
            
        {imgcar1s.map(imgcar1 => 
            
            <div>
                
                 <Card className="cards" style={{borderColor: "none"}}>
                <Card.Img variant="top" src={imgcar1.imgUrl} />
                <Card.Body>
                    <Card.Text className="cardsText">
                        {imgcar1.date}
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
            )}
                
      </Carousel>;
    
         
    </div>
    )};
    
    export default CarouselFp;
    