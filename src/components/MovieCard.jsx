// implement MovieCard component here
import React from 'react';
import Rating from './Rating';


class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <section className="movie-card">
        <img src={imagePath} alt="" className="movie-card-image" />
        <section className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating rating={rating} />
        </section>
      </section>
    );
  }
}
export default MovieCard;
