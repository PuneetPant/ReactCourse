import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id:1 ,name: 'Max', age: 28 },
      { id:2,name: 'Manu', age: 29 },
      { id:3  ,name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }
  // switchNameHandler = (newName) => {
  //   console.log("was clicked");
  //   //  this.state.persons[0].name="Maximillian";
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   })
  // }
  deletePersonHandler = (personIndex) => {
    // const persons=this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons:persons,
    })

  }
  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id===id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    // person.name=event.target.value;
    person.name=event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;
    console.log("Inside nameChangedHandler");
    this.setState({
      persons: persons
    })
  }

  toggleNameHandler = () => {
    const flag = this.state.showPersons;
    this.setState({
      showPersons: !flag
    })
  }
  render() {

    let persons = null;
    if (this.state.showPersons === true) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              click={this.deletePersonHandler.bind(this,index)}
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event,person.id)}
               
               />
          })
          }

        </div>

      );
    }
    return (
      <div className="App">
        <h1>Hi i m a React App</h1>
        <button onClick={this.toggleNameHandler}>Toggle Persons</button>
        {persons}

        {/* <button onClick={this.switchNameHandler.bind(this, "Maximillian")}>Switch Name</button> */}
        {/* Below is the conditional ternary operator that is being used */}
        {/* {
          this.state.showPersons === true ? 
          <div>
            <Person name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Max!")}
              changed={this.nameChangedHandler}>
              My Hoddies: Racing </Person>
            <Person name={this.state.persons[2].name}
              age={this.state.persons[2].age} />

          </div> : null 

        } */}
        {/* <div>
            <Person name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Max!")}
              changed={this.nameChangedHandler}>
              My Hoddies: Racing </Person>
            <Person name={this.state.persons[2].name}
              age={this.state.persons[2].age} />

          </div> */}


      </div>
    );
  }
}


export default App;
