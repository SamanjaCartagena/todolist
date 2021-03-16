import './App.css';
import React,{useState} from 'react';
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
      <form>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
        {todos.map(todo =>(
          <li>{todo}</li>
        ))}
         

      </ul>
    </div>
  );
}

export default App;
