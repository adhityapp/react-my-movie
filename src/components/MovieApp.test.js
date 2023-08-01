// src/components/MovieApp.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieApp from './MovieApp';

describe('MovieApp', () => {
  test('should handle search correctly', () => {
    render(<MovieApp />);
    const searchInput = screen.getByPlaceholderText('Search by title');
    fireEvent.change(searchInput, { target: { value: 'Batman' } });
    expect(searchInput.value).toBe('Batman');
  });

  test('should handle category filtering correctly', () => {
    render(<MovieApp />);
    const filterButtons = screen.getAllByRole('button', { name: /movies/i });
    fireEvent.click(filterButtons[0]);
    expect(filterButtons[0]).toHaveClass('active');
  });

 
});
