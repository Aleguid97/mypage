import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Cards from "./Components/Cards.jsx";
import Aboutme from "./Components/Aboutme.jsx";
import Projects from "./Components/Projects.jsx";
import Game from "./Components/Game.jsx";
import { useMediaQuery } from "react-responsive";

import "./App.css";

function App() {
  // More precise breakpoints for different devices
  const isMobile = useMediaQuery({ query: "(max-width: 599px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 600px) and (max-width: 932px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 300px) and (max-width: 932px)" });
  const isIphone16Pro = useMediaQuery({ query: "(min-width: 375px) and (max-width: 390px)" });

  useEffect(() => {
    // Desktop - Rich blue professional gradient (elegant deep blues with subtle teal accents)
    if (!isMobile && !isTablet) {
      document.body.style.background = `linear-gradient(
        135deg, 
        rgb(2, 56, 89) 0%, 
        rgb(18, 72, 102) 25%, 
        rgb(36, 89, 123) 50%, 
        rgb(48, 96, 115) 75%, 
        rgb(60, 89, 110) 100%
      )`;
      document.body.style.backgroundSize = "400% 400%";
      document.body.style.backgroundAttachment = "fixed";
    } 
    // iPhone 16 Pro - Vibrant creative gradient (purples and warm accents)
    else if (isIphone16Pro) {
      document.body.style.background = `linear-gradient(
        150deg, 
        rgb(75, 29, 97) 0%, 
        rgb(85, 22, 65) 30%, 
        rgb(81, 14, 23) 60%, 
        rgb(95, 40, 32) 85%, 
        rgb(90, 35, 25) 100%
      )`;
      document.body.style.backgroundSize = "300% 300%";
      document.body.style.backgroundAttachment = "fixed";
    }
    // Other tablets and mobile devices - Deep sophisticated blues
    else {
      document.body.style.background = `linear-gradient(
        120deg, 
        rgb(5, 20, 30) 0%, 
        rgb(10, 30, 45) 25%, 
        rgb(15, 40, 60) 50%, 
        rgb(20, 50, 70) 75%, 
        rgb(25, 60, 80) 100%
      )`;
      document.body.style.backgroundSize = "350% 350%";
      document.body.style.backgroundAttachment = "fixed";
    }
    
    // Optional: Add subtle animation to make backgrounds more dynamic
    document.body.style.animation = "gradientShift 15s ease infinite";
    
    // Clean up function to reset styles when component unmounts
    return () => {
      document.body.style.background = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundAttachment = "";
      document.body.style.animation = "";
    };
  }, [isMobile, isTablet, isIphone16Pro]); // Proper dependency array

  const toggleAboutMe = () => {
    const aboutme = document.querySelector(".aboutme");
    if (aboutme) {
      aboutme.style.display = aboutme.style.display === "none" ? "block" : "none";
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
        <Game />
      </div>
    </Router>
  );
}

export default App;