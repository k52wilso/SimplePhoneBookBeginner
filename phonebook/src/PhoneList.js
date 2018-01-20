import React, { Component } from 'react';
import './App.css';
import Contact from './Contact';
class PhoneList extends Component {

  render() {
    return (
      <div className="phonelist">
        {this.props.contacts.map((contact) => {
            if(contact.show == true){
              return (<Contact key={contact.name} contact={contact}/>)
            }
        })}
      </div>
    );
  }
}

export default PhoneList;
