// Jest test for the REGISTER button

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

test('Register button', async () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  const registerButton = screen.getByText(/Register/i);
  expect(registerButton).toBeInTheDocument();

  fireEvent.click(registerButton);
});






