import React from "react";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./App.css";

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
