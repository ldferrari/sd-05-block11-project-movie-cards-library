import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;
    return (
      <div className="movie-card">
        <section className="movie-card-body">
          <div className="row_inner">
            <img src={imagePath} alt={title} className="movie-card-image" />
            <h4 className="movie-card-title">{title}</h4>
            <h5 className="movie-card-subtitle">{subtitle}</h5>
            <p className="movie-card-storyline">{storyline}</p>
          </div>
        </section>
        <Rating rating={rating} />
      </div>
    );
  }
}

export default MovieCard;
