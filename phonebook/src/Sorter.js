import React, { Component } from 'react';
import './App.css';
class Sorter extends Component {

  render() {
    return (
      <div>
        <select name="sorter" className="sorter" onChange={this.props.sort}>
            <option value="asc">Sort A - Z</option>
            <option value="desc">Sort Z - A</option>
        </select>
      </div>
    );
  }
}

export default Sorter;
