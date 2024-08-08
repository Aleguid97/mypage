import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards.jsx';
import Aboutme from './Components/Aboutme.jsx';
import { useMediaQuery } from 'react-responsive';
import './App.css';

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 300px) and (max-width: 768px)' });

  return (
    <div className="App">
      <Cards />
      <Aboutme />
      
      
      {isTabletOrMobile && (
        <div className="buttons-container">
          <button className="btn-download rounded-pill btn">About Me</button>
          <button className="btn-download rounded-pill btn">Languages</button>
          <button className="btn-download rounded-pill btn mb-4">Proficiencies</button>
        </div>
      )}
    </div>
  );
}

export default App;
