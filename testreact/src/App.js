
import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FIXME!
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

function Test() {
  return (
    <div className="Test">
      <header>
      <h1>Welcome to Mentor Portal!</h1>
      <img src={logo} />
        <nav>
          <ul>
            <li><a href="#.html">ABOUT US</a></li>
            <li><a href="#.html">MENTOR</a></li>
            <li><a href="#.html">EXPEDITIONS</a></li>
            <li><a href="#.html">CONTACT US</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;