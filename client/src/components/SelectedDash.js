import React, { Component } from 'react';
import MppInfo from './dashComponents/Mppinfo';

export default class SelectedMPP extends Component {

  state = {
    name: 'Ford',
    position: 'mayor',
    number: '123-456-9980',

  }
  render(){
    return(
      <MppInfo name={this.state.name} position={this.state.position} number={this.state.number}/>
    )
  }
}

