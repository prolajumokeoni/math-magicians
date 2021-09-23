import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <section>
    <div className="d-flex justify-content-between pt-3">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/about" className="nav-link link-dark fs-4 fw-bolder">Math Magicians</Link>
        </li>
      </ul>
      <ul className="nav">
        <li className="nav-item">
          <u><Link to="/about" className="nav-link border-end">Home</Link></u>
        </li>
        <li className="nav-item">
          <u><Link to="/calculator" className="nav-link border-end">Calculator</Link></u>
        </li>
        <li className="nav-item">
          <u><Link to="/Quotes" className="nav-link border-end">Quotes</Link></u>
        </li>
      </ul>
    </div>
  </section>
);

export default Navbar;
