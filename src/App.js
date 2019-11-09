import React from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <QRCode value="Hello world!" level="M"></QRCode>
        </a>
      </header>
    </div>
  );
}

export default App;
