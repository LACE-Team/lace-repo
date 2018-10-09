/* eslint-disable */
import React, { Component } from 'react';
import API from '../utils/API';

class SearchBar extends Component {
    state = { value: '' };

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        window.location ='/MPP/'+ this.state.value;
        API.findByName(this.state.value)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };
    handleKeyPress(event) {
        if (event.key === 'Enter') {
        console.log('enter key pressed')
        window.location ='/MPP/'+ this.state.value;
        }
    }
    // re-route to MPP dashboard

    render() {
        return (
            <div className="searchbar" style={{ display: 'inline-flex' }}>
                <input type='text' placeholder="search politicans"  className="input-reset ba b--black-20  mb2 db w-100 gray f6 f5-ns dib "
                onChange={event => this.handleChange(event)}
                onKeyPress={ event => this.handleKeyPress(event)}
                ></input>
                <button className=" mb2 mr3"
                onClick={event => this.handleSubmit(event)}
                >
                <i className="fa fa-search"></i>
                </button>
            </div>
        )
    }
}



export default SearchBar;