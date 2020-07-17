import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import data from './data.js';
import MovieCard from './components/MovieCard.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieCard movies={data[1]} />
    </div>
  );
}

export default App;
