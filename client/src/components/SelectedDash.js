/* eslint-disable */
import React, { Component } from 'react';
// import NewsAPI from 'newsapi';
import MppInfo from './dashComponents/Mppinfo';
import SocialFeed from './dashComponents/SocialFeed';
import EventFeed from './dashComponents/EventFeed';
import NewsFeed from './dashComponents/NewsFeed';
import SpeechFeed from './dashComponents/SpeechFeed';
import VotingRecords from './dashComponents/VotingRecords';
//
// const newsapi = new NewsAPI('api_key');

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: '',
  },
  size: {
    height: '400px',
  },
  rightA: {
    'margin-right': '0px',
  },
};

export default class SelectedMPP extends Component {
  state = {
    name: 'Doug Ford',
    position: 'Premier',
    url: 'https://www.ola.org/en/members/all/doug-ford',
    picture: 'https://www.ola.org/sites/default/files/member/profile-photo/doug_ford.jpg',
    // tUsername: 'fordnation',
  };
  // componentDidMount() {
  //   this.loadHansard();
  // }
  
  loadHansard = () => {
    API.getHansard(this.state.speech)
    .then(res => 
      this.setState({ hansard: res.data, speech: '' }))
    .catch(err => console.log(err));
  };
  
  // componentDidMount() {
  //   // getTweets(this.state.tUsername);
  //   newsapi.v2
  //     .topHeadlines({
  //       q: this.state.name,
  //       // category: 'politics',
  //       // country: 'ca',
  //       // language: 'en',
  //       pageSize: 10,
  //     })
  //     .then(response => {
  //       response.totalResults === 0 ? console.log('no res') : console.log(response);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  // componentDidMount() {
  //   // getTweets(this.state.tUsername);
  //   newsapi.v2
  //     .topHeadlines({
  //       q: this.state.name,
  //       // category: 'politics',
  //       // country: 'ca',
  //       // language: 'en',
  //       pageSize: 10,
  //     })
  //     .then(response => {
  //       response.totalResults === 0 ? console.log('no res') : console.log(response);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    const { name, position, url, picture } = this.state;
    return (
      <div>
        <MppInfo name={name} position={position} url={url} picture={picture} />
        <div className="outterDiv center w-80" style={styles.layout}>
          <div className="innerDiv-left">
            <SocialFeed />
            <EventFeed />
          </div>
          <div className="innerDiv-right w-80 ">
            <NewsFeed customStyle={styles.rightA} />
            <VotingRecords customStyle={styles.rightA} />
            <SpeechFeed customStyle={styles.rightA} />
          </div>
        </div>
      </div>
    );
  }
}
// commit me
