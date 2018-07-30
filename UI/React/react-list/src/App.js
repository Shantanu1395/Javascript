import React, { Component } from 'react';
import './App.css';
import User from './components/user';

class App extends Component {
  
  state = {
    users: [
      {id:'asdf', name:'john', age:20},
      {id:'asdfsdf', name:'jill', age:30},
      {id:'asdfdsa', name:'peter', age:23},
    ]
  }

  deleteUser = (index, e) =>{
    const users = Object.assign([],this.state.users);
    users.splice(index, 1);
    this.setState({users:users});
  }
  
  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, index) => {
              return <User
              age={user.age}
              key={user.id}
              delEvent={this.deleteUser.bind(this, index)}
              >{user.name}</User>    
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
