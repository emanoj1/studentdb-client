// This component is where an admin can manage and view student details

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Dashboard.css';

function Dashboard() {
  const [statistics, setStatistics] = useState({
    totalStudents: 0,
    totalInAreaOfStudy: 0,
    maleStudents: 0,
    femaleStudents: 0,
  });

  const computeStatistics = useCallback((students) => {
    const totalStudents = students.length;
    const maleStudents = students.filter(student => student.gender === 'Male').length;
    const femaleStudents = students.filter(student => student.gender === 'Female').length;
    const totalInAreaOfStudy = students.filter(student => student.areaOfStudy === 'Computer Science').length; // Example area of study

    setStatistics({
      totalStudents,
      totalInAreaOfStudy,
      maleStudents,
      femaleStudents,
    });
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/students`, {
          headers: {
            'auth-token': token,
          },
        });
        computeStatistics(res.data);
      } catch (err) {
        console.error('Error fetching students', err);
      }
    };

    fetchStudents();
  }, [computeStatistics]);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="statistics">
        <p>Total Students: {statistics.totalStudents}</p>
        <p>Total Students in Area of Study: {statistics.totalInAreaOfStudy}</p>
        <p>Male Students: {statistics.maleStudents}</p>
        <p>Female Students: {statistics.femaleStudents}</p>
      </div>
    </div>
  );
}

export default Dashboard;

