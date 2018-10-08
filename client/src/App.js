/* eslint-disable */
// eslint disbale to be removed once states added.
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import compoenents
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import SelectedDash from './components/SelectedDash';
import UserDash from './components/UserDash';
import fakeData from './fakedata';
import Login from './components/Login';
import Signup from './components/Signup';
import listMPPS from './components/AllMPPS';

// styling
import './App.css';

class App extends Component {
  state = {
    login: 'false'
  }

  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div>
        <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/test" component={SelectedDash} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/user"
          render={(props) =>
            fakeData.map(follow => (
              <UserDash {...props}
                item={follow}
                />)
              )
            }
          />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
