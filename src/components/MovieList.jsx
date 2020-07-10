// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props.movie;
    return (
      <div className="movie-list">
        {movies.map((filmes) => <MovieCard key={filmes} movies={filmes} />)}
      </div>
    );
  }
}

export default MovieList;
