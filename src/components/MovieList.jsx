import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

export default class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((movie) => 
          <MovieCard key={movie.title} movies={movies} />,
        ) }
      </div>
    );
  }
}
