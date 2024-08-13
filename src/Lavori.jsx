import react from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Lavori() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100 h-100" src="holder.js/800x400?text=First slide&bg=f5f5f5" alt="First slide" />
        <Carousel.Caption>
          <h5>Gestionale Corriere</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=eee" alt="Second slide" />
        <Carousel.Caption>
          <h5>Fuitify Market</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=e5e5e5" alt="Third slide" />
        <Carousel.Caption>
          <h5>Polizia Municiaple</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Lavori;
