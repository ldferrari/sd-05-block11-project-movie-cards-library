import React from 'react';
import Movie from '../data';
import MovieCard from './MovieCard';

function movieList() {
  return (
    <div>
      {MovieCard(Movie[0])}
      {MovieCard(Movie[1])}
      {MovieCard(Movie[2])}
      {MovieCard(Movie[3])}
      {MovieCard(Movie[4])}
    </div>
  );
}

export default movieList;
