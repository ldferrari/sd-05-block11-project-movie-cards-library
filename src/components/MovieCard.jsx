// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movie-card">
        <img className="movie-image" src={imagePath} alt="" />
        <h4 className="movie-title">{title}</h4>
        <h5 className="movie-subtitle">{subtitle}</h5>
        <p className="movie-storyline">{storyline}</p>
        <Rating className="movie-rating" rating={rating} />
      </div>
    );
  }
}

export default MovieCard;
