import React from 'react';
import MovieCard from './MovieCard'
import data from '../data'
class MovieList extends React.Component {
  render () {
    const Movies = this.props.movies
    return (
      <div>
        {Movies.map(each => <MovieCard movie={each} key={each.title}/>)}
      </div>
    )
  }
} 

export default MovieList