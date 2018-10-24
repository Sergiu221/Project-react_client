import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	
	
  state = {};

    componentDidMount() {
        setInterval(this.hello, 250);
    }

    hello = () => {
        fetch('http://localhost:8080/greeting')
            .then(response => response.text())
            .then(message => {
                this.setState({message: message});
            });
    };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
			aha
			<h1>{this.state.message}</h1>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
