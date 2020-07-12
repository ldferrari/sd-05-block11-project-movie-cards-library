import React from 'react';
import Rating from './Rating'
import movies from '../data';
// implement MovieCard component here
class MovieCard extends React.Component {
    render() {
       const {title, subtitle, storyline, imagePath} = this.props.movie
        return (
        <div className='movie-card' key={title}>
            <img className='movie-card-image' src={imagePath}/>
            <div className='movie-card-body'>
                <h4 className='movie-card-title'>{title}</h4>
                <h5 className='movie-card-subtitle'>{subtitle}</h5>
                <p className='movie-card-storyline'>{storyline}</p>
            </div>
        </div>
        )
    }
}

export default MovieCard