import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Quotes from './components/Quotes';
import About from './components/About';
import './App.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
      </Switch>
    </Router>
  );
}
