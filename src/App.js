import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home.jsx";
import Projects from "./Components/Projects.jsx";

import "./App.css";



function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
