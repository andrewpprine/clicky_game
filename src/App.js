import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Clicky Memory Game</h1>
        </header>
        <p className="App-intro">
          Click a food, any food. Then click another DIFFERENT food.
        </p>
        <p className="App-intro">
          With each click, the pictures will shuffle.
        </p>
        <p className="App-intro">
          Get a point for each time you click a different food, but if you click one a second time then you'll reset to 0.
        </p>
        <p className="App-intro">
          <b>Happy clicking, and try not to get too hungry.</b>
        </p>
      </div>
      <div id="pictures">

      </div>
    );
  }
}

export default App;
