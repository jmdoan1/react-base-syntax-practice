import React, { Component } from 'react';
import './App.css';

import UserInput from './Components/UserInput/UserInput'
import UserOutput from './Components/UserOutput/UserOutput'

class App extends Component {
  state = {
    username: "",
    message: ""
  };

  textChangedHandler = (event) => {
    if (event.target.name === "username") {
      this.setState({
        username: event.target.value
      })
    } else if (event.target.name === "message") {
      this.setState({
        message: event.target.value
      })
    }
  };

  clearAll = () => {
    this.setState({
      username: "",
      message: ""
    })
  }

  render() {
    return (
      <div className="App">
        <h1>GROUP CHAT</h1>
        <UserOutput
          username="Jmdoan1"
          message="Welcome, everyone!"
        />
        <UserOutput
          username="OhNikkaaay"
          message="Hey guys, what's up?"
        />
        <UserInput 
          username={this.state.username}
          message={this.state.message}
          changed={this.textChangedHandler}
          clearFunction={this.clearAll}
        />
        {/* <UserInput 
          label="Message"
          changed={this.textChangedHandler}
          customTag="message"
        /> */}
        <UserOutput
          username={this.state.username}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
