/* eslint-disable */
import React from 'react';
import { Timeline } from 'react-twitter-widgets';
// import { TwitterTimelineEmbed } from 'react-twitter-embed';


const TwitterFeed = props => (
 <Timeline
 dataSource={{
   sourceType: 'profile',
   screenName: 'twitterdev'
 }}
 options={{
   username: 'TwitterDev',
   height: '400'
 }}
 onLoad={() => console.log('Timeline is loaded!')}
 />

  // <div
  //   // className={props.className}
  //   style={{
  //     height: '75vh',
  //     overflow: 'scroll'
  //   }}
  // >
  //   <a
  //     className="twitter-timeline"
  //     // data-height="1000"
  //     href="https://twitter.com/ontariopolitix?lang=en"
  //   >
  //     Tweets by TwitterDev
  //   </a>{' '}
  //   <script
  //     async
  //     src="https://platform.twitter.com/widgets.js"
  //     charSet="utf-8"
  //   />
  // </div>
);

export default TwitterFeed;

{
  /* <a className="twitter-timeline" data-width="1000" data-height="1000" data-dnt="true" href="https://twitter.com/OntarioPolitix?ref_src=twsrc%5Etfw">Tweets by OntarioPolitix</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */
}
