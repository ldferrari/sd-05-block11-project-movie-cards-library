import React from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <MovieList movies={Movies} />
      </div>
    </div>
  );
}

export default App;
