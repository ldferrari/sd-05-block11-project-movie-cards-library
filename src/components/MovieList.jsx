import React from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies.map((e) => < MovieCard movie={e} /> )}
      </div>
    );
  }
}
