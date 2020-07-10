// implement MovieCard component here
import React from 'react';
import Rating from './Rating'

class MovieCard extends React.Component {
  render(){
    const {imagePath, title, subtitle, storyline, rating} = this.props;
    return(
      <section className='movie-card'>
        <div className='movie-card-header'>
          <img className='movie-card-image' src={ imagePath } alt={ title }/>
        </div>
        <div className='movie-card-body'>
          <h4 className='movie-card-title'>{ title }</h4>
          <h5 className='movie-card-subtitle'>{ subtitle }</h5>
          <p className='movie-card-storyline'>{ storyline }</p>
          <Rating rating={ rating } className='movie-card-rating'/>
        </div>
      </section>
    )
  }
}

export default MovieCard