import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'John' , age: 20},
      {name: 'Steve' , age: 21},
      {name: 'Tom' , age: 22}
    ]
  }
  nameSwitchHandeler = () =>{
    this.setState({
      persons: [
        {name: 'John ' , age: 30},
        {name: 'Steve ' , age: 31},
        {name: 'Max' , age: 32}
      ]

    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi Welcome to the React page</h1>
        <p>Hey i can have nested things as well !!</p>
        <button onClick={this.nameSwitchHandeler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My hobby is dancing</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
