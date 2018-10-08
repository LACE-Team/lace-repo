/* eslint-disable */
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Footer from './Footer';
import TwitterFeed from './TwitterFeed';
import FacebookFeed from './FacebookFeed';
import './Landing.css';


window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {
    t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));

const style = {
    panelLayout:{
        width: '50%',
        border: "solid gray 2px"
        // backgroundColor: 'orange'
    }
}

// const Landing = () => <h1>Hello Landing! </h1>;
class Landing extends Component {

    state = {
        TwitterClass: '',
        FacebookClass: 'notShown',
        value: ''
    };

    FacebookButton = (e) => {
        e.preventDefault();
        console.log("facebook buttonnnnnnn")
        this.setState({
            TwitterClass: 'notShown',
            FacebookClass: ''
        })

    }
    TwitterButton = (e) => {
        e.preventDefault();
        console.log("twitter buttonnnnnnn")
        this.setState({
            TwitterClass: '',
            FacebookClass: 'notShown'
        })
    }

    render() {
        return (
            <div>
                <div
                    className="feeds"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        justifyItems: 'center',
                        padding: '0px',
                        width: '100%',
                    }}>
                    <div style={{ width: "100%"}}>
                        <TwitterFeed className={this.state.TwitterClass}/>
                        <FacebookFeed className={this.state.FacebookClass}/>
                        <div className="btn-group" style={{ width: "100%", borderStyle: "solid" }}>
                            <button style={{ width: "50%" }} onClick = {this.TwitterButton}>Twitter</button>
                            <button style={{ width: "50%" }} onClick = {this.FacebookButton}>Facebook</button>
                        </div>
                    </div>
                </div>
                <div className="postalCodeSearch" style={{marginTop: "0px", marginBottom: "0px", height: "150px", backgroundColor: 'blue'}}>
                    <h3>Not Sure who your MPP is?</h3>
                    <SearchBar />
                </div>
                <div className='' style={{width: '100%', display: '-webkit-box', height: '365px', marginBottom: '0px'}}>
                    <div className='legislatureToday' style={ style.panelLayout}>
                        <h2>Legislature Today</h2>
                        <div> [Content Here]</div>
                    </div>
                    <div className="billsToday" style={ style.panelLayout}>
                        <h2>Recent Bills</h2>
                        <div> [Content Here]</div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default Landing;
