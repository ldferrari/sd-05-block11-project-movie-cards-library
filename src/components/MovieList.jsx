import React from 'react';
import MovieCard from './MovieCard';
//class nomeDoComponete extends React.Component{render(){}}
class MovieList extends React.Component {
  render() {
    //props transmite informações para os componentes
    const { movies } = this.props;
    return (
      <div>
        {movies.map(value => <MovieCard key={value.title} movie={value} />)}
      </div>
    ) 
      
  }
}

export default MovieList;

