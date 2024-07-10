import './App.css';
import React from "react";
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ProjectPage from "./components/pages/ProjectPage";
import Navbar from "./components/Navigation";



function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project_page" element={<ProjectPage />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
