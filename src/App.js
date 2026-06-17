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
import StaggeredMenu from "./components/StaggeredMenu";
import CapstoneLanding from "./pages/Capstone/CapstoneLanding.js";
import OverallCapstone from "./pages/Capstone/Overall Capstone/OverallCapstone.js";
import TheUser from "./pages/Capstone/TheUser/TheUser.js";
import CapstoneExperience from "./pages/Capstone/TheCapstoneExperince/CapstoneExperience.js";
import AnnotatedBibliography from "./pages/Capstone/AnnotatedBibliography/AnnotatedBibliography.js";
import TheAppDesign from "./pages/Capstone/TheCapstoneExperince/TheAppDesign/TheAppDesign.js";
import DevelopmentOfTheUI from "./pages/Capstone/TheCapstoneExperince/DevelopmentOfTheUI/DevelopmentOfTheUI.js";
import DevelopmentOfTheBackend from "./pages/Capstone/TheCapstoneExperince/DevelopmentOfTheBackend/DevelopmentOfTheBackend.js";
import TheFinalProduct from "./pages/Capstone/TheCapstoneExperince/TheFinalProduct/TheFinalProduct.js";

function App() {
  return (
    <Router>
      <div className="app">
        <StaggeredMenu
          position="right"
          colors={['#B497CF', '#722dcc']}
          accentColor="#722dcc"
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          displayItemNumbering={true}
          isFixed={true}
          items={[
            { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
            { label: 'About', ariaLabel: 'About me', link: '/about' },
            { label: 'Projects', ariaLabel: 'View projects', link: '/projects' },
            { label: 'Capstone', ariaLabel: 'View capstone', link: '/capstone' },
          ]}
        />

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
            <Route path="/capstone" element={<CapstoneLanding />} />
            <Route path="/capstone/overall" element={<OverallCapstone />} />
            <Route path="/capstone/user" element={<TheUser />} />
            <Route path="/capstone/experience" element={<CapstoneExperience />} />
            <Route path="/capstone/experience/app-design" element={<TheAppDesign />} />
            <Route path="/capstone/experience/ui-development" element={<DevelopmentOfTheUI />} />
            <Route path="/capstone/experience/backend-development" element={<DevelopmentOfTheBackend />} />
            <Route path="/capstone/experience/final-product" element={<TheFinalProduct />} />
            <Route path="/capstone/bibliography" element={<AnnotatedBibliography />} />
          </Routes>
        </div>
           <Footer />
      </div>
    </Router> 

  );
}

export default App;
