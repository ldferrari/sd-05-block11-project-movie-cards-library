import React, { Component } from 'react';
import Rating from '../components/Rating';
export default class CardMovies extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movies;
    return (
      <div className="movie-card">
        <img src={imagePath} alt="Foto-Card" className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}
