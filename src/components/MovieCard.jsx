// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.filmes;
    return (
      <div className="listadefilmes">
        <title>{title}</title>,
        <h1>{subtitle}</h1>,
        <h2>{storyline}</h2>,
        {rating}
        <img className="movie_card" src={imagePath} alt="imagem_card" />
      </div>
    );
  }
}

export default MovieCard;
