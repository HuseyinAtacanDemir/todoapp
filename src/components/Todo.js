import React from "react";


const Todo = ({ text, completed, id, todos, setTodos }) => {

    const onComplete = (curId) => setTodos(todos.map((todo) => { if (curId === todo.id) todo.completed = !todo.completed; return todo; }));

    const onTrash = (curId) => setTodos(todos.filter((todo) => todo.id !== curId));

    return (

        <div className={`todo ${completed ? "completed" : ""}`} key={id}>
            <li className="todo-item">{text}</li>
            <button className="complete-btn" onClick={() => onComplete(id)}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={() => onTrash(id)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>

    )
};
export default Todo;