// implement MovieCard component here
import React from 'react';
import Rating from './Rating.jsx';


class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movies;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={imagePath} alt={title} />
        <Rating rating={rating} />
      </div>
    );
  }
}

export default MovieCard;
