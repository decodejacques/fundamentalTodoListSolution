import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';



class App extends Component {
  constructor() {
    super();
    this.state = { items: [] }
  }

  displayItem = (item) => {
    return (<li> {item} </li>)
  }

  addItem = (item) => {
    this.setState(st => ({ items: st.items.concat(item) }))
  }

  componentDidMount() {
    this.addItem('first item');
    this.addItem('second item');
  }

  render() {
    return (<div>
      <input /> <button>press me</button>
      <ul>
        {this.state.items.map(this.displayItem)}

      </ul>
    </div>)

  }



}

export default App;
