import React from 'react';
import './App.css';
import movie from './data';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movie} />
    </div>
  );
}

export default App;
