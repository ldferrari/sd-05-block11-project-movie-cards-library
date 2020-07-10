// implement MovieList component here
import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    return (
      movies.map(
        (film) => <MovieCard
          key={film.title}
          imagePath={film.imagePath}
          title={film.title}
          subtitle={film.subtitle}
          storyline={film.storyline}
          rating={film.rating}
        />
      )
    );
  }
}

export default MovieList;
