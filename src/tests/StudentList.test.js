// Jest test to check student EDIT and DELETE

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StudentList from '../components/StudentList';
import axios from 'axios';

// Mock data for testing
const mockStudents = [
  {
    _id: '1',
    name: 'John Doe',
    dateOfBirth: '2000-01-01',
    gender: 'Male',
    phone: '1234567890',
    email: 'john@example.com',
    address: '123 Main St',
    dateOfEnrollment: '2019-09-01',
    areaOfStudy: 'Mathematics'
  }
];

jest.mock('axios');

beforeEach(() => {
  axios.get.mockResolvedValue({ data: mockStudents });
  axios.delete.mockResolvedValue({ status: 200 });
});

test('renders Student List and handles Edit button click', async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <StudentList />
      </MemoryRouter>
    );
  });

  const studentName = await screen.findByText(/John Doe/i);
  expect(studentName).toBeInTheDocument();

  const editButton = screen.getByText(/Edit/i);
  await act(async () => {
    fireEvent.click(editButton);
  });
});

test('renders Student List and handles Delete button click', async () => {
  await act(async () => {
    render(
      <MemoryRouter>
        <StudentList />
      </MemoryRouter>
    );
  });

  const studentName = await screen.findByText(/John Doe/i);
  expect(studentName).toBeInTheDocument();

  const deleteButton = screen.getByText(/Delete/i);
  await act(async () => {
    fireEvent.click(deleteButton);
  });
});




