import React from 'react';


const person = (props) => {
  console.log(props);
    return (
        <div>
          <p>i'm {props.name}! and I am {props.age} years old</p>
          <p>{props.children}</p>
        </div>
    )
};

export default person;