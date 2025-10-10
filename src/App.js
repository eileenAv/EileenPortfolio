import React from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import Ora from "./pages/Projects/ORA/Ora.js";
import UwRedesign from "./pages/Projects/UWwebsite/UwRedesign.js";
import Athena from "./pages/Projects/Athena/Athena.js";
import "./App.css";
import Juvo from "./pages/Projects/Juvo/Juvo.js";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <div className="brand">
            <div className="dot" aria-hidden="true" />
            <span className="brand-name">Eileen Avci</span>
          </div>

          <ul>
            <li>
              <NavLink to="/" end className="navlink">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="navlink">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="navlink">
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Page Content */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/ora" element={<Ora />} />
            <Route path="/projects/juvo" element={<Juvo />} />
            <Route path="/projects/uw-redesign" element={<UwRedesign />} />
            <Route path="/projects/athena" element={<Athena />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
