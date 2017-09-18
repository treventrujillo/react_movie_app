import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import MovieList from './components/MovieList';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Container textAlign="center" style={{ marginTop: '15px' }}>
          <MovieList />
        </Container>
      </div>
      
    );
  }
}

export default App;
