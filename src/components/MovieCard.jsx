// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <section className='movie-container'>
        <div className='movie-thumbnail'>
          <img src={imagePath} alt={title} />
        </div>
        <div className='movie-info'>
          <h4>{title}</h4>
          <h5>{subtitle}</h5>
          <p>{storyline}</p>
        </div>
        <div className='movie-rating'>
          <Rating rating={rating} />
        </div>
      </section>
    );
  }
}

export default MovieCard;
