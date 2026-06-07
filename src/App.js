import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home.jsx";
import Projects from "./Components/Projects.jsx";
import ErrorBoundary from "./Components/ErrorBoundary.jsx";

import "./App.css";



function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
