// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((list) => <MovieCard key={list.title} movie={list} />)}
      </div>
    );
  }
}
export default MovieList;
