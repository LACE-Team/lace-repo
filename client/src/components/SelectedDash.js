/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';

import MppInfo from './dashComponents/Mppinfo';
import SocialFeed from './dashComponents/SocialFeed';
import EventFeed from './dashComponents/EventFeed';
import NewsFeed from './dashComponents/NewsFeed';
import SpeechFeed from './dashComponents/SpeechFeed';
import VotingRecords from './dashComponents/VotingRecords';
import demoList from "./list/mppSocial";
import AwesomeComponent from './Loader'
const NewsAPI = require('newsapi')
import NEWS_KEY from '../newsKey';
const newsapi = new NewsAPI(NEWS_KEY);

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
    'marginRight': '0px',
  },
};

export default class SelectedMPP extends Component {
  state = {
    mppLockup: this.props.match.params.mppName,
    name: '',
    position: [],
    url: '',
    photo: ' ',
    party:'',
    dateOfService:'',
    currentRiding:'',
    ridingMap:'',
    hansard: [],
    votes:[],
    parliamentNumber: '',
    telephone:'',
    twitter: '',
  };

    // //load on Speech Feed
    // loadHansard = () => {
    //   // API.getHansard(this.state.name)
    //   axios.get(`/api/hansard/${this.state.mppLockup}`,{
    //     name: name
    //   })
    //   .then(res =>{
    //       // console.log('ths is the res from speed ', res.data)
    //       this.setState({vote:res.data})
    //     })
    //   .catch(err => console.log(err));
    // };
    //load on Voting Records page
    loadVotesByMpp = () => {
      API.getVotesByMpp(this.state.speech)
      .then(res =>
        //console.log('here ' + res.data),
        this.setState({ votes: res.data}))
      .catch(err => console.log(err));
    };

    // let url = window.location.href;
    mppSearch(){
      axios.get(`/api/mppName/${this.state.mppLockup}`,{
        name: name
      })
      .then(res => {
        //console.log('ths is the res from get ', res.data[0].addressEmailId.Telephone),
        this.setState({
          name: res.data[0].name,
          position: res.data[0].careerDetails[0].positions.join('\n'),
          url: res.data[0].url,
          photo:res.data[0].photo,
          party:res.data[0].party,
          dateOfService:res.data[0].dateOfService,
          currentRiding:res.data[0].currentRiding,
          ridingMap:res.data[0].ridingMap,
          parliamentNumber: res.data[0].careerDetails[0].parliamentNumber,
          telephone:res.data[0].addressEmailId.Telephone
        })
        // console.log(this.state.telephone)
      })
      .catch(err => console.log(err))
    }

    getNews(){
      newsapi.v2.everything({
        q: this.state.name,
        // category: 'general',
        language: 'en',
        // country: 'ca',
      // newsapi.v2
      // .everything({
      //   // q: this.state.name,
      //   q:this.state.mppLockup,
        sources: 'google-news-ca',
        sortBy: 'relevancy',
        page: 1
      })
      .then(response => {
        response.totalResults === 0 ? console.log('no res') : console.log('this is the news ',response);
      })
      .catch(err => {
        console.log(err);
      });
    }

  getTwitter(){
    // const twitterURL =
    demoList.forEach(tName => {
      if (tName.name === this.state.name){
        // console.log('this is the foreach name ',tName.name)
        // console.log('this is the state name ',this.state.name)
          return this.setState({twitter:tName.twitter})
          // console.log(tName.name);
        }
      })
    }

    componentDidMount(){
      this.mppSearch();
      setTimeout(() => {
        this.getTwitter();
      }, 500);
      // this.loadHansard();
  }

  render() {

    // if (this.state.name.length > 0) {
    //   setTimeout( () => {
    const { name, position, url, photo, currentRiding, party, parliamentNumber, telephone, twitter, mppLockup } = this.state;
    return (
      <div>
        <MppInfo name={name} position={position} url={url} photo={photo} currentRiding={currentRiding} party={party} parliamentNumber={parliamentNumber} telephone={telephone} />
        <div className="outterDiv center w-80" style={styles.layout}>
          <div className="innerDiv-left">
            <SocialFeed twitter={twitter} />
            <EventFeed />
            <NewsFeed customStyle={styles.rightA} />
          </div>
          <div className="innerDiv-right w-80 ">
            <VotingRecords customStyle={styles.rightA} />
            <SpeechFeed mppLockup={mppLockup} customStyle={styles.rightA} />
          </div>
        </div>
      </div>
    );
  // }, 500)
  }
  // return (
  //   < AwesomeComponent/>
  // )
  // }
}