import React from 'react';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.cards;
    return (
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{rating}</p>
        <img src={imagePath} alt="Imagem dos filmes"/>
      </div>
    );
  }
}

export default MovieCard;
