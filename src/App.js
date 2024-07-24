import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import AdminSettings from './components/AdminSettings';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

const App = () => {
  const authToken = localStorage.getItem('auth-token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/');
  };

  const handleLogoClick = () => {
    if (authToken) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="App">
      <nav className="main-nav">
        <span onClick={handleLogoClick} className="logo">Logo</span>
        <div className="nav-links">
          {authToken ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
      <div className="main-container">
        {authToken && (
          <div className="side-panel">
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/student-list">Student List</Link></li>
              <li><Link to="/add-student">Add Students</Link></li>
              <li><Link to="/admin-settings">Admin Settings</Link></li>
            </ul>
          </div>
        )}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/student-list" element={<PrivateRoute><StudentList /></PrivateRoute>} />
            <Route path="/add-student" element={<PrivateRoute><AddStudent /></PrivateRoute>} />
            <Route path="/admin-settings" element={<PrivateRoute><AdminSettings /></PrivateRoute>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;



