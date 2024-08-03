// This component handles the login functionality for institution admins

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/login`, { email, password });
      console.log('Login successful', response);
      const token = response.data.token;
      console.log('Token:', token);
      // Store the token in localStorage or state management
      localStorage.setItem('auth-token', token);
      // Redirect to the Dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to login', error);
      setError(error.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
        </form>
      </div>
      <div className="login-image">
        <img src="/images/login-image-drawkit.png" alt="Login Illustration" />
      </div>
    </div>    
  );
}

export default Login;