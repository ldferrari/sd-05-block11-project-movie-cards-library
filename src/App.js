import React from 'react';
import './App.css';
import Header from './components/Header';
// import Movies from './data';

function App() {
  return (
    <div className="App">
      <Header title="Movie Cards Library" />
      {/* deve renderizar Header e MovieList passando como prop Movies
       a lista contida no arquivo data.js, importando data.js no App.js */}
      Hora de codar! 🚀✍️👨‍💻👩‍💻💪
    </div>
  );
}

export default App;
