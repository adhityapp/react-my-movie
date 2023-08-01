// src/components/MovieApp.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import { useLocation } from 'react-router-dom';

const MovieApp = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState('All'); 
    const [searchQuery, setSearchQuery] = useState('');
    const query = new URLSearchParams(location.search).get('s');

  useEffect(() => {
    const fetchMovies = async () => {
      let url = `https://www.omdbapi.com/?apikey=4afc0b54`;

      if (category && category !== 'All') {
        url += `&type=${category}`;
      }

      if (searchQuery) {
        url += `&s=${searchQuery}`;
      }else if(query){
        url += `&s=${query}`;
      }

      try {
        const response = await axios.get(url);
        setMovies(response.data.Search);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [searchQuery, query, category]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.elements.search.value);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My Movie</h1>
      <form onSubmit={handleSearch}>
      <div className="input-group mb-3">
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Search by title"
            aria-label="Search by title"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="btn-group" role="group" aria-label="Movie Categories">
        <button
          type="button"
          className={`btn btn-outline-secondary ${category === 'All' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('All')}
        >
          All
        </button>
        <button
          type="button"
          className={`btn btn-outline-secondary ${category === 'movie' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('movie')}
        >
          Top 250 Movies
        </button>
        <button
          type="button"
          className={`btn btn-outline-secondary ${category === 'series' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('series')}
        >
          Top 250 TV Shows
        </button>
        <button
          type="button"
          className={`btn btn-outline-secondary ${category === 'popular' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('popular')}
        >
          Most Popular Movies
        </button>
        <button
          type="button"
          className={`btn btn-outline-secondary ${category === 'popular_tv' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('popular_tv')}
        >
          Most Popular TV Shows
        </button>
        <button
          type="button"
          className={`btn btn-outline-secondary ${category === 'coming_soon' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('coming_soon')}
        >
          Coming Soon
        </button>
      </div>
      <MovieList movies={movies} query={searchQuery || query} />
    </div>
  );
};

export default MovieApp;
