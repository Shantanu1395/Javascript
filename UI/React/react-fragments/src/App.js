//Use case is to remove unwanted outer div tag

import React, { Component, Fragment } from 'react';
import './App.css';

const Temp = () => {
  return (
  //<div>   Problem
  //[       Solution 1
  <Fragment> Solution 2        
    <div key="asdf">Hi</div>
    <div key="fsa">Hello</div>
  </Fragment>  
  //]  
  //</div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Temp/>
      </div>
    );
  }
}

export default App;
