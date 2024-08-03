import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import logo from '../assets/images/studentDB-logo-noBG.png';
import '../styles/NavBar.css'; 

function NavBar({ isLoggedIn, handleLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={isLoggedIn ? "/dashboard" : "/"}>
          <img src="/images/studentDB-logo-noBG.png" alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
        {isLoggedIn ? (
          <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
        ) : (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login" className="login-btn">Login</Link></li>
            <li><Link to="/register" className="register-btn">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;

