import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';

import Header from 'components/Header';
import Counter from 'components/Counter';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App;
