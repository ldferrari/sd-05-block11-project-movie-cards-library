// implement Rating component here
import React from 'react';

class Raiting extends React.Component {
  render() {
    return (
      <div className="rating">{this.props.rating}</div>;
    );
  }
}

export default Raiting;
