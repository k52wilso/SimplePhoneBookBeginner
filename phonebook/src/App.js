import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneList from './PhoneList';
import SearchBar from './SearchBar';
import update from 'immutability-helper';


class App extends Component {

  constructor(){
    super();
    this.displayed = this.displayed.bind(this);
    this.showContact = this.showContact.bind(this);
  }

  state = {
    contacts:[]
  }

  async componentDidMount(){
    let res = await fetch("http://www.mocky.io/v2/581335f71000004204abaf83");
    let json = await res.json();

    // Originally sort all contacts alphabetically
    let contacts = json.contacts.sort((a,b) => {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
    //Add a show or hide to each object contact
    contacts = contacts.map((contact) =>{
       contact["show"] = true;
       return contact;
    })
    this.setState({contacts});
}

// Function to see how many contacts are being displayed
displayed(){
   return this.state.contacts.filter((contact) =>{ return contact.show == true;}).length;
}


//Function to hide/show contacts entered in searchbar
showContact(){
    let searchtext = document.querySelector('input');
    let copy = Object.assign([],this.state.contacts);
    for(let i = 0; i < copy.length ; i++){
      if(copy[i].name.toLowerCase().indexOf(searchtext.value.toLowerCase()) !== -1 || 
      copy[i].phone_number.toLowerCase().indexOf(searchtext.value.toLowerCase()) !== -1 || 
      copy[i].address.toLowerCase().indexOf(searchtext.value.toLowerCase()) !== -1){
        copy[i].show = true;
      }else{
        copy[i].show = false;
      }
    }
    
    this.setState({contacts:copy});

}

  render() {
    return (
      <div className="App">
        <h1 className="title">PhoneBook</h1>
        <p className="choose">Please find a contact (Displaying {this.displayed()} of {this.state.contacts.length} )</p>
        <SearchBar show={this.showContact} />
        {/* Filters */}

        {/* Phone book component */}
        <PhoneList contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
  