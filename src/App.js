import React, { useState } from 'react';
import './App.css';
import Todo from "./components/Todo";
import List from "./components/List";

function App() {

  const [todos, setTodos] = useState(""); // état pour créer un todo
  const [list, setList] = useState([{ todo: "⬅ Click here to mark todo as checked", done: false }, { todo: "Click here to delete todo ➡", done: false }]); // état pour afficher un todo

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <hr />
      <div >
        <div className="container">
          <List
            list={list}
            setList={setList}
          />
          <Todo
            setTodos={setTodos}
            todos={todos}
            list={list}
            setList={setList} />
        </div>

        <footer>
          <p>Made with <a href="#!">React</a> at <a href="#!">Le Reacteur</a> by <a href="#!">Me</a>.</p>
        </footer>
      </div >
    </div>
  );
}

export default App;
