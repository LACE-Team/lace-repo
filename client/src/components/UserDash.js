/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import MppInfo from './dashComponents/Mppinfo';
import './userStyle.css';

// const styles = {
  // layout:hover {
  //   color: blue
  // },
// };

class UserDash extends Component {

  // component render
  // componentDidMount(){
  //   this.shouldNavigateAway();
  // }

  // // component just got updated
  // componentDidUpdate(){
  //   this.shouldNavigateAway();
  // }

  // shouldNavigateAway(){
  //   if(!this.props.auth){
  //     console.log("You are not logged in");
  //     this.props.history.push('/')
  //   }
  // }


  render(){
    return(
      <main className="mw6 center">
        <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div className="dtc w2 w3-ns v-mid">
            <img src={this.props.item.picture} className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" alt="some pic" />
          </div>
          <div className="dtc v-mid pl3">
            <h1 className="f6 f5-ns fw6 lh-title black mv0">{this.props.item.name} </h1>
            <h2 className="f6 fw4 mt0 mb0 black-60">{this.props.item.position}</h2>
          </div>
          <div className="dtc v-mid">
            <form className="w-100 tr label">
              <div className="f6 button-reset bg-white dim pointer pv1 black-60" />
            </form>
          </div>
        </article>
      </main>
    )
  }
}

function mapStateToProps(state){
  return {auth: state.auth}
}


export default connect(mapStateToProps, actions)(UserDash);
// export default UserDash;
