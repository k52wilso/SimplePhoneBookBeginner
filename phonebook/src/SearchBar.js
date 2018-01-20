import React, { Component } from 'react';
import './App.css';
class SearchBar extends Component {

  render() {
    return (
      <div>
        <input type="text" className="searchbar" placeholder="Search for a contact" onChange={this.props.show}/>
      </div>
    );
  }
}

export default SearchBar;
