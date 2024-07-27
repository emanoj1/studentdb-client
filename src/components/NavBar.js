import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/studentDB-logo.png';

function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={isLoggedIn ? "/dashboard" : "/"}>
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        {isLoggedIn ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/students">Student List</Link></li>
            <li><Link to="/add-student">Add Students</Link></li>
            <li><Link to="/admin-settings">Admin Settings</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
