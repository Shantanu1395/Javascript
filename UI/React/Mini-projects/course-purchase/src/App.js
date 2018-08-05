import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales';

class App extends Component {
  render() {
    var courses = [
      {name: 'Complete IOS10 dev course', price:199},
      {name: 'Complete Web Develop Bootcamp', price:299},
      {name: 'Complete guide to SQL', price:599},
      {name: 'Bug Bounty and app penetration', price:190},
    ];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase Page</h1>
        </header>
        <CourseSales items={courses}/>
      </div>
    );
  }
}

export default App;
