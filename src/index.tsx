import ReactDOM from "react-dom";
import UpperNavBar from "./Components/upperNavBar";
import CarouselFpp from "./Components/carouselFrontPage";
import MainFrontPage from "./Components/mainfrontPage";
import "bootstrap/dist/css/bootstrap.min.css";

import "../src/index.css";
import { Row } from "react-bootstrap";

const App = () => {
  return (
    <div>
      
        <UpperNavBar />
      
        <MainFrontPage />
      
        <CarouselFpp />
      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
