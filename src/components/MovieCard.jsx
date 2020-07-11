import React from 'react';


class MovieCard extends React.Component {
  render() {
    const { imagePath, title, subtitle, storyline, rating } = this.props.movie;
    return (
      <div>
        <img src={imagePath} alt="Film card" width="300px" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <div>{rating}</div>
      </div>
    );
  }
}

export default MovieCard;
