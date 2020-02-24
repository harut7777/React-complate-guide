import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: "Max", age: 28},
      {name: "Menu", age: 29},
      {name: "Stephanie", age: 26},
    ]
  });

  const [ otherState, setOtherState ] = useState('some other state');

  console.log(personsState,otherState);

  const  switchNameHandler = () => {
    // DON'T DO THIS this.state.persons[0].name = "Maximilian"

    setPersonsState({
      persons: [
        {name: "Maximilian", age:28},
        {name: "Menu", age:29},
        {name: "Stephanie", age:27},
      ]
    })
  };

  return (
      <div className="App">
        <h1>Hi i`m a react app</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
  );
};
export default app;

//   state = {
//     persons: [
//       {name: "Max", age:28},
//       {name: "Menu", age:29},
//       {name: "Stephanie", age:26},
//     ],
//     otherState: 'some other value'
//   };
//
//   switchNameHandler = () => {
//     // DON'T DO THIS this.state.persons[0].name = "Maximilian"
//
//     this.setState({
//       persons: [
//         {name: "Maximilian", age:28},
//         {name: "Menu", age:29},
//         {name: "Stephanie", age:27},
//       ]
//     })
//   };
//
//   render() {
//     return (
//         <div className="App">
//           <h1>Hi i`m a react app</h1>
//           <button onClick={this.switchNameHandler}>Switch Name</button>
//           <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//           <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
//           <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//         </div>
//     );
//     // return React.createElement('a',{className: 'App'}, React.createElement('h1',null,"Hi i`m a react app1"))
//
//   }
// }
