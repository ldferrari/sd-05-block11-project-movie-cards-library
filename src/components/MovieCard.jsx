// implement MovieCard component here
import React from 'react';

// 6. MovieCard recebe prop movie, objeto contendo propriedades title, subtitle, storyline, imagePath e rating.
// 7. Renderiza tag img, src com valor da propriedade imagePath.

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <img src={this.props.movie.imagePath}></img>
    );
  }
}

export default MovieCard;
