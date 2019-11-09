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
import QRRegister from './QRRegister';

export default function App() {
  return (
    <Router>
      <div class="App">
        <nav class="App-nav">
          <div>
            <Link to="/">Home</Link>
          </div>
           <div>
              <Link to="/printer">Printer</Link>
            </div>
            <div>
              <Link to="/issue">Issue</Link>
            </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Router path="/issue">
            <QRIssuer></QRIssuer>
          </Router>
          <Route path="/register/:hash" component={QRRegister} />
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