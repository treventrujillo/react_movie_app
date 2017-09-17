import React, { Component } from 'react';
import { Container } from 'semantic-ui-react;'

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Container>
          <MovieList />
        </Container>
      </div>
      
    );
  }
}

export default App;
