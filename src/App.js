import React, {useState} from 'react'
import './App.css';
import Form from './components/Form'
import ToDoList from './components/ToDoList'
 
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [selection, setSelection] = useState("all");
  return (
    <div className="App">
      <header>
        <h1>To Do List!</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setSelection={setSelection}/>
      <ToDoList todos={todos} setTodos={setTodos} selection={selection}/>
     {

     } 
    </div>
  );
}

export default App;
