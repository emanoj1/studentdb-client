import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EditStudentPage.css'; // Reuse the CSS file for styling

function AdminSettings() {
  const navigate = useNavigate();
  const [currentDetails, setCurrentDetails] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    instituteName: '',
    instituteRegistrationNumber: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/institutions/profile`, {
          headers: {
            'auth-token': token,
          },
        });
        setCurrentDetails(res.data);
        setFormData({
          name: res.data.name,
          email: res.data.email,
          instituteName: res.data.instituteName,
          instituteRegistrationNumber: res.data.instituteRegistrationNumber,
        });
      } catch (err) {
        console.error('Error fetching admin data:', err.response ? err.response.data : err.message);
        setMessage('Error fetching admin data. Please try again.');
      }
    };

    fetchAdminData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('auth-token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
      };
      const body = JSON.stringify(formData);
      await axios.put(`${process.env.REACT_APP_API_BASE_URL}/institutions/profile`, body, config);
      setMessage('Profile updated successfully!');
      setTimeout(() => setMessage(''), 3000);

      if (formData.password) {
        localStorage.removeItem('auth-token');
        navigate('/login');
      }
    } catch (err) {
      console.error('Failed to update profile:', err.response ? err.response.data : err.message);
      setMessage('Failed to update profile');
    }
  };

  return (
    <div className="edit-student-page">
      <h1>Admin Settings</h1>
      {message && <p className="success-message">{message}</p>}
      <div className="current-details">
        <h2>Current Details</h2>
        <p><strong>Name:</strong> {currentDetails.name}</p>
        <p><strong>Email:</strong> {currentDetails.email}</p>
        <p><strong>Institute Name:</strong> {currentDetails.instituteName}</p>
        <p><strong>Institute Registration Number:</strong> {currentDetails.instituteRegistrationNumber}</p>
      </div>
      <form onSubmit={handleSubmit} className="edit-student-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Institute Name</label>
          <input type="text" name="instituteName" value={formData.instituteName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Institute Registration Number</label>
          <input type="text" name="instituteRegistrationNumber" value={formData.instituteRegistrationNumber} onChange={handleChange} required />
        </div>
        <button type="submit" className="button edit-btn">Update Profile</button>
      </form>
    </div>
  );
}

export default AdminSettings;










