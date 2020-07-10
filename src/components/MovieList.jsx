// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    const list = movies.map(movie => {
      return <MovieCard movie={movie} key={movie.title} />;
    });
    return list;
  }
}

export default MovieList;
