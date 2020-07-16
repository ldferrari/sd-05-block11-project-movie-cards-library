// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.rating}</div>
      </div>
    );
  }
}

export default Rating;
