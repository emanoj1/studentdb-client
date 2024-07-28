// A React component for registering institution admins

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registration.css'; // Import the CSS file
import registrationImage from '../assets/images/registration-image-drawkit.png'; // Import the image

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    instituteName: '',
    instituteRegistrationNumber: ''
  });

  const { name, email, password, instituteName, instituteRegistrationNumber } = formData;
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify({ name, email, password, instituteName, instituteRegistrationNumber });
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/register`, body, config);
      console.log('Registered Successfully', res.data);
      alert('Registration successful');
      navigate('/login');
    } catch (error) {
      console.error('Error during registration', error.response.data);
      setError(error.response?.data?.message || 'An error occurred during registration');
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-image">
        <img src={registrationImage} alt="Registration Illustration" />
      </div>
      <div className="registration-form">
        <h2>Register Institution Admin</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={onSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Institute Name</label>
            <input
              type="text"
              name="instituteName"
              value={instituteName}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Institute Registration Number</label>
            <input
              type="text"
              name="instituteRegistrationNumber"
              value={instituteRegistrationNumber}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
