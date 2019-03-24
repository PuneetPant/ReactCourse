import React from 'react';
import './Person.scss';
const person = (props) => {
    return (
        <div className="Person">
            <h1 onClick={props.click}> I m a {props.name} and I'm {props.age}years old!</h1>
            <p>{props.children} </p>
            <input type="text" onChange={props.changed} />
        </div>

    )
        ;
}

export default person;

