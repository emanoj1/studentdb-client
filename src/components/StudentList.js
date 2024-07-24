import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditStudent from './EditStudent'; // Import the EditStudent component
import './Dashboard.css';

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
            <button onClick={() => handleEditClick(student)}>Edit</button>
            <button onClick={() => handleDelete(student._id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editingStudent && <EditStudent student={editingStudent} setEditingStudent={setEditingStudent} />}
    </div>
  );
}

export default StudentList;

