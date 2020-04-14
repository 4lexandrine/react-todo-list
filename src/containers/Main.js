import React, { useEffect, useState } from "react";
import List from "../components/List";
import axios from "axios";

const Main = ({ todos, search, searchResult }) => {

  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3100/read");
      setList(response.data)
      setIsLoading(false);
    }
    fetchData();
  }, [todos])

  return (
    isLoading ? <p>En cours de chargement</p> :
      <div className="todos">



        {
          search && searchResult ? searchResult.map((item, index) => {
            return <List {...item} index={index} list={list} setList={setList} />
          })
            :
            list && list.map((item, index) => {
              return <List {...item} index={index} list={list} setList={setList} />
            })
        }
      </div >
  )
}

export default Main; 