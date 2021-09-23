import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="d-flex justify-content-between">
    <ul className="nav">
      <li className="nav-item">
        <Link to="/" className="nav-link">Math Magicians</Link>
      </li>
    </ul>
    <ul className="nav">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/calculator" className="nav-link">Calculator</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/Quotes" className="nav-link">Quotes</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
