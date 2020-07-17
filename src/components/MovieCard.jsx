import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movie">
        <h4 className="text-center">{title}</h4>
        <h5 className="text-center">{subtitle}</h5>
        <p>{storyline}</p>
        <img src={imagePath} alt={title} className="pictures" />
        <Rating rating={rating} />
      </div>
    );
  }
}

export default MovieCard;
