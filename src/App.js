import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards.jsx';
import Aboutme from './Components/Aboutme.jsx';
import { useMediaQuery } from 'react-responsive';
import './App.css';

function App() {
  // Definisci la media query
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 300px) and (max-width: 768px)' });

  return (
    <div className="App">
      <Cards />
      <Aboutme />
      
      {/* Mostra i bottoni solo se la larghezza è tra 300px e 768px */}
      {isTabletOrMobile && (
        <div className="buttons-container">
          <button className="btn-download rounded-pill btn">About Me</button>
          <button className="btn-download rounded-pill btn">Languages</button>
          <button className="btn-download rounded-pill btn">Proficiencies</button>
        </div>
      )}
    </div>
  );
}

export default App;
