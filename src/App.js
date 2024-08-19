import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Components/Cards.jsx";
import Aboutme from "./Components/Aboutme.jsx";
import { useMediaQuery } from "react-responsive";
import Projects from "./Components/Projects.jsx";
import "./App.css";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 300px) and (max-width: 932px)" });

  const toggleAboutMe = () => {
    const aboutme = document.querySelector(".aboutme");
    aboutme.style.display = aboutme.style.display === "none" ? "block" : "none";
  };
  window.addEventListener("scroll", () => {
    const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);

    // Colore fisso per il primo colore
    const color1 = `rgb(2, 56, 89)`; // rgb(2, 56, 89) corrisponde a #023859

    // Colore mediatore fisso
    const color2 = `rgb(36, 89, 123)`; // Un colore intermedio tra il primo e il terzo colore

    // Colore finale che cambia verso un tono più chiaro
    const color3 = `rgb(${Math.min(50 + scrollPercentage * 150, 200)}, ${Math.min(
      150 + scrollPercentage * 100,
      250
    )}, ${Math.min(180 + scrollPercentage * 80, 255)})`;

    // Applica il gradiente di sfondo con il primo colore fisso, il mediatore fisso e il terzo colore che cambia
    document.body.style.background = `linear-gradient(90deg, ${color1}, ${color2}, ${color3})`;
  });

  return (
    <Router>
      <div className="App container-fluid">
        <div className="row">
          <div className={`col-sm-12 col-md-6 ${isTabletOrMobile ? "order-1" : ""}`}>
            <Cards />
          </div>

          <div className={`col-sm-12 col-md-6 ${isTabletOrMobile ? "order-2" : ""}`}>
            {isTabletOrMobile && (
              <div className="buttons-container text-center">
                <button className="btn-aboutme rounded-pill btn mt-4" onClick={toggleAboutMe}>
                  About Me
                </button>
              </div>
            )}

            <Aboutme />
            <Routes>
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>

        <button className="play-btn rounded-pill btn">🕹️</button>
      </div>
    </Router>
  );
}

export default App;
