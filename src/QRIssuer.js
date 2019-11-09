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
        <p>Issued {values.length} QR codes</p>
        {hashes.map((value, index) => {
        return <div><h2>{value}</h2><a href={value}><QRCode value={value} level="M" size="120"></QRCode></a></div>
        })}
        </header>
    </div>
  );
}
