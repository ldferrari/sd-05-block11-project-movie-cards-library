import React from 'react';
import './App.css';
import Library from './data';
import Header from '../src/components/Header';
import MovieList from '../src/components/MovieList';
import Rating from '../src/components/Rating';

function App() {
  return (
    <div className="App">
      {<Header /> }
      {<MovieList movies={Library} /> }
      {<Rating /> }
    </div>
  );
}

export default App;
