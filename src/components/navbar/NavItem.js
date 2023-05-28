import React from 'react';
import { Link } from 'react-router-dom';

function NavItem() {
    return (
      <nav className="overlay">
        <ul>
          <Link to="/">
            <li>
              <p>All</p>
            </li>
          </Link>
          <Link to="/new">
            <li>
              <p>New</p>
            </li>
          </Link>
          <Link to="/upcoming">
            <li>
              <p>Upcoming</p>
            </li>
          </Link>
        </ul>
      </nav>
    );
}

export default NavItem;
