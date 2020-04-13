import React, { useState } from 'react';
import './App.css';
import Todo from "./components/Todo";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [todos, setTodos] = useState(""); // état pour créer un todo

  return (
    <>
      <Header />
      <div className="container">
        <Todo
          setTodos={setTodos}
          todos={todos}
        />
        <List
          todos={todos}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
