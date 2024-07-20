// Protecting the Dashboard Route
// To ensure that only authenticated users can access the Dashboard, 
// we create a higher-order component (HOC) or a custom hook to check for the authentication token before rendering the Dashboard.

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const authToken = localStorage.getItem('auth-token');
  return authToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
