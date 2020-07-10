// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from './data.js';

class MovieList extends React.Component {
  render() {
    const list = movies.map((movie) => {
      return <MovieCard movie={movie} key={movie.title} />;
    });
    return list;
  }
}

export default MovieList;
