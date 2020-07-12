import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        <div className="row__inner">
          {movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
