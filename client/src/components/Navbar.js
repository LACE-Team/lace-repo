import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="pa3 pa4-ns">
    <Link to="/" className="link dim black b f6 f5-ns dib mr3" title="Home">
      Site Name
    </Link>
    <Link to="/signup" className="link dim gray    f6 f5-ns dib mr3" title="signup">
      Sign Up
    </Link>
    <Link to="/login" clasclassNames="link dim gray    f6 f5-ns dib mr3" title="login">
      Login
    </Link>
    <Link to="/test" className="link dim gray    f6 f5-ns dib mr3" title="Shortcut for testing">
      Shortcut for test?
    </Link>
  </nav>
);

export default Navbar;
