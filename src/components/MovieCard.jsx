// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
    render() {
      const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
      return(
        <div className='movie-container'>
          <div className='movie-details'>
            <p> Title: { this.props.movie.title } </p>
            <p> Subtitle: { this.props.movie.subtitle } </p>
            <p> Rating: { this.props.movie.rating } </p>
            <p> StoryLine: { this.props.movie.storyline } </p>
          </div>
          <div className='movie-img'>
            <img src={ imagePath } alt={ title } />
          </div>
        </div>

      )
    }
}

export default MovieCard;