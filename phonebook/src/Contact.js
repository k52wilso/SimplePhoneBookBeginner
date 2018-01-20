import React, { Component } from 'react';
import './App.css';

class Contact extends Component {

   

  render() {
    return (
      <div className="contact">
        <h3>{this.props.contact.name}</h3>
        <p>{this.props.contact.phone}</p>
        <p>{this.props.contact.address}</p>
      </div>
    );
  }
}

export default Contact;
