// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = [this.props.movies];
    return (
      <section>
        {movies.map((movie, index) => {
          const lista = <MovieCard key={movie[index].title} movie={movie} />;
          return lista;
        })}
      </section>
    );
  }
}
export default MovieList;
