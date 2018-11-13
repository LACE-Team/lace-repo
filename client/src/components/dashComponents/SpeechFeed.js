/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import "./voting.css";

const styles = {};

styles.rightA = {
  marginRight: '0px',
};

class SpeechFeed extends Component {
  state = {
    // mppLockup: this.props.match.params.mppName,
    votes:[]
  }

//load on Speech Feed
  loadHansard = () => {
    // API.getHansard(this.state.name)
    axios.get(`/api/hansard/${this.props.mppLockup}`,{
      name: name
    })
    .then(res =>{
        // console.log('ths is the res from speed ', res.data)
        this.setState({votes:res.data})
      })
    .catch(err => console.log(err));
  };

componentDidMount(){
  this.loadHansard();
}

  render(){
    const { votes } = this.state;
    return(
    <article style={styles.rightA} className="center br3 hidden ba b--black-10 mv4 w-90 vStyle">
      <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Speech Feed</h1>
      <div className="pa3 bt b--black-10">
      <ul>
        {votes.map(element => {
          return <li className="f6 bb b--black pa1">{element.speech}</li>
        })}
      </ul>
      </div>
    </article>
    )
  }
};


export default SpeechFeed;
