import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.movies.map(movie => (
      <MovieCard key={movie.title} movie={movie}/>
    ));
  }
}

export default MovieList;
