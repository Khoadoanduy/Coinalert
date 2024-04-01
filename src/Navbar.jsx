import React from 'react';
import './Navbar.css'; // Import CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">Services</a></li>
        <li className="nav-item"><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;