import './App.css';
import React,{useState} from 'react';
import {Button, InputLabel, FormControl, Input} from '@material-ui/core';
function App() {
const [todos, setTodos]=useState(['Take Dogs for a walk','Take the rubbish out', 'Quazi wants to livestream today']);
const [input, setInput]=useState('');

const addTodo= (event) =>{
  //this will fire off when we click the button
  event.preventDefault();
console.log('Button pressed');
setTodos([...todos, input]);
setInput('');
}
return (
    <div className="App">
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      <Button disabled={!input} variant="contained" type="submit" onClick={addTodo} color="primary">Add Todo</Button>
</FormControl>
      <ul>
        {todos.map(todo =>(
          <li>{todo}</li>
        ))}
         

      </ul>
    </div>
  );
}

export default App;
