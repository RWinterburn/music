import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/singles">Music</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
