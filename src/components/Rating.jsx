// implement Rating component here
import React from 'react';
// import data from './data.js';

class Rating extends React.Component {
  render() {
    return (
      <div className="rating">{this.props.rating}</div>
    );
  }
}

export default Rating;
