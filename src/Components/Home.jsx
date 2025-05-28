import React, { useState } from "react";
import Cards from "./Cards";
import Aboutme from "./Aboutme";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 932px)" });
  const [showItalian, setShowItalian] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);

  const toggleAboutMe = () => {
    setShowAboutMe(prev => !prev);
  };

  const toggleAboutMeIta = () => {
    setShowItalian(prev => !prev);
  };

  return (
    <div className="row">
      <div className="ita">
        <button className="btn-ita btn border-0" onClick={toggleAboutMeIta}>
          {/* Mostra bandiera italiana se il testo è in inglese */}
          <img
            src="Ita.svg.png"
            alt="Switch to Italian"
            className={`flagIta ${showItalian ? "d-none" : "d-block"} mt-1`}
            width={50}
            height={30}
          />
          {/* Mostra bandiera inglese se il testo è in italiano */}
          <img
            src="En.svg.png"
            alt="Switch to English"
            className={`flagEn ${showItalian ? "d-block" : "d-none"} mt-1`}
            width={50}
            height={30}
          />
        </button>
      </div>

      <div className={`col-sm-12 col-md-6 ${isTabletOrMobile ? "order-1" : ""}`}>
        <Cards />
      </div>

      <div className={`col-sm-12 col-md-6 ${isTabletOrMobile ? "order-2" : ""}`}>
        {isTabletOrMobile && (
          <div className="buttons-container text-center">
            <button className="btn-aboutme rounded-pill mt-4" onClick={toggleAboutMe}>
              About Me
            </button>
          </div>
        )}
        
        {/* Passa le props necessarie per controllare la visibilità */}
        <Aboutme 
          showItalian={showItalian} 
          showAboutMe={showAboutMe}
          isTabletOrMobile={isTabletOrMobile}
        />
      </div>
    </div>
  );
}

export default Home;