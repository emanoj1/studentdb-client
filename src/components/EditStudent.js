import React, { useState } from 'react';
import axios from 'axios';

function EditStudent({ student, setEditingStudent }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JS
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    ...student,
    dateOfBirth: formatDate(student.dateOfBirth),
    dateOfEnrollment: formatDate(student.dateOfEnrollment),
  });

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
      await axios.put(`${process.env.REACT_APP_API_BASE_URL}/students/${student._id}`, body, config);
      alert('Student updated successfully!');
      setEditingStudent(null); // Close the edit form after successful update
    } catch (err) {
      console.error('Failed to update student', err);
      alert('Failed to update student');
    }
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Date of Birth </label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Date of Enrollment </label>
          <input type="date" name="dateOfEnrollment" value={formData.dateOfEnrollment} onChange={handleChange} required />
        </div>
        <div>
          <label>Area of Study</label>
          <input type="text" name="areaOfStudy" value={formData.areaOfStudy} onChange={handleChange} required />
        </div>
        <button type="submit">Update Student</button>
        <button type="button" onClick={() => setEditingStudent(null)}>Cancel</button>
      </form>
    </div>
  );
}

export default EditStudent;



