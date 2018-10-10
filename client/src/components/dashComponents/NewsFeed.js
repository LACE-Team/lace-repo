import React from 'react';
/* eslint-disable */
const styles = {};

styles.rightA = {
  'margin-right': '0px',
};

const NewsFeed = ({ customStyle, props }) => (
  <article style={customStyle} className="center br3 hidden ba b--black-10 mv4 w-90">
    <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">News Feed</h1>
    <div className="pa3 bt b--black-10">
      <p className="f6 f5-ns lh-copy measure">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. hello
      </p>
    </div>
  </article>
);

export default NewsFeed;
