// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
        <strong><h4>{title}</h4></strong>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={imagePath} alt={title} />
        <Rating rating={rating} />
      </div>
    );
  }
}
export default MovieCard;
