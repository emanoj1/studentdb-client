// A new component DeleteStudentPage.js for confirming and deleting student details

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './StudentList.css';
import './Messages.css';

function DeleteStudentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/students/${id}`, {
          headers: {
            'auth-token': token,
          },
        });
        setStudent(res.data);
      } catch (err) {
        console.error('Error fetching student', err);
      }
    };

    fetchStudent();
  }, [id]);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('auth-token');
      const config = {
        headers: {
          'auth-token': token,
        },
      };
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/students/${id}`, config);
      setMessage('Student deleted successfully!');
      setTimeout(() => navigate('/student-list'), 2000); // Redirect after 2 seconds
    } catch (err) {
      console.error('Failed to delete student', err);
      setMessage('Failed to delete student');
    }
  };

  return (
    <div>
      <h1>Delete Student</h1>
      {message && <p className="success-message">{message}</p>}
      <div>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Date of Birth:</strong> {student.dateOfBirth}</p>
        <p><strong>Gender:</strong> {student.gender}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Address:</strong> {student.address}</p>
        <p><strong>Date of Enrollment:</strong> {student.dateOfEnrollment}</p>
        <p><strong>Area of Study:</strong> {student.areaOfStudy}</p>
        <button onClick={handleDelete} className="button delete-btn">Delete Student</button>
      </div>
    </div>
  );
}

export default DeleteStudentPage;



