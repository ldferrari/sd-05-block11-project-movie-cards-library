// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <section className="movies">
        <div>
          <h4>{this.props.title}</h4>
          <h5>{this.props.subtitle}</h5>
          <p>{this.props.storyline}</p>
        </div>
        <div>
          <img src={this.props.imagePath} alt="Capa do filme" />
          <p>{this.props.rating}</p>
        </div>
      </section>
    );
  }
}

export default MovieCard;
