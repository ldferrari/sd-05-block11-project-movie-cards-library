// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title } = this.props.movie;
    return (
        <div className="movie-card">
          {title}
        </div>
      );
  }
}

export default MovieCard;
