import React, { Component } from 'react';
import './App.css';
import { tsConstructorType } from '@babel/types';

class App extends Component {
    constructor(){
      super();
      this.state = {
        friends: [],
        picture: '',
        name: ''
      }
      this.addFriend = this.addFriend.bind(this)
    }
    updatePicture(value){
      this.setState({
        picture:value
      })
    }
    updateName(value){
      this.setState({
        name:value
      })
    }
    addFriend(){
      const {friends,picture,name} = this.state;
      let newFriends = friends.slice();
      newFriends.push({picture: picture,name})
      this.setState({
        friends: newFriends,
        picture: '',
        name: '',
      })
    }
    render(){
      console.log(this.state.picture)
      console.log(this.state.name)
      const friends = this.state.friends.map((element,index) => {
        return(
          <div key={index}>
            <img  src={element.picture} alt="My Friends"/>
            <span>{element.name}</span>
          </div>
        )
      })
    return (
      <div className="App">
        <span>Picture:</span>
        <input
        value={this.state.picture}
        onChange={(e) => this.updatePicture(e.target.value)}/>
        <span>Name:</span>
        <input
        value={this.state.name}
        onChange={(e) => this.updateName(e.target.value)}/>
        <button onClick={this.addFriend}>Add Friend:</button>
        {friends}
      </div>
    );
  }
}

export default App;
