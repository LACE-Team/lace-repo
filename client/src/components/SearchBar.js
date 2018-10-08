/* eslint-disable */
import React, {Component} from 'react';

class SearchBar extends Component {
    Search = (e) => {
        e.preventDefault();
        var search = document.getElementById("search").value;
        console.log(search);
        document.getElementById("everything").display = "none";
        // this.setState({
        //     searchValue: search
        // })

    }


    render () {
        return (
            <div className="searchbar" style={{display: 'inline-flex'}}>
                <input id="search" type="search" placeholder="search politicans" className="input-reset ba b--black-20  mb2 db w-100 gray f6 f5-ns dib "></input>
                {/*  will be like youtube searchbar */}
                <button className=" mb2 mr3" onClick={this.Search}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        )
    }
}



export default SearchBar;