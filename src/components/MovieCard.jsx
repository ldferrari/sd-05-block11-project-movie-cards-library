import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className="movie-card">
        <img className="image-cards" src={imagePath} alt={title} width="250px" />
        <h4 className="title-cards">{title}</h4>
        <h5 className="subtitle-cards">{subtitle}</h5>
        <p className="storyline-cards">{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

export default MovieCard;
