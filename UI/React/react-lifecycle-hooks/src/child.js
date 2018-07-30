import React, { Component } from 'react';

class Child extends Component {

  state = {
    name: 'shantanu'
  }

  //Run First
  constructor(){
    super();
    this.state = {
      name: 'Sarthak'
    }
    console.log("Child Constructor Ran...");
  }

  //Run Secondly after constructor before render
  //For global events
  componentWillMount(){
    console.log("Child componentWillMount Ran...");
  }

  render() {
    console.log("Child Render Ran...");
    return (
      <div className="Child">
        child name:{this.props.name}
      </div>
    );
  }

  componentDidMount(){
    console.log("Child componentDidMount Ran...");
  }

  componentWillReceiveProps(){
    console.log("Child componentWillReceiveProps Ran...");
  }

  shouldComponentUpdate(nextProps, nextState){
      console.log("Child shouldComponentUpdate Ran...");
      return false;
  }
  
}

export default Child;
