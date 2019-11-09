import React from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import {history, HASH_ATTR} from './HashStore';
import './App.css';

export default function QRHistory(props) {
    const hash = props.match.params.hash;
    const list = history(hash);
    console.log("HISTORY: " + JSON.stringify(list));
  return (
    <div className="App">
      <header className="App-header">
          {list.map((value, index) => {
          return <h3>{value[HASH_ATTR]}</h3>
          })}
        </header>
    </div>
  );
}
