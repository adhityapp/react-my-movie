// src/components/MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, query }) => {
  const { Title, Year, Poster, imdbID } = movie;

  return (
    
    <div className="col">
        <h1></h1>
        <h1></h1>

    <div className="card" style={{ width: '400px', height: '800px' }}>
        <img src={Poster} className="card-img-top" alt={Title} style={{ objectFit: 'cover', height: '100%' }} />
        <div className="card-body">
            <h5 className="card-title">{Title}</h5>
            <p className="card-text">{Year}</p>
            <Link
                to={{
                pathname: `/movies/${imdbID}`,
                search: `?s=${encodeURIComponent(query)}`, // Pass the search query as a URL parameter
                }}
                className="btn btn-primary"
            >
                Details
            </Link>
        </div>
    </div>

    </div>
  );
};

export default MovieCard;
