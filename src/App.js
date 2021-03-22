import React, {useState} from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';




function App() {
  const [todos, setTodos] = useState(['Task 1', 'Task 2', 'Task 3']);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>TODO APP</h1> 
        <form>
         <FormControl>
           <InputLabel>Write a todo</InputLabel>
           <Input value={input} onChange={e => setInput(e.target.value)}/>
         </FormControl>
         
          <Button disabled={!input} variant="contained" type='submit' onClick={addTodo} color="primary">Add Todo</Button>
        </form>
     
     <ul>
     {todos.map(todo => (
       <li>{todo}</li>
     ))}
     </ul>
    </div>
  );
}

export default App;
