import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const myMovies = this.props.movies;

    return (
      <div>
        {myMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </div>
    );
  }
}

export default MovieList;
