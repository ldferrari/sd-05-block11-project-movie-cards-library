import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export default MovieCard;
