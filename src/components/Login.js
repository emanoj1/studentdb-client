// This component handles the login functionality for institution admins

import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/login`, { email, password });
      console.log('Login successful', response);
      // Assuming the token is in response.data
      const token = response.data.token;
      console.log('Token:', token);
      // Handle successful login, e.g., store the token, redirect, etc.
    } catch (error) {
      console.error('Failed to login', error);
      setError(error.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;


