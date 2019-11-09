import React from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import './App.css';

export default function QRPrinter(props) {
    const hash = props.match.params.hash;
  return (
    <div className="App">
      <header className="App-header">
        <QRCode value={hash} level="M"></QRCode>
        <br/>
        <br/>
        <br/>
        <p>{hash}</p>
      </header>
    </div>
  );
}
