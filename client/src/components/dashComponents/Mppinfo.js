import React, { Component } from 'react';


const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const Mppinfo = props => (
  <div className='container center ' style={styles.layout} >

    <article className="mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div className="tc">
        <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" alt='selected MPP'></img>
        <h1 className="f3 mb2">Ford something</h1>
        <h2 className="f5 fw4 gray mt0">Position: something</h2>
      </div>
    </article>

    <article className="mw5 mw6-ns br3 hidden ba b--black-10 mv4">
      <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Information on "MPP Name here"</h1>
      <div className="pa3 bt b--black-10">
        <h3>Name:{props.name}</h3>
        <h3>Current Position: {props.postion}</h3>
        <h3>Contact number: {props.number}</h3>
        <h3></h3>
        <h3></h3>
        <h3></h3>
      </div>
    </article>

  </div>
);

export default Mppinfo;