// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
    render() {
      return(
        <div className='movie-container'>
          <div className='movie-details'>
            <p> Title: { this.props.movie.title } </p>
            <p> Subtitle: { this.props.movie.subtitle } </p>
            <p> Rating: { this.props.movie.rating } </p>
            <p> StoryLine: { this.props.movie.storyline } </p>
          </div>
          <div className='movie-img'>
            <img src={ this.props.movie.imagePath } />
          </div>
        </div>

      )
    }
}

export default MovieCard;