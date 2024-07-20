import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/students`);
        setStudents(res.data);
      } catch (err) {
        console.error('Error fetching students', err);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/students/${id}`);
      setStudents(students.filter(student => student._id !== id));
      alert('Student deleted successfully!');
    } catch (err) {
      console.error('Failed to delete student', err);
      alert('Failed to delete student');
    }
  };

  return (
    <div>
      <h1>Student List</h1>
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
    </div>
  );
}

export default StudentList;
