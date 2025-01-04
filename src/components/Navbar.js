// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure you add CSS for the Navbar if you need styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tourist-spots">Tourist Spots</Link></li>
        <li><Link to="/food-beverages">Food & Beverages</Link></li>
        <li><Link to="/hotels">Hotels</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
