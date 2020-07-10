// implement MovieCard component here
import React from 'react';
// import Rating from '.component/Rating.jsx';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movies;
    const { rating } = this.props.rating;
    return (
      <div>
        <img src={imagePath} alt="imagem" />,
        <h4>{title}</h4>,
        <h5>{subtitle}</h5>,
        <p>{storyline}</p>,
        {rating}
      </div>
    );
  }
}

export default MovieCard;
