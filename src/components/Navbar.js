import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

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
      </ul>
    </nav>
  );
}

export default Navbar;