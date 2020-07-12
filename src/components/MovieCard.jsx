// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
    return (
      <div>
        <strong><h4>{title}</h4></strong>,
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        tested by {rating}
        with <img src={imagePath} alt={title} />
      </div>
    );
  }
}
export default MovieCard;
