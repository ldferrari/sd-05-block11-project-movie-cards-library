import React from 'react';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard'
import '../App.css';

class MovieList extends React.Component {
	render() {
		const { movies } = this.props;
		return (
			<div>
				{movies.map((elemento, index) => <MovieCard key={index} cards={elemento} />)}
			</div>
		);
	}
}

export default MovieList;
	