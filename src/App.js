import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards.jsx';
import Aboutme from './Components/Aboutme.jsx';
import { useMediaQuery } from 'react-responsive';
import './App.css';

function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 300px) and (max-width: 768px)' });

  return (
    <Router>
    <div className="App">
      <Cards />
      
      
      
      {isTabletOrMobile && (
        <div className="buttons-container">
          <button className="btn-download rounded-pill btn">About Me</button>      
        </div>
        
      )}
      <Aboutme />
    </div>
    </Router>
  );
}

export default App;