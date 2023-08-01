// src/components/MovieDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=4afc0b54`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie detail:', error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  const handleBack = () => {
    const searchQuery = new URLSearchParams(location.search).get('s');

    if (searchQuery) {
        navigate({
            pathname: '/',
            search: `?s=${encodeURIComponent(searchQuery)}`,
        });
    } else {
      navigate('/');
    }
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>{movie.Title}</h2>
          <p>{movie.Plot}</p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Main Cast:</strong> {movie.Actors}
          </p>
          <button className="btn btn-primary" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
