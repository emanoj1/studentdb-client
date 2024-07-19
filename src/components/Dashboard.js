// This component is where an admin can manage and view student details

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  const [students, setStudents] = useState([]);
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
  const [statistics, setStatistics] = useState({
    totalStudents: 0,
    totalInAreaOfStudy: 0,
    maleStudents: 0,
    femaleStudents: 0
  });

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/students`);
        setStudents(res.data);
        computeStatistics(res.data);
      } catch (err) {
        console.error('Error fetching students', err);
      }
    };

    fetchStudents();
  }, []);

  const computeStatistics = (students) => {
    const totalStudents = students.length;
    const maleStudents = students.filter(student => student.gender === 'Male').length;
    const femaleStudents = students.filter(student => student.gender === 'Female').length;
    const totalInAreaOfStudy = students.filter(student => student.areaOfStudy === formData.areaOfStudy).length;

    setStatistics({
      totalStudents,
      totalInAreaOfStudy,
      maleStudents,
      femaleStudents
    });
  };

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
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/students`, body, config);
      setStudents([...students, res.data]);  // Add new student to state
      alert('Student added successfully!');
      computeStatistics([...students, res.data]);  // Recompute statistics
    } catch (err) {
      console.error('Failed to add student', err);
      alert('Failed to add student');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/students/${id}`);
      const updatedStudents = students.filter(student => student._id !== id);
      setStudents(updatedStudents);
      alert('Student deleted successfully!');
      computeStatistics(updatedStudents);  // Recompute statistics
    } catch (err) {
      console.error('Failed to delete student', err);
      alert('Failed to delete student');
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="statistics">
        <p>Total Students: {statistics.totalStudents}</p>
        <p>Male Students: {statistics.maleStudents}</p>
        <p>Female Students: {statistics.femaleStudents}</p>
      </div>
      <h2>Students</h2>
      <ul className="student-list">
        {students.map(student => (
          <li key={student._id} className="student-item">
            <span>{student.name}</span>
            <span>{student.dateOfBirth}</span>
            <span>{student.gender}</span>
            <span>{student.phone}</span>
            <span>{student.email}</span>
            <span>{student.address}</span>
            <span>{student.dateOfEnrollment}</span>
            <span>{student.areaOfStudy}</span>
            <button onClick={() => handleDelete(student._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add New Student</h2>
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

export default Dashboard;


