import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Footer from "./Footer";
import "./Landing.css"
// import {Tabs, Tab} from 'react-bootstrap-tabs';
const styles = {
    feed: {
        borderStyle: "solid",
        height: "200px",
        width: "30%",
        margin: "auto",
        marginTop: "15px"
    }
}

class Landing extends Component {

   


    render () {
        return (
            <div>
                <SearchBar />
                <div className="feeds" style={{ display: "flex", justifyContent: "center", justifyItems: "center", padding: "0px", width: "100%", borderStyle: "solid"}}>
                    <div style={{width: "100%"}}>
                        <h3 id="twitter">
                            Twitter content here
                        </h3>
                        <h3 id="facebook" className="notShown">
                            Facebook Content
                        </h3>
                        <div className="btn-group" style={{width:"100%", borderStyle: "solid"}}>
                            <button style={{width:"50%"}}>Twitter</button>
                            <button style={{width:"50%"}}>Facebook</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
    


export default Landing;
