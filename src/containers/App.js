import React, { Component } from 'react';
// import classes from './App.css';
import './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
// import Radium,{StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      persons: [
        { id: 1, name: 'Max', age: 28 },
        { id: 2, name: 'Manu', age: 29 },
        { id: 3, name: 'Stephanie', age: 26 }
      ],
      showPersons: false

    }
    console.log('[App.js] Inside Constructor');
  }
  componentWillMount=() =>{
    console.log('[App.js] Inside componentWillMount'); 
  }
  componentDidMount=()=>{
    console.log('[App.js] Inside componentDidMount');
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
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    })

  }
  nameChangedHandler = (event, id) => {
    // const id = this.state.persons.findIndex(p => {
    //   return p.id===id;
    // })

    const person = {
      ...this.state.persons[id]
    };

    // person.name=event.target.value;
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[id] = person;
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
    console.log('[App.js] Inside Render()');
    const style = {
      padding: '8px',
      border: '1px solid blue',
      color: 'white',
      backgroundColor: 'green',
      font: 'inherit',
      cursor: 'pointer',
      borderRadius: '8px',
      // ':hover':{
      //   backgroundColor:'lightgreen',
      //   color:'black'
      // }
    }

    let persons = null;
    if (this.state.showPersons === true) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
        // <div>
        //   {this.state.persons.map((person, index) => {
        //     return <Person
        //       click={this.deletePersonHandler.bind(this, index)}
        //       name={person.name}
        //       age={person.age}
        //       key={person.id}
        //       changed={(event) => this.nameChangedHandler(event, index)}

        //     />
        //   })
        //   }


        // </div>


      );
      style.backgroundColor = 'red'
      // style[':hover']={
      //   backgroundColor:'salmon',
      //   color:'black'
      // }
    }
    // const assignedClasses = [];
    // if (this.state.persons.length <= 2) {
    //   assignedClasses.push('red');
    //   // assignedClasses.push(classes.red);
    // }
    // if (this.state.persons.length <= 1) {
    //   assignedClasses.push('bold');
    // }
    return (
      // < StyleRoot>
      <div className='App'>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          click={this.toggleNameHandler}
        />

        {/* <h1>Hi i m a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working</p>
        <button
          style={style}
          onClick={this.toggleNameHandler}>Toggle Persons</button> */}
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
      // </StyleRoot>
    );
  }
}


// export default Radium(App);
export default App;
