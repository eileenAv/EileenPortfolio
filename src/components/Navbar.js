import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [capstoneOpen, setCapstoneOpen] = useState(false);
  const capRef = useRef(null);
  const closeTimer = useRef(null);

  const openCapstone = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setCapstoneOpen(true);
  };

  const closeCapstone = () => {
    // small delay so users can move pointer into dropdown without it disappearing
    closeTimer.current = setTimeout(() => setCapstoneOpen(false), 180);
  };

  useEffect(() => {
    function onDocClick(e) {
      if (capRef.current && !capRef.current.contains(e.target)) {
        setCapstoneOpen(false);
      }
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <nav className="navbar">
      <div className="brand">
        <span className="brand-name" style={{cursor: 'pointer'}} onClick={() => navigate('/')}>Eileen Avci</span>
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

        <li
          className={`nav-item dropdown ${capstoneOpen ? 'open' : ''}`}
          ref={capRef}
          onMouseEnter={openCapstone}
          onMouseLeave={closeCapstone}
        >
          <span
            className="navlink"
            role="button"
            tabIndex={0}
            onClick={() => { navigate('/capstone'); setCapstoneOpen(false); }}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { navigate('/capstone'); setCapstoneOpen(false); } }}
          >
            Capstone ▾
          </span>
          <ul className="dropdown-menu">
            <li><NavLink to="/capstone/overall" className="navlink">Overall Capstone</NavLink></li>
            <li><NavLink to="/capstone/user" className="navlink">The User</NavLink></li>
            <li><NavLink to="/capstone/experience" className="navlink">The Capstone Experience</NavLink></li>
            <li><NavLink to="/capstone/bibliography" className="navlink">Annotated Bibliography</NavLink></li>
          </ul>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;