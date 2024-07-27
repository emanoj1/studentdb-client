import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditStudent from './EditStudent';
import './Dashboard.css';

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
  const [editingStudent, setEditingStudent] = useState(null);

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

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('auth-token');
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/students/${id}`, {
        headers: {
          'auth-token': token,
        },
      });
      setStudents(students.filter(student => student._id !== id));
      alert('Student deleted successfully!');
    } catch (err) {
      console.error('Failed to delete student', err);
      alert('Failed to delete student');
    }
  };

  const handleEditClick = (student) => {
    setEditingStudent(student);
  };

  return (
    <div>
      <h1>Student List</h1>
      <h2>Below is the list of student records in your database. You may Edit & Delete your students here.</h2>
      <h4>Table Format:
      | Name | Date of Birth (year-month-date) | Gender | Phone | Email | Address | Date of Enrolment (year-month-date) | Area of Study | Actions |</h4>
      <ul className="student-list">
        {students.map(student => (
          <li key={student._id} className="student-item">
            <span>{student.name}</span>
            <span>{formatDate(student.dateOfBirth)}</span>
            <span>{student.gender}</span>
            <span>{student.phone}</span>
            <span>{student.email}</span>
            <span>{student.address}</span>
            <span>{formatDate(student.dateOfEnrollment)}</span>
            <span>{student.areaOfStudy}</span>
            <button onClick={() => handleEditClick(student)} className="button edit-btn">Edit</button>
            <button onClick={() => handleDelete(student._id)} className="button delete-btn">Delete</button>
          </li>
        ))}
      </ul>
      {editingStudent && <EditStudent student={editingStudent} setEditingStudent={setEditingStudent} />}
    </div>
  );
}

export default StudentList;

