import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';



class App extends Component {
  displayItem = (item) => {
    return (<li> {item} </li>)
  }
  render() {
    var arr = ['first item', 'second item'];
    return (<div>
      <input /> <button>press me</button>
      <ul>
        {arr.map(this.displayItem)}
        
      </ul>
    </div>)

  }



}

export default App;
