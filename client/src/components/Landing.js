/* eslint-disable */
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Footer from './Footer';
import TwitterFeed from './TwitterFeed';
import FacebookFeed from './FacebookFeed';
import './Landing.css';
import BillsFeed from './dashComponents/BillsFeed';
import API from '../utils/API';
import {Animated} from "react-animated-css";

window.twttr = (function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://platform.twitter.com/widgets.js';
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
})(document, 'script', 'twitter-wjs');

const style = {
    panelLayout: {
    width: '50%',
    // border: 'solid gray 2px'
    textAlign: 'left'
    },
    feed:{
      display: 'flex',
      justifyContent: 'center',
      justifyItems: 'center',
      padding: '0px',
      width: '50%'
    },
    "gtn-group":{
      width: '100%',
      backgroundColor: '#064373',
      borderTopColor: 'crimson',
      borderTopStyle: 'solid'
    },
    socialBtn:{
      width: '50%'
    },
    postalCodeSearch:{
        width: '100%',
        display: '-webkit-box',
        height: '365px',
        marginBottom: '0px'
    },
    partitionL:{
      display:'flex'
    }
};

class Landing extends Component {
  state = {
    TwitterClass: '',
    FacebookClass: 'notShown',
    value: '',
    recentBill: []
  };

  loadRecentBills = () => {
    API.getRecentBills()
      .then(res => {
        this.setState({ recentBill: res.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadRecentBills();
  }

  FacebookButton = e => {
    e.preventDefault();
    console.log('facebook buttonnnnnnn');
    this.setState({
      TwitterClass: 'notShown',
      FacebookClass: ''
    });
  };

  TwitterButton = e => {
    e.preventDefault();
    console.log('twitter buttonnnnnnn');
    this.setState({
      TwitterClass: '',
      FacebookClass: 'notShown'
    });
  };
  // scroll = setInterval(function(){ window.scrollBy(0,1000); }, 2000);

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    return (
      <Animated animationIn="fadeInRight" animationOut="fadeOutLeft" isVisible={true}>
      <div className='partitionL' style={style.partitionL}>
      <div
          className="feeds"
          style={style.feed}
        >
          <div style={{ width: '100%' }}>
            <TwitterFeed className={this.state.TwitterClass} />
            <FacebookFeed className={this.state.FacebookClass} />
            <div
              className="btn-group"
              style={style["gtn-group"]}
            >
              <button style={style.socialBtn} onClick={this.TwitterButton}>
                Twitter
              </button>
              <button style={style.socialBtn} onClick={this.FacebookButton}>
                Facebook
              </button>
            </div>
          </div>
        </div>
        <div className="billsToday" style={style.panelLayout}>
          <h2>Recent Bills</h2>
          <BillsFeed recentBill={this.state.recentBill} />
        </div>
      </div>

        <div
          className="postalCodeSearch"
          style={{
            marginTop: '0px',
            marginBottom: '0px',
            height: 'auto',
            backgroundColor: 'grey',
            paddingBottom: '20px',
            paddingTop: '20px'
          }}
        >
          <h3>Not Sure who your MPP is?</h3>
          <a
            href="https://voterinformationservice.elections.on.ca/en/election/search?mode=postalCode"
            target="blank"
          >
            Click here to search by postal code
          </a>
        </div>
        <div
          className=""
          style={{
            width: '100%',
            display: '-webkit-box',
            height: '365px',
            marginBottom: '0px'
          }}
        />
        <Footer />
        </Animated>
    );
  }
}

export default Landing;
