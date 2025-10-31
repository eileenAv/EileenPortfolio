import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/About/About.js";
import Projects from "./pages/Projects.js";
import Ora from "./pages/Projects/ORA/Ora.js";
import UwRedesign from "./pages/Projects/UWwebsite/UwRedesign.js";
import Athena from "./pages/Projects/Athena/Athena.js";
import Leti from "./pages/Projects/Leti/Leti.js";
import "./App.css";
import Juvo from "./pages/Projects/Juvo/Juvo.js";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

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
            <Route path="/projects/leti" element={<Leti />} />
          </Routes>
        </div>
           <Footer />
      </div>
    </Router> 

  );
}

export default App;
