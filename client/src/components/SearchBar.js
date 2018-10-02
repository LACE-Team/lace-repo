import React, {Component} from 'react';
var practiceArray = [
    "Mike", "George", "Linda", "Lil Pump", "Casanova", "Kevin Durant"
]; 
// this array is gonna help me with the dropdown search
//value should change as typing
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

    state = {
        searchValue: "hhhhhh"
    }
    render () {
        return (
            <div className="searchbar">
                <input id="search" type="search" placeholder="search politicans"></input>
                {/*  will be like youtube searchbar */}
                <button onClick={this.Search}>
                    <i className="fa fa-search"></i>
                </button>
                <ul style={{width: "20%", listStyle: "none", margin: "auto", display: "none"}} id="everything">
                    {practiceArray.map(name => 
                        <li>{name}</li>
                    )}
                </ul>
            </div>
        )
    }
}
    


export default SearchBar;