import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sell">Sell</Link>
          </li>
          <li>
            <Link to="/rent">Rent</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;