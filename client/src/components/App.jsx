import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import io from 'socket.io-client/dist/socket.io.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      socket: null
    }
  }
  componentWillMount() {
    this.socket = io('http://localhost:4155', {
      query: {
        roomId: 'hey'
      }
    });
    this.setState({ socket: this.socket });
  }
  render() {
    return (
      <div>
        <h1>Hello from React</h1>
        <input type="text"></input>
        <button type="submit">submit</button>
      </div>
    )
  }
}

export default App;