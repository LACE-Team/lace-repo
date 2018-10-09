import React, { Component } from 'react';
import { connect } from 'react-redux';


class LogControl extends Component {

  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/google" className="link dim gray f6 f5-ns dib mr3">Login With Google</a>
        );
      default:
        return [
          <a href="/api/logout" className="link dim gray f6 f5-ns dib mr3">Logout</a>
        ];
    }
  }

  render() {
    return(
      <nav>
          <div className="nav-wrapper">
              {this.renderContent()}
          </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(LogControl);