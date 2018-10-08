/* eslint-disable */
import React from 'react';
// import MppInfo from './dashComponents/Mppinfo';
// import userStyle from './userStyle.css';

// const styles = {
  // layout:hover {
  //   color: blue
  // },
// };

const UserDash = ({ item }) => (
  <main className="mw6 center">
    <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
      <div className="dtc w2 w3-ns v-mid">
        <img src={item.picture} className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" alt="some pic" />
      </div>
      <div className="dtc v-mid pl3">
        <h1 className="f6 f5-ns fw6 lh-title black mv0">{item.name} </h1>
        <h2 className="f6 fw4 mt0 mb0 black-60">{item.position}</h2>
      </div>
      <div className="dtc v-mid">
        <form className="w-100 tr label">
          <div className="f6 button-reset bg-white dim pointer pv1 black-60" />
        </form>
      </div>
    </article>
  </main>
);

export default UserDash;
