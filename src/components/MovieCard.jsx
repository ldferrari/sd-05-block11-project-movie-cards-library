import React from 'react'
import Rating from './Rating'

class MovieCard extends React.Component {
  render() {
    return (
      <div>

      <img className="movie-card-image" src={this.props.movie.imagePath}></img>
      {/* i had to specify props.movie because there was also the key prop */}
      <h4>{this.props.movie.title}</h4>
      <h5>{this.props.movie.subtitle}</h5>
      <p>{this.props.movie.storyline}</p>
      <Rating rating={this.props.movie.rating} />

      </div>
    )
  } 
}

export default MovieCard;
