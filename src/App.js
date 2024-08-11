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
      <div className="App container-fluid">
        <div className="row">
          <div className={`col-12 col-md-6 ${isTabletOrMobile ? 'order-2' : ''}`}>
            <Cards />
          </div>

          <div className={`col-12 col-md-6 ${isTabletOrMobile ? 'order-1' : ''}`}>
            {isTabletOrMobile && (
              <div className="buttons-container text-center my-3">
                <button className="btn-download rounded-pill btn btn-primary">About Me</button>      
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
