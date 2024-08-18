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
