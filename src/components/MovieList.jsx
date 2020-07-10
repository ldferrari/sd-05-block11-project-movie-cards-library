import React from 'react';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      movies.map((element) => <MovieCard movie={element} key={element.title} />)
    )
  }
}

export default MovieList;
