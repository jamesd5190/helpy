import React, { Component } from 'react';
import { Link } from 'react-router';

import Logo from './Logo';

import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <Link to="/">
          <div className="header-logo"><Logo fill="#ff3ccc" /></div>
        </Link>
        <ul className="header-menu">
          <li><Link to="/support" activeClassName="red">I want to help</Link></li>
          <li><Link to="/help" activeClassName="red">I need help</Link></li>
        </ul>
        <Link to="/">
          <div className="notification"><img src="/img/notification.svg" width="50px" /></div>
        </Link>
      </header>
    );
  }
}

export default Header;
