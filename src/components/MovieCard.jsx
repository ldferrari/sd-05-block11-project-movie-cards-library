// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <section className="movies">
        <div>
          <p>{this.props.title}</p>
          <p>{this.props.subtitle}</p>
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
