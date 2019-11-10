import React from 'react';
import {history, HASH_ATTR, reset} from './HashStore';
import './App.css';

export default function Intro(props) {
  return (
    <div>
      <h2>Forestry blockchain demo</h2>
      <a href="/issue">Issue new raw material codes</a>
      <div>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
