import React from 'react';
import './App.css';
import Data from './data';
import List from './components/MovieList';


function App() {
  return (
    <div className="App">
      <List movies={Data} />
    </div>
  );
}

export default App;
