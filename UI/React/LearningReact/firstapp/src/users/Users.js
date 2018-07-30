import React, { Component } from 'react';
import User from './User';
class Users extends Component{

    state = {
        users: [
            {name:"Jack", age:20},
            {name:"Jill", age:30},
            {name:"Peter", age:40},
        ],
        title:"Users List",
        power:10000,
        name:"Elementary"
    }

    makeMeYounger = () => {
        const newState = this.state.users.map((user) => {
          const tempUser = user;
          tempUser.age -= 10;
          if (tempUser.age < 0){
              tempUser.age = 0;
          }
          return tempUser;
        } );

        this.setState({
            newState
        });
    }

    powerUp = (inc) => {
        const newPower = this.state.power + inc ;
        let newState = this.state;
        newState.power = newPower;
        this.setState({newState});

    }

    changeName = (event) => {
        this.setState({
            name:event.target.value
        });

    }

    render(){
        return (
        <div>
            <button onClick={this.makeMeYounger}>Make me young</button>
            <br/>
            <h1>{this.state.title}</h1>
            <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
            <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
            <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
            <br/>
            <br/>

            <button onClick={this.powerUp.bind(this,1000)}>PowerUp</button>
            <button onClick={() => this.powerUp(100)}>PowerUp</button>
            <p>Super Sayyian Power : {this.state.power}</p>
            <br/>
            <br/>

            <input type="text" onChange={this.changeName} value={this.state.name}/>
            <p>{this.state.name}</p>
        </div>  
        )
    }
}

export default Users;