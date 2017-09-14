require('../styles/App.css');
require('../styles/Login.css');

import React from 'react';
import ChatApp from './ChatApp';

// This is the first screen seen by the user. We should display some way for
// them to enter their name and enter the chat room
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    // Bind 'this' to event handlers. react es6 doesn't do this by default
  this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
  this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username});
  }
  render() {
    if (this.state.submitted) {
      // form was submitted, now show the main App
      return (
        <ChatApp username={this.state.username} />
      );
    }

    // Initial page load, show a simple login form
    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
      <h1>REACT INSTANT CHAT </h1>
      <div>
        <input
        type="text"
        onChange={this.usernameChangeHandler}
        placeholder="ENTER USERNAME"
        required />
      </div>
      <input type="submit" value="Submit"/>
    </form>
    );   
  }
}

App.defaultProps = {
};

export default App;
