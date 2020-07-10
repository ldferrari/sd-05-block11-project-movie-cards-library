import React from 'react';
import MovieCard from '../components/MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((elemento) => <MovieCard key={elemento.title} cards={elemento} />)}
      </div>
    );
  }
}

export default MovieList;
