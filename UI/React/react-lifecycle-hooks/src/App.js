import React, { Component } from 'react';
import './App.css';
import Child from './child';

class App extends Component {

  state = {
    name: 'shantanu'
  }

  //Run First
  constructor(){
    super();
    this.state = {
      name: 'Sarthak'
    }
    console.log("Constructor Ran...");
  }

  //Run Secondly after constructor before render
  //For global events
  componentWillMount(){
    if(window.innerWidth <500){
      this.setState({innerWidth:window.innerWidth});
    }
    console.log("componentWillMount Ran...");
  }

  componentWillReceiveProps(){
    console.log("componentWillReceiveProps Ran...");
  }

  changeState(){
    this.setState({name:"Aditi"});
  }

  unmountChild(){
    this.setState({name:'Parkhi'});
  }

  render() {
    console.log("Render Ran...");
    if(this.state.name === "Parkhi"){
      return (<div/>);
    }
    return (
      <div className="App">
        name: {this.state.name}
        | innerWidth: {this.state.innerWidth}
      <Child name={this.state.name}/>
      <button onClick={this.changeState.bind(this)}>Change State</button>
      <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
      </div>
    );
  }

  componentDidMount(){
    console.log("componentDidMount Ran...");
  }

  componentWillUnmount(){
    console.log("componentDidUnMount Ran...");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate Ran...");
    return true;
}

}

export default App;
