import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }
  switchNameHandler = (newName) => {
    console.log("was clicked");
    //  this.state.persons[0].name="Maximillian";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }
  nameChangedHandler = (event) =>{
    console.log("Inside nameChangedHandler");
    this.setState=({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi i m a React App</h1>
        <button onClick={this.switchNameHandler.bind(this, "Maximillian")}>Switch Name</button>
        <Person name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,"Max!")} 
          changed={this.nameChangedHandler}> 
          My Hoddies: Racing </Person>
        <Person name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}


export default App;
