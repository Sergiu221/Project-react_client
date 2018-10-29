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
        </header>
		<p> Clean client </p>
      </div>
    );
  }
}

export default App;
