//Jest test for Login

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../components/Login';

test('renders Login button and handles click', async () => {
  render(
    <Router>
      <Login />
    </Router>
  );

  // Use getByRole to specifically target the button element
  const loginButton = screen.getByRole('button', { name: /Login/i });
  expect(loginButton).toBeInTheDocument();

  await act(async () => {
    fireEvent.click(loginButton);
  });
});




