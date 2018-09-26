import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render(){
    return (
      <nav class="pa3 pa4-ns">
        <Link to={'/'}  class="link dim black b f6 f5-ns dib mr3" href="#" title="Home">Site Name</Link>
        <Link to={'/signup'}  class="link dim gray    f6 f5-ns dib mr3" href="#" title="signup">Sign Up</Link>
        <Link to={'/login'}  class="link dim gray    f6 f5-ns dib mr3" href="#" title="login">Login</Link>
        <Link to={'/profile'}  class="link dim gray    f6 f5-ns dib mr3" href="#" title="other">other?</Link>
      </nav>
    )
  }
}

export default Navbar;