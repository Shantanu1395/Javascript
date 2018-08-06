import React, { Component } from 'react';
import axios from 'axios';

//https://www.reddit.com/r/space.json
class ApiCall extends Component {

  componentWillMount(){
    this.getReddit();
  }

  getReddit(){
    axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
    .then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({posts});
    });
  }

  constructor(props){
    super(props);

    this.state = {
      posts: [],
      subr: 'technology'
    };
    this.getReddit = this.getReddit.bind(this);
  }

  render(){
    return(
      <div>
        <h1>{`/r/${this.state.subr}`}</h1>
        <ul>
          {this.state.posts.map( posts =>
            <li key={posts.id}>{posts.title}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default ApiCall;
