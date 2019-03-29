import React from 'react';
import './Cockpit.scss'; 

const Cockpit = (props) => {
    const assignedClasses = [];
    if (props.persons.length <= 2) {
      assignedClasses.push('red');
      // assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push('bold');
    }
   
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
    
    return (
        <div>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button onClick={props.click}>
                {/* style={style} */}
                 Toggle Names 
            </button>
        </div>

    );
}
export default Cockpit;