import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminSettings() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instituteName: '',
    instituteRegistrationNumber: '',
    password: ''
  });

  // Fetch admin data on component mount
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/institutions/profile`, {
          headers: {
            'auth-token': token
          }
        });
        setFormData({
          name: res.data.name,
          email: res.data.email,
          instituteName: res.data.instituteName,
          instituteRegistrationNumber: res.data.instituteRegistrationNumber,
          password: '' // Leave password empty initially
        });
      } catch (err) {
        console.error('Error fetching admin data', err);
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
      await axios.put(`${process.env.REACT_APP_API_BASE_URL}/institutions/profile`, formData, {
        headers: {
          'auth-token': token,
          'Content-Type': 'application/json'
        }
      });
      alert('Profile updated successfully!');
    } catch (err) {
      console.error('Error updating profile', err);
      alert('Failed to update profile');
    }
  };

  return (
    <div>
      <h2>Admin Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Institute Name</label>
          <input type="text" name="instituteName" value={formData.instituteName} onChange={handleChange} required />
        </div>
        <div>
          <label>Institute Registration Number</label>
          <input type="text" name="instituteRegistrationNumber" value={formData.instituteRegistrationNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Update Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default AdminSettings;



