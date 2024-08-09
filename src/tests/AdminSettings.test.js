// Jest test for the Admin Settings page in logged-in state

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import AdminSettings from '../components/AdminSettings';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Admin Settings form', async () => {
  await act(async () => {
    render(
      <Router>
        <AdminSettings />
      </Router>
    );
  });
  expect(screen.getByText(/Admin Settings/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
});

test('updates profile', async () => {
  await act(async () => {
    render(
      <Router>
        <AdminSettings />
      </Router>
    );
  });

  await act(async () => {
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'New Name' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'new@example.com' } });
    fireEvent.click(screen.getByText(/Update Profile/i));
  });

});


