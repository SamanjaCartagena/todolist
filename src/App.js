import './App.css';
import React,{useState, useEffect} from 'react';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
import {Button, InputLabel, FormControl, Input} from '@material-ui/core';
function App() {
const [todos, setTodos]=useState([]);
const [input, setInput]=useState('');
useEffect(() => {

db.collection('todos').orderBy('timestamp','asc').onSnapshot(snapshot =>{
  setTodos(snapshot.docs.map(doc => doc.data().todo))
})


}, []);

const addTodo= (event) =>{
  //this will fire off when we click the button
  event.preventDefault();
  db.collection('todos').add({
    todo:input,
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
  })
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
        <Todo text={todo} />

))}
         

      </ul>
    </div>
  );
}

export default App;
