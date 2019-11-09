import React from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import './App.css';

export default function QRPrinter() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <QRCode value="Content" level="M"></QRCode>
        </a>
        <br/>
        <br/>
        <br/>
        <p>Content</p>
      </header>
    </div>
  );
}
