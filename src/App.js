import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
   state={
    persons: [
      {name: 'John' , age: 20},
      {name: 'Steve' , age: 21},
      {name: 'Tom' , age: 22}
    ]
  };

   nameSwitchHandeler = (newName) =>{
    this.setState({
      persons: [
        {name: newName , age: 30},
        {name: 'Bravo' , age: 31},
        {name: 'Max' , age: 32}
      ]
  
    })
  }

  newNameHandeler = (event) =>{
    this.setState({
      persons: [
        {name: 'Boxer' , age: 30},
        {name: event.target.value , age: 31},
        {name: 'Max' , age: 32}
      ]
    })

  }
  render(){
    const style = {
      backgroundColor : 'white',
      padding: '10px',
      border: '1px solid blue',
      cursor : 'pointer'
    }
  return (
    <div className="App">
      <h1>Hi Welcome to the React page</h1>
      <p>Hey i can have nested things as well !!</p>
      <button
      style = {style} 
      onClick={this.nameSwitchHandeler.bind(this,'aaron')}>Switch Name</button>
      <Person 
      name = {this.state.persons[0].name} 
      age = {this.state.persons[0].age} />
      <Person 
      name = {this.state.persons[1].name} 
      age = {this.state.persons[1].age}
      click={this.nameSwitchHandeler.bind(this,'peter parker')}
      newName={this.newNameHandeler}></Person>
      <Person
      name = {this.state.persons[2].name} 
      age = {this.state.persons[2].age}/>
    </div>
  );
}
}

export default App;


