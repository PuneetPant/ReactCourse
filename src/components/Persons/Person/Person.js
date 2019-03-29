import React,{Component} from 'react';
import './Person.scss';
// import Radium from 'radium';
class Person extends Component {
    // const style={
    //     '@media (min-width:500px)':{
    //         width:'450px'
    //     }
        
    // }
    constructor(props){
        super(props);
        console.log('[Person.js] Inside Constructor');
      }
      componentWillMount=() =>{
        console.log('[Person.js] Inside componentWillMount'); 
      }
      componentDidMount=()=>{
        console.log('[Person.js] Inside componentDidMount');
      }
    render() {
        console.log('[Person.js] Inside Render()');
        return (
            <div className="Person" 
            // style={style}
            >
                <h1 onClick={this.props.click}> I am {this.props.name} and I'm {this.props.age}years old!</h1>
                <p>{this.props.children} </p>
                <input type="text" onChange={this.props.changed} />
            </div>
    
        )

    }
   
        
}

export default Person;

