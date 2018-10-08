/* eslint-disable */
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import React from 'react';

const Navbar = () => (
  <nav className="pa3 pa4-ns">
    <Link to="/" className="link dim black b f6 f5-ns dib mr3" title="Home">
      In Their Own Words!
    </Link>
    <SearchBar/>
    <a href="/auth/google" className="link dim gray f6 f5-ns dib mr3" title="login">
      Login with Google
    </a>
    <a href="/api/logout" className="link dim gray f6 f5-ns dib mr3" title="signup">
      Logout
    </a>
    <Link to="/test" className="link dim gray f6 f5-ns dib mr3" title="Shortcut for testing">
      Test!
    </Link>
    <Link to="/User" className="link dim gray f6 f5-ns dib mr3" title="User Page">
      User Page
    </Link>
      </nav>
    )

export default Navbar;
