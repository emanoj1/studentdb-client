// Jest test for Forgot Password

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ForgotPassword from '../components/ForgotPassword';

test('Reset Password button', async () => {
  await act(async () => {
    render(
      <Router>
        <ForgotPassword />
      </Router>
    );
  });

  const resetPasswordButton = screen.getByText(/Reset Password/i);
  expect(resetPasswordButton).toBeInTheDocument();

  await act(async () => {
    fireEvent.click(resetPasswordButton);
  });
});



