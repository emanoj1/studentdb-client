// This component is where an admin can manage and view student details

import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';

function Dashboard() {
  const [statistics, setStatistics] = useState({
    totalStudents: 0,
    maleStudents: 0,
    femaleStudents: 0,
  });

  const [adminData, setAdminData] = useState({});

  const computeStatistics = useCallback((students) => {
    const totalStudents = students.length;
    const maleStudents = students.filter(student => student.gender === 'Male').length;
    const femaleStudents = students.filter(student => student.gender === 'Female').length;

    setStatistics({
      totalStudents,
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

    const fetchAdminData = async () => {
      try {
        const token = localStorage.getItem('auth-token');
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/institutions/profile`, {
          headers: {
            'auth-token': token,
          },
        });
        setAdminData(res.data);
      } catch (err) {
        console.error('Error fetching admin data', err);
      }
    };

    fetchStudents();
    fetchAdminData();
  }, [computeStatistics]);

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Welcome! Nice to see you here.</h3>
      <div className="admin-info">
        <p>Institute Name: {adminData.instituteName}</p>
        <p>Logged in Admin: {adminData.name}</p>
      </div>
      <div className="statistics">
        <p>Total Students: {statistics.totalStudents}</p>
        <p>Male Students: {statistics.maleStudents}</p>
        <p>Female Students: {statistics.femaleStudents}</p>
      </div>
      <div className="important-info">
        <h3>Important Information:</h3>
        <ol>
          <li>To add new students to your database, click on "Add Students" in the left panel.</li>
          <li>You can edit or delete a student from the Student List page, accessible from the left panel.</li>
          <li>To update any of your admin settings (Name, Email, Password, etc.), use the "Admin Settings" option in the left panel.</li>
          <li>Remember: Anything related to security (password & security questions) is case-sensitive. For example, "A" and "a" are considered different.</li>
          <li>We recommend keeping a record of your security question answers in a secure place for reference when resetting or updating them.</li>
          <li>A good practice is to use misleading answers for security questions to enhance security.</li>
          <li>Do not share your login details with anyone else other than those who have the right to access the webpage.</li>
          <li>Always logout (top right) once you have completed your work.</li>
          <li>If you encounter any technical issues and need assistance, please contact us via the LIVE Chat (bottom right) or use the Contact page.</li>
          <li>If you like our product, please recommend them to other institutes as well! The more, the merrier!</li>
        </ol>
      </div>
    </div>
  );
}

export default Dashboard;