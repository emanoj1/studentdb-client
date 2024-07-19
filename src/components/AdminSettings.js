import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

function AdminSettings() {
  const [adminData, setAdminData] = useState({
    name: '',
    email: '',
    instituteName: '',
    instituteRegistrationNumber: '',
    password: ''
  });

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/profile`, {
          headers: {
            'auth-token': localStorage.getItem('auth-token')
          }
        });
        setAdminData(res.data);
      } catch (err) {
        console.error('Error fetching admin data', err);
      }
    };

    fetchAdminData();
  }, []);

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('auth-token')
        }
      };
      const body = JSON.stringify(adminData);
      await axios.put(`${process.env.REACT_APP_API_BASE_URL}/user/profile`, body, config);
      alert('Admin data updated successfully!');
    } catch (err) {
      console.error('Failed to update admin data', err);
      alert('Failed to update admin data');
    }
  };

  return (
    <div>
      <h1>Admin Settings</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={adminData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={adminData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Institute Name</label>
          <input type="text" name="instituteName" value={adminData.instituteName} onChange={handleChange} required />
        </div>
        <div>
          <label>Institute Registration Number</label>
          <input type="text" name="instituteRegistrationNumber" value={adminData.instituteRegistrationNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Update Password</label>
          <input type="password" name="password" value={adminData.password} onChange={handleChange} />
        </div>
        <button type="submit">Update Admin Settings</button>
      </form>
    </div>
  );
}

export default AdminSettings;

