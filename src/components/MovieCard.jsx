import React from 'react';
import Rating from './Rating'

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className='movie-card'>
        <img className='image-cards' src={imagePath} alt={title} width='250px' />
        <div className='title-cards'><h4>{title}</h4></div>
        <div className='subtitle-cards'><h5>{subtitle}</h5></div>
        <div className='storyline-cards'><p>{storyline}</p></div>
        <div className='rating-cards'>
          <p>Rating</p>
          <Rating rating={rating} />
        </div>
      </div>
    )
  }
}

export default MovieCard;
