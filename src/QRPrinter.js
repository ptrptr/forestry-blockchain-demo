import React from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import './App.css';
import {find} from './HashStore';

export default function QRPrinter(props) {
    const hash = props.match.params.hash;
    const o = find(hash);
    function subproduct() {
      props.history.push("/register/" + hash);
    }
    function history() {
      props.history.push("/history/" + hash);
    }
  return (
    <div>
      <table>
        {Object.entries(o).map((entry,index)=> {
          if(entry[0][0] != '_') {
            return <tr><td>{entry[0]}:</td><td>{JSON.stringify(entry[1])}</td></tr>
          }
        })}

      </table>
      <div>
          <QRCode value={hash} level="M"></QRCode>
          <br/>
          <br/>
          <br/>
          <p>{hash}</p>
      </div>
      <button onClick={subproduct}>Create subproduct</button>
      <button onClick={history}>Show history</button>
    </div>
  );
}
