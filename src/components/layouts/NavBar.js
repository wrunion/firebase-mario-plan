import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">MarioPlan</Link>
        <SignedInLinks />
      </div>
    </nav>
  );
}

export default NavBar;