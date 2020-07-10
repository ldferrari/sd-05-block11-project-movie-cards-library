import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="movieList">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
