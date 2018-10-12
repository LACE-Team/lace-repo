/* eslint-disable */
import React from 'react';
import './TwitterStyle.css'
const TwitterFeed = (props) => (
    <div className={props.className} style={
        {
            maxHeight: "489px",
            overflow: 'scroll'
        }
    }>
        <a class="twitter-timeline" href="https://twitter.com/andretqt/lists/project" data-chrome="nofooter transparent noheader transparent">Tweets by TwitterDev</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>
)

export default TwitterFeed;

