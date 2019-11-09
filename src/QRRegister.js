import React from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import {find, HASH_ATTR} from './HashStore';
import './App.css';

export default function QRRegister(props) {
    const parent = props.match.params.hash;
    const parentObject = find(parent);    
    return (
        <div>
            <h3>Register product</h3>
            <p>Source: {parent}></p>
            <button>Register</button>
        </div>
    );
}
