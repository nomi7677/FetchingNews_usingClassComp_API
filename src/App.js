import './App.css';
import NavBar from './Component/NavBar.js';
import News from './Component/News.js';

import React, { Component } from 'react';

export default class App extends Component {
    render() {
    return (
      <div>
        <NavBar />
        <News />
      </div>
    )
  }
}
