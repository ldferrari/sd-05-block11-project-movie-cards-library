// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return (
      <div>
        {title}
        {subtitle}
        {storyline}
        {rating}
        <img alt={`Picture of ${title} movie`} src={imagePath} />
      </div>
    );
  }
}

export default MovieCard;
