import React from 'react';
import logo from './nathan.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <My Name is Nathan and I am going to master React>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/nathanok"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check me Out
        </a>
      </header>
    </div>
  );
}

export default App;
