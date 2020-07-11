import React from 'react';
import '../App.css';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
        <img src={imagePath} alt="card de filmes" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <div>{<Rating rating={rating} /> }</div>
      </div>
    );
  }
}

export default MovieCard;
