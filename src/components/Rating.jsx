// implement Rating component here
import React from 'react';
// import data from './data.js';

class Rating extends React.Component {
  render() {
    return (
      <div className="movie-card-rating">
        <button className="rating">{this.props.rating}</button>
      </div>
    );
  }
}

export default Rating;
