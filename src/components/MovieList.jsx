import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
export default class ConteinerCard extends Component {
  render() {
      const { movies } = this.props;
      return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard ky={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}
