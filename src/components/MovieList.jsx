// implement MovieList component here
import React from 'react';
import movies from './src/data';
import MovieCard from './components/MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div className='movie-list'>
        {movies.map(movie => <MovieCard movie={movie} />)}
      </div>
    )
  }
}

export default MovieList;