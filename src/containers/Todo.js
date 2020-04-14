import React from "react";
import axios from "axios";

const Todo = ({ todos, setTodos }) => {

    return (
        <form className="createTodo" onSubmit={async (e) => {
            e.preventDefault();
            if (todos) {
                await axios.post(process.env.REACT_APP_URL + "create",
                    { title: todos, done: false }
                );
                setTodos("")
            }
        }} >
            <input className="newTask" type="text" value={todos} placeholder="Add a new task" onChange={(event) => {
                setTodos(event.target.value)
            }} />
            <button type="submit"><p>+</p></button>

        </form>
    );
}

export default Todo;