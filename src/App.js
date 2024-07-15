import './App.css';
import React from "react";
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/AboutSection";
import Projects from "./components/ProjectSection";
import Contact from "./components/ConnectSection";
import Navbar from "./components/Navigation";



function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
