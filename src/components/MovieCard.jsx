// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div className='movie-container'>
        
        <div className='movie-thumbnail'>
          <img src={imagePath} alt={title} />
        </div>

        <div className='movie-info'>
          <p> Title: {title} </p>
          <p> Subtitle: {subtitle} </p>
          <p> Rating: {rating} </p>
          <p> Storyline: {storyline} </p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
