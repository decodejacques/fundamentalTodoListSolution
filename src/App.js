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

  addItem = () => {
    this.setState(st => ({ items: st.items.concat(this.inp.value) }))
  }

  componentDidMount() {
  }

  render() {
    return (<div>
      <input ref={r => this.inp = r}/> <button onClick={this.addItem}>press me</button>
      <ul>
        {this.state.items.map(this.displayItem)}

      </ul>
    </div>)

  }



}

export default App;
