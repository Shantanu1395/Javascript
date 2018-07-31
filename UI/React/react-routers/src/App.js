import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = (params) => {
  return (<h1>Welcome {params.username} </h1>)
}

class App extends Component {

  state = {
    loggedIn:false
  }

  loginHandle = () => {
    this.setState({loggedIn:true})
  }

  render() {
    return (
      <Router>
      <div className="App">
      <ul>
        <li><NavLink to="/" exact activeStyle={
          {color:'green'}
        }>Home</NavLink></li>
        <li><NavLink to="/about" exact activeStyle={
          {color:'green'}
        }>About</NavLink></li>
        <li><NavLink to="/user/shantanu" exact activeStyle={
          {color:'green'}
        }>User Shantanu</NavLink></li>
      </ul>

        <input type="button" value="log in" onClick={this.loginHandle.bind(this)} />

        {/* Exact is to avoid path being parsed as Regex */}
        {/* Strict is used for exact matching*/}
        <Route path="/" exact strict render={
          () => {
            return (<h1>Welcome Home </h1>)
          }
        } />

        <Route path="/about" exact strict render={
          () => {
            return (<h1>Welcome About </h1>)
          }
        } />

        <Route path="/user/:username" exact strict render = {({match}) => (
            this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/" />)
          )
        } />

      </div>
      </Router>
    );
  }
}

export default App;
