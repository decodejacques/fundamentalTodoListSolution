import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';



class App extends Component {
  displayItem(item) {
    return (<li> {item} </li>)
  }
  render() {
    return (<div>
      <input /> <button>press me</button>
      <ul>
        {this.displayItem('first item')}
        {this.displayItem('second item')}
      </ul>
    </div>)

  }



}

export default App;
