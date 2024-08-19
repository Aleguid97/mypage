import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa lo stile di Bootstrap

function Projects() {
  useEffect(() => {
    // Usa un timeout per garantire che lo scroll avvenga dopo che la pagina è completamente caricata
    const timer = setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 100); // Un breve ritardo per garantire che il contenuto sia completamente caricato

    return () => clearTimeout(timer); // Pulisci il timeout se il componente viene smontato
  }, []);

  return (
    <div className="container-fluid ">
      <div className="projects">
        <h5 className="fs-2 text-left mb-3">Projects</h5>
        <Carousel>
          <Carousel.Item>
            <video className="fixed-size-video" autoPlay loop muted width={800} height={400}>
              <source src="/Presentazione_FruitfyMarket.mp4" type="video/mp4" />
            </video>
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="fixed-size-video" src="https://via.placeholder.com/800x400" alt="Second slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="fixed-size-video" src="https://via.placeholder.com/800x400" alt="Third slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
