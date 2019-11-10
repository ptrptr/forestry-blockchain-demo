import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import {history, HASH_ATTR, reset} from './HashStore';
import './App.css';

export default function Intro(props) {
  return (
    <div>
      <h2>Forestry blockchain demo</h2>
      <Link to="/issue">Issue new raw material codes</Link>
      <div>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
