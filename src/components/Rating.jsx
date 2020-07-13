// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    const divstl = {
      width: '10%',
      height: '10%',
    };
    return (
      <div className="rating" style={divstl}> {rating} </div>
    );
  }

}
export default Rating;
