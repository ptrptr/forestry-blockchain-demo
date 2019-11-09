import React from 'react';
import QRPrinter from './QRPrinter';
import QRIssuer from './QRIssuer';
import QRHistory from './QRHistory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/printer">Printer</Link>
            </li>
            <li>
              <Link to="/issue">Issue</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Router path="/issue">
            <QRIssuer></QRIssuer>
          </Router>
          <Route path="/printer/:hash" component={QRPrinter} />
          <Route path="/history/:hash" component={QRHistory} />
          <Router path="/">
            <QRPrinter />
          </Router>
        </Switch>
      </div>
    </Router>        
    );
}