// src/components/MovieList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieList from './MovieList';

describe('MovieList', () => {
  test('should render a list of movie cards', () => {
    const movies = [
      {
        imdbID: '1',
        Title: 'Movie 1',
        Year: '2021',
        Poster: 'movie1.jpg',
      },
      {
        imdbID: '2',
        Title: 'Movie 2',
        Year: '2020',
        Poster: 'movie2.jpg',
      },
    ];

    render(
      <Router>
        <MovieList movies={movies} />
      </Router>
    );

    const movieCards = screen.getAllByRole('img');
    expect(movieCards.length).toBe(2);
  });

 
});
