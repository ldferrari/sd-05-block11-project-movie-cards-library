import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((filme) => <MovieCard movies={filme} key={filme.title} />)}
      </div>
    );
  }
}

export default MovieList;
