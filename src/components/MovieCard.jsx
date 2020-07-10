import React from 'react';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <p>{rating}</p>
        <img src={imagePath} alt="Imagem dos filmes" />
      </div>
    );
  }
}

export default MovieCard;
