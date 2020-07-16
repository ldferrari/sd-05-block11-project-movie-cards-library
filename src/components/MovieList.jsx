// implement MovieList component here
import React from 'react';
import MovieCard from '../../../sd-05-block12-project-movie-card-library-stateful/src/components/MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
      </div>
    );
  }
}

export default MovieList;
