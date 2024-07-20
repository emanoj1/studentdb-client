import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

function AddStudent() {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    dateOfEnrollment: '',
    areaOfStudy: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify(formData);
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/students`, body, config);
      alert('Student added successfully!');
    } catch (err) {
      console.error('Failed to add student', err);
      alert('Failed to add student');
    }
  };

  return (
    <div>
      <h1>Add New Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        </div>
        <div>
          <label>Date of Birth (dd/mm/yyyy)</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" required />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
        </div>
        <div>
          <label>Date of Enrollment (dd/mm/yyyy)</label>
          <input type="date" name="dateOfEnrollment" value={formData.dateOfEnrollment} onChange={handleChange} required />
        </div>
        <div>
          <label>Area of Study</label>
          <input type="text" name="areaOfStudy" value={formData.areaOfStudy} onChange={handleChange} placeholder="Area of Study" required />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;

