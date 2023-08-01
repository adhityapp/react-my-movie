// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieApp from './components/MovieApp';
import MovieDetail from './components/MovieDetail'; // Create this component for movie detail page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MovieApp/>} />
        <Route exact path="/movies/:id" element={<MovieDetail/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
