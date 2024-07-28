import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './StudentList.css';

// Utility function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JS
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/students`, {
          headers: {
            'auth-token': token,
          },
        });
        setStudents(res.data);
      } catch (err) {
        console.error('Error fetching students', err);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <div className="student-list-grid">
        <div className="student-list-header">
          <div>Name</div>
          <div>Date of Birth (year-month-date)</div>
          <div>Gender</div>
          <div>Phone</div>
          <div>Email</div>
          <div>Address</div>
          <div>Date of Enrolment (year-month-date)</div>
          <div>Area of Study</div>
          <div>Actions</div>
        </div>
        {students.map(student => (
          <div key={student._id} className="student-item">
            <div>{student.name}</div>
            <div>{formatDate(student.dateOfBirth)}</div>
            <div>{student.gender}</div>
            <div>{student.phone}</div>
            <div>{student.email}</div>
            <div>{student.address}</div>
            <div>{formatDate(student.dateOfEnrollment)}</div>
            <div>{student.areaOfStudy}</div>
            <div className="actions">
              <button onClick={() => navigate(`/edit-student/${student._id}`)} className="button edit-btn">Edit</button>
              <button onClick={() => navigate(`/delete-student/${student._id}`)} className="button delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;


