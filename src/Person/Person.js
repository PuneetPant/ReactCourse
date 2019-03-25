import React from 'react';
import './Person.scss';
// import Radium from 'radium';
const person = (props) => {
    // const style={
    //     '@media (min-width:500px)':{
    //         width:'450px'
    //     }
        
    // }
    return (
        <div className="Person" 
        // style={style}
        >
            <h1 onClick={props.click}> I m a {props.name} and I'm {props.age}years old!</h1>
            <p>{props.children} </p>
            <input type="text" onChange={props.changed} />
        </div>

    )
        ;
}

export default person;

