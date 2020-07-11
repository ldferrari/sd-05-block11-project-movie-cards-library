import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { batata } = this.props;
    return (
      <div>
        { batata.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    );
  }
}

export default MovieList;
