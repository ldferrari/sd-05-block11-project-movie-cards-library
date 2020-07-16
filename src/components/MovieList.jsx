import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const Movies = this.props.movies;
    return (
      <div className="movie-list">
        {Movies.map((mv) => (
          <MovieCard movie={mv} key={mv.title} />
        ))}
      </div>
    );
  }
}
export default MovieList;
