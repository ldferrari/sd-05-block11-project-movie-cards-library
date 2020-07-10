// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.filmes;
    return (
      <div className="listadefilmes">
        {title},
        {subtitle},
        {storyline},
        {rating},
        {imagePath},
        <img className="movie_card" src={image}></img>
      </div>
    );
  }
}

export default MovieCard;
