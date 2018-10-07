/* eslint-disable */
import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Login Here</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </label>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </label>
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer" htmlFor="rembM">
              Remember me
              <input id="rembMe" type="checkbox" />
            </label>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Login"
            />
          </div>
          <div className="lh-copy mt3">
            <a href="#0" className="f6 link dim black db">
              Login!
            </a>
            <a href="#0" className="f6 link dim black db">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
