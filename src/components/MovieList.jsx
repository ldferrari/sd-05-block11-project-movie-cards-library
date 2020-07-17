// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {

  render() {
    //const { movies } = this.props.movies;
    const {movies} = this.props;
    return (
      <div>
        {movies.map(el => <MovieCard movies={el}/>)}
      </div>
    );
  }
}

export default MovieList;
