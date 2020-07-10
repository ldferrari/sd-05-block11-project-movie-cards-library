// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className="movieCard">
        <div className="movieTitle"><h4>{title}</h4></div>
        <div className="movieSubtitle"><h5>{subtitle}</h5></div>
        <div className="movieStory"><p>{storyline}</p></div>
        <img src={imagePath} alt={title} className="movieImage">
        <div className="movieRating"><Rating rating={rating} /></div>v>
      </div>
    );
  }
}

export default MovieCard;
