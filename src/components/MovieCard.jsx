import React from 'react';

function movieCard(props) {
  return (
    <div>
      <img src={props.imagePath} alt="Film card" width="300px" />
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>Storyline: {props.storyline}</p>
      <p>Rating: {props.rating}</p>
    </div>
  );
}

export default movieCard;
