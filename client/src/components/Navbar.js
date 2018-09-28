import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="pa3 pa4-ns">
    <Link to="/" className="link dim black b f6 f5-ns dib mr3" title="Home">
      In Their Own Words!
    </Link>
    <Link to="/signup" className="link dim gray f6 f5-ns dib mr3" title="signup">
      Sign Up
    </Link>
    <Link to="/login" className="link dim gray f6 f5-ns dib mr3" title="login">
      Login
    </Link>
    <Link to="/test" className="link dim gray f6 f5-ns dib mr3" title="Shortcut for testing">
      Test!
    </Link>
  </nav>
);

export default Navbar;
