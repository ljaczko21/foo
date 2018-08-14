import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myFavNumber: 1,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <div>
        <h1>Hello, Lily. Add things here in App.js!</h1>
        <Button onClick={() => this.setState({ myFavNumber: this.state.myFavNumber+1})}>
          My Fav # is {this.state.myFavNumber}
        </Button>
      </div>
      </div>
    );
  }
}

export default App;
