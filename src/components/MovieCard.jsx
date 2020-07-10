// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div className='movieCard'>
        <div className='movieTitle'>{title}</div>
        <div className='movieSubtitle'>{subtitle}</div>
        <div className='movieStory'>{storyline}</div>
        <div className='movieImage'>{imagePath}</div>
        <div className='movieRating'>{rating}</div>
      </div>
    )
  }
}

export default MovieCard;