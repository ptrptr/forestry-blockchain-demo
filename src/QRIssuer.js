import React from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import './App.css';
import {issue} from './HashStore';

export default function QRPrinter() {
  var values = [1,2,3,4,5,6,7,8,9,10];
  var hashes = values.map((value) => {
    return issue({"seq":value});
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Issued {values.length} QR codes</p>
        <ul>
            {hashes.map((value, index) => {
                return <li key={index}>{index}:<a href={value}><QRCode value={value} level="M"></QRCode></a></li>
            })}
        </ul>
      </header>
    </div>
  );
}
