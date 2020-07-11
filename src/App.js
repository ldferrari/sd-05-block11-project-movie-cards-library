import React from 'react';
import './App.css';
import Data from './data';
import MovieList from './components/MovieList';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={Data} />
    </div>
  );
}

export default App;
