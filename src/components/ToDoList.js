import React from "react";
import Todo from "./Todo.js"

const ToDoList = ({ todos, setTodos, selection }) => {

    return (
        <div className="todo-container" key={Math.random() * 1346}>
            <ul className="todo-list">

                {
                    todos.map((n) => {
                        if ((selection === "all") ||
                        (selection === "completed" && n.completed) ||
                        (selection === "uncompleted" && !n.completed)) {
                            return (<Todo
                                key={n.id}
                                text={n.text}
                                completed={n.completed}
                                id={n.id}
                                todos={todos}
                                setTodos={setTodos}
                            />
                            )
                        } else {
                            return null;
                        }
                    }
                    )
                }

            </ul>
        </div>
    );
};
export default ToDoList;
