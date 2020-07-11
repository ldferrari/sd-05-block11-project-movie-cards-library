// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard.jsx';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div className="list-movie">
        {movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)}
      </div>
    );
  }
}
export default MovieList;
