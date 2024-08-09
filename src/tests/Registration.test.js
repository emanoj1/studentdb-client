// Jest test for the Registration of a user

import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Registration from '../components/Registration';

test('Register button', async () => {
  render(
    <Router>
      <Registration />
    </Router>
  );

  const registerButton = screen.getByRole('button', { name: /Register/i });
  expect(registerButton).toBeInTheDocument();

  await act(async () => {
    fireEvent.click(registerButton);
  });
});




