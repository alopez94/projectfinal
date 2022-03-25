import ReactDOM from "react-dom";
import UpperNavBar from "./Components/upperNavBar";
import CarouselFpp from "./Components/carouselFrontPage";
import MainFrontPage from "./Components/mainfrontPage";
import CarouselFreeCont from "./Components/carouselFreeContent";
import Dispositivos from "./Components/dispositivos/dispositivos";
import IconicBrands from "./Components/iconicbrands/IconicBrand"
import "bootstrap/dist/css/bootstrap.min.css";

import "../src/index.css";
import { Row } from "react-bootstrap";

const App = () => {
  return (
    <div>
      
        <UpperNavBar />
      
        <MainFrontPage />
      
        <CarouselFpp />
        <CarouselFreeCont />
        <Dispositivos />
        <IconicBrands />
      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
