import React from 'react';
import { render, screen, describe, test, expect } from '@testing-library/react';
import { MemoryRouter, Routes } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  test('renders NoteList component for the "/" route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <App />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Minhas notas')).toBeInTheDocument();
  });

  test('renders NewNote component for the "/new" route', () => {
    render(
      <MemoryRouter initialEntries={['/new']}>
        <Routes>
          <App />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Nova Nota')).toBeInTheDocument();
  });

  test('renders NoteLayout component for the "/:id" route', () => {
    render(
      <MemoryRouter initialEntries={['/123']}>
        <Routes>
          <App />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Note')).toBeInTheDocument();
  });

  test('redirects to "/" for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <Routes>
          <App />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('Minhas notas')).toBeInTheDocument();
  });
});
