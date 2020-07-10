// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;
    return (
      <div className="movie-card">
        <h2 className="movie-card-title">{title}</h2>
        <h3 className="movie-card-subtitle">{subtitle}</h3>
        <p className="movie-card-storyline">{storyline}</p>
        <img src={imagePath} className="movie-card-image" />
      </div>
    );
  }
}

export default MovieCard;
