import React, { useEffect, useState } from "react";
import axios from "axios";

const List = ({ todos }) => {

  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const [search, setSearch] = useState("");
  // const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3100/read");
      setList(response.data)
      setIsLoading(false);
      console.log(response.data);
    }
    fetchData();
  }, [todos])

  return (
    isLoading ? <p>En cours de chargement</p> :
      <div className="todos">
        {/* SEARCH */}
        {/* <input className="search" onChange={async (event) => {
          setSearch(event.target.value)
          const response = await axios.post("http://localhost:3100/search",
            { title: search });
          setSearchResult(response.data)
          console.log(response.data);

        }}></input> */}

        {/* AFFICHAGE TODOLIST */}
        {/* je retourne tous les éléments de ma liste */}
        {list && list.map((item, index) => {

          return (
            <form key={index} onSubmit={async () => {
              await axios.post("http://localhost:3100/delete", { id: item._id });
            }}>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    checked={item.done ? true : false}
                    onChange={() => {
                      const newList = [...list];
                      const todo = newList[index];
                      todo.done = !todo.done
                      setList(newList);

                    }} />
                  <label className={item.done ? "line" : ""}>{item.title}</label>
                  <button className="trash-btn"><i className="fas fa-trash"
                  ></i></button>
                </li>
              </ul>
            </form>
          )
        })}
      </div >
  )
}

export default List; 