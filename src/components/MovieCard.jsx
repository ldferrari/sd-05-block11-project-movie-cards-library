// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <section className="movies">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={imagePath} alt="Capa do filme" />
        <p>{rating}</p>
      </section>
    );
  }
}

export default MovieCard;
