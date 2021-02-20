import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [selection, setSelection] = useState("all");


  useEffect(() => {
    let mounted = true;
    if(mounted){
      if(localStorage.getItem("todos")) setTodos(JSON.parse(localStorage.getItem("todos")));
    }
    return () => {
      mounted = false;
    }
  },[]);
  
  useEffect(() => {
    let mounted = true;
    if(mounted){
      localStorage.setItem("todos", JSON.stringify(todos));
    }
    return () => {
      mounted = false;
    }
  }, [todos]);

  return (
    <div className="App">
      <header>
        <h1>To Do List!</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setSelection={setSelection} />
      <ToDoList todos={todos} setTodos={setTodos} selection={selection} />
      {

      }
    </div>
  );
}

export default App;
