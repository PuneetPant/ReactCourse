import React , {Component} from 'react';
import Person from './Person/Person';
class Persons extends Component{
    constructor(props){
        super(props);
        console.log('[Persons.js] Inside Constructor');
      }
      componentWillMount=() =>{
        console.log('[Persons.js] Inside componentWillMount'); 
      }
      componentDidMount=()=>{
        console.log('[Persons.js] Inside componentDidMount');
      }
    render(){
        console.log('[Persons.js] Inside Render()');
        return(
            this.props.persons.map((person, index) => {
                return <Person
                  click={this.props.clicked}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.props.changed(event, index)}
    
                />
              }
    
        )
        )

    }
    
}

export default Persons;