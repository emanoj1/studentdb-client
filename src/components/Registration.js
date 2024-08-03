// A React component for registering institution admins

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Registration.css';
//import registrationImage from '../assets/images/registration-image-drawkit.png';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    instituteName: '',
    instituteRegistrationNumber: '',
    securityAnswer1: '',
    securityAnswer2: '',
    securityAnswer3: ''
  });

  const { name, email, password, instituteName, instituteRegistrationNumber, securityAnswer1, securityAnswer2, securityAnswer3 } = formData;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
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
      const body = JSON.stringify({ name, email, password, instituteName, instituteRegistrationNumber, securityAnswer1, securityAnswer2, securityAnswer3 });
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/register`, body, config);
      console.log('Registered Successfully', res.data);
      setSuccessMessage('Registration successful! Redirecting to login page...');
      setTimeout(() => {
        navigate('/login');
      }, 3000); // Redirect after 3 seconds
    } catch (error) {
      console.error('Error during registration', error.response.data);
      setError(error.response?.data?.message || 'An error occurred during registration');
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-image">
        <img src="/images/registration-image-drawkit.png" alt="Registration Illustration" />
      </div>
      <div className="registration-form">
        <h2>Great decision! Register your institution and start using studentDB!</h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={onSubmit}>
          <div>
            <label>Your Name (The Institute admin)</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Your work Email</label>
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
            <label>Your institute Name</label>
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
          <h3>Security questions for Password Reset when required.</h3>
          <h4>NOTE: Answers are case-senstive! Remember or note them down (as it is) for later use.</h4>
          <div>
            <label>What is the model of your first car?</label>
            <input type="text" name="securityAnswer1" value={securityAnswer1} onChange={onChange} required />
          </div>
          <div>
            <label>What was the first concert you attended?</label>
            <input type="text" name="securityAnswer2" value={securityAnswer2} onChange={onChange} required />
          </div>
          <div>
            <label>What is the postcode of your first ever home you lived in?</label>
            <input type="text" name="securityAnswer3" value={securityAnswer3} onChange={onChange} required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}


export default Registration;
