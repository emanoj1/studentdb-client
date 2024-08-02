// To deal with Forgotten Password function

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [securityAnswer1, setSecurityAnswer1] = useState('');
  const [securityAnswer2, setSecurityAnswer2] = useState('');
  const [securityAnswer3, setSecurityAnswer3] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/reset-password`, {
        email,
        securityAnswer1,
        securityAnswer2,
        securityAnswer3,
        newPassword
      });
      console.log('Password reset successful', response);
      setSuccess('Password reset successful. Please log in with your new password.');
      setError(null);
      navigate('/login');
    } catch (error) {
      console.error('Failed to reset password', error);
      setError(error.response?.data?.message || 'An error occurred during password reset');
      setSuccess(null);
    }
  };

  return (
    <div className="forgot-password-container">
      <h1>Forgot Password</h1>
      <h4>Fill out the fields below with details from your original registration and set a new password. Once authenticated, you will be able to login with the new password.</h4>
      <p>Note: Answers are case-senstive!</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email you registered the account with.</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>What is the model of your first car?</label>
          <input type="text" value={securityAnswer1} onChange={(e) => setSecurityAnswer1(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>What was the first concert you attended?</label>
          <input type="text" value={securityAnswer2} onChange={(e) => setSecurityAnswer2(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>What is the postcode of your first ever home you lived in?</label>
          <input type="text" value={securityAnswer3} onChange={(e) => setSecurityAnswer3(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>New Password</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
