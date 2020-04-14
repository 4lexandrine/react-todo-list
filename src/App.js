import React, { useState } from 'react';
import './App.css';
import Todo from "./containers/Todo";
import Main from "./containers/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [todos, setTodos] = useState(""); // état pour créer un todo
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState();

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        setSearchResult={setSearchResult} />
      <div className="container">
        <Todo
          setTodos={setTodos}
          todos={todos}
        />
        <Main
          todos={todos}
          search={search}
          searchResult={searchResult}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
