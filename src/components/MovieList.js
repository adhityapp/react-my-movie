// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, query }) => {
  return (
    <div className="row">
        <h1></h1>
        <h1></h1>
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
            <MovieCard movie={movie} query={query}/> 
        ))
        
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
