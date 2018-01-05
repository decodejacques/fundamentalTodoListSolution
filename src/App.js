import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';



class App extends Component {
  constructor() {
    super();
    this.state = ['first item', 'second item']
  }
  displayItem = (item) => {
    return (<li> {item} </li>)
  }
  render() {

    return (<div>
      <input /> <button>press me</button>
      <ul>
        {this.state.map(this.displayItem)}
        
      </ul>
    </div>)

  }



}

export default App;
