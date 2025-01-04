// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Add custom styles for Footer

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Visit Penang. All rights reserved.</p>
      <ul className="social-links">
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
