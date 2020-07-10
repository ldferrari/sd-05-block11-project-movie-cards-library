// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from './src/data.js'

class MovieList extends React.Component {
  render() {
    return movies.map(movie => {
      <MovieCard movie={movie} key={movie.title} />
    });
  }
}

export default MovieList;
