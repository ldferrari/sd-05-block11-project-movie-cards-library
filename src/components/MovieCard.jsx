// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className="movie-container">
        <div className="movie-img">
          <img src={imagePath} alt={title} />
        </div>
        <div className="movie-details">
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <div className="rating-movie">
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}
export default MovieCard;
