import React, { Component } from 'react';
var firebase = require('firebase');

//Firebase stuff
var config = {
    apiKey: "AIzaSyD6T2ehinf8pvipSjbqvjVJyqxBftPbgrk",
    authDomain: "survey-794ab.firebaseapp.com",
    databaseURL: "https://survey-794ab.firebaseio.com",
    projectId: "survey-794ab",
    storageBucket: "survey-794ab.appspot.com",
    messagingSenderId: "393189893909"
  };
  firebase.initializeApp(config);


class Auth extends Component {

  login(event){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => {
      var err = e.message;
      console.log(err);
      this.setState({err});
    });

  }

  signup(){
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise
    .then(user => {
      var err = 'Welcome' + user.email;
      firebase.database().ref('/users'+user.uid).set({
        email: user.email
      });
      console.log(user);
      this.setState({err:err});
    });
    promise.catch( e => {
      var err = e.message;
      console.log(err);
      this.setState({err:err});
    });
  }

  constructor(props){
    super(props);

    this.state = {
      err: ''
    };
  }

  render(){
    return(
      <div>
        <input id='email' ref='email' type='email' placeholder='Enter your email' /><br />
        <input id='password' ref='password' type='password' placeholder='Enter your password' /><br />
        <p>{this.state.err}</p>
        <button onClick={this.login.bind(this)}>Log In</button>
        <button onClick={this.signup.bind(this)}>Sign Up</button>
        <button >Log out</button>

      </div>
    );
  }
}

export default Auth;
