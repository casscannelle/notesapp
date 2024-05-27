import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { test } from 'vitest';

test('adds a new note', () => {
  render(
    <MemoryRouter initialEntries={['/new']}>
      <App />
    </MemoryRouter>
  );

  const titleInput = screen.getByLabelText(/Título/i);
  const markdownInput = screen.getByLabelText(/markdown/i);
  const submitButton = screen.getByText(/save/i);

  fireEvent.change(titleInput, { target: { value: 'Test Note' } });
  fireEvent.change(markdownInput, { target: { value: 'This is a test note.' } });
  fireEvent.click(submitButton);

});
