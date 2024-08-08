import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards.jsx';
import './App.css';
import Aboutme from './Components/Aboutme.jsx';


function App() {
  return (
    <div className="App ">
      {/* <img src='Tentacolo.png' className='out-of-bounds-image' /> */}
      <Cards/>
      <Aboutme />
    </div>
  );
}


export default App;
