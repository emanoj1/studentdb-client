// A new component EditStudentPage.js for editing student details

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './StudentList.css';
import './EditStudentPage.css';
import './Messages.css';


function EditStudentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        console.log('Fetching student with ID:', id); // Log the ID
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/students/${id}`, {
          headers: {
            'auth-token': token,
          },
        });
        const formatDate = (dateString) => {
          const date = new Date(dateString);
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JS
          const day = String(date.getDate()).padStart(2, '0');
          return `${year}-${month}-${day}`;
        };

        setFormData({
          ...res.data,
          dateOfBirth: formatDate(res.data.dateOfBirth),
          dateOfEnrollment: formatDate(res.data.dateOfEnrollment),
        });
      } catch (err) {
        console.error('Error fetching student', err);
        setMessage('Error fetching student data. Please try again.');
      }
    };

    fetchStudent();
  }, [id]);

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
      await axios.put(`${process.env.REACT_APP_API_BASE_URL}/students/${id}`, body, config);
      setMessage('Student updated successfully!');
      setTimeout(() => navigate('/student-list'), 2000); // Redirect after 2 seconds
    } catch (err) {
      console.error('Failed to update student', err);
      setMessage('Failed to update student');
    }
  };

  return (
    <div className="edit-student-page">
      <h1>Edit Student</h1>
      {message && <p className="success-message">{message}</p>}
      <form onSubmit={handleSubmit} className="edit-student-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date of Birth (yyyy-mm-dd)</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <input type="text" name="gender" value={formData.gender || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone || ''} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date of Enrollment (yyyy-mm-dd)</label>
          <input type="date" name="dateOfEnrollment" value={formData.dateOfEnrollment || ''} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Area of Study</label>
          <input type="text" name="areaOfStudy" value={formData.areaOfStudy || ''} onChange={handleChange} required />
        </div>
        <button type="submit" className="button edit-btn">Update Student</button>
      </form>
    </div>
  );
}

export default EditStudentPage;

