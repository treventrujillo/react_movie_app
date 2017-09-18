import React from 'react';
import MovieForm from './MovieForm';
import Movie from './Movie';
import { Header } from 'semantic-ui-react';

class MovieList extends React.Component {
  state = { movies: [] }

  addMovie = (movie) => {
    const { movies } = this.state;
    this.setState({ movies: [movie, ...movies] })
  }

  render() {
    const { movies } = this.state;
    const movieList = movies.map( m => <Movie key={m.id} {...m} /> );
    return (
      <div>
        <Header as="h1">Movie List</Header>
        <hr />
        <MovieForm addMovie={this.addMovie} />
        { movieList } 
      </div>
    );
  }
}

export default MovieList;