import React, { useState } from 'react';
import axios from 'axios';
import '../styles/EditStudentPage.css'; // Reusing the CSS file for styling boxes & fields

function AddStudent() {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    dateOfEnrollment: '',
    areaOfStudy: '',
  });
  const [message, setMessage] = useState('');

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
      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/students/add-student`,
        formData,
        config
      );
      setMessage('Student added successfully!');
      setFormData({
        name: '',
        dateOfBirth: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        dateOfEnrollment: '',
        areaOfStudy: '',
      });
    } catch (err) {
      console.error('Failed to add student', err);
      setMessage('Failed to add student');
    }
  };

  return (
    <div className="edit-student-page">
      <h1>Add Student</h1>
      {message && <p className="success-message">{message}</p>}
      <form onSubmit={handleSubmit} className="edit-student-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date of Birth (yyyy-mm-dd)</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date of Enrollment (yyyy-mm-dd)</label>
          <input type="date" name="dateOfEnrollment" value={formData.dateOfEnrollment} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Area of Study</label>
          <input type="text" name="areaOfStudy" value={formData.areaOfStudy} onChange={handleChange} required />
        </div>
        <button type="submit" className="button edit-btn">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;



