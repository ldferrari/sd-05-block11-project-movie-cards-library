import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return this.props.movies.map(movie => (
      <MovieCard key={movie.title} title={movie.title}/>
    ));
  }
}

export default MovieList;
