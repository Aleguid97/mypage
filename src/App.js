import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Components/Cards.jsx";
import Aboutme from "./Components/Aboutme.jsx";
import { useMediaQuery } from "react-responsive";
import "./App.css";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 300px) and (max-width: 932px)" });

  const toggleAboutMe = () => {
    const aboutme = document.querySelector(".aboutme");

    if (aboutme.style.display === "none") {
      aboutme.style.display = "block";
    } else {
      aboutme.style.display = "none";
    }
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
                <button className="btn-aboutme rounded-pill btn" onClick={toggleAboutMe}>
                  About Me
                </button>
              </div>
            )}
            <Aboutme />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
