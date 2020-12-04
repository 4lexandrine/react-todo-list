import React, { useEffect, useState } from "react";
import List from "../components/List";
import axios from "axios";

const Main = ({ todos, search, searchResult }) => {

  const [list, setList] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(process.env.REACT_APP_URL + "read");
      setList(response.data)
      setIsLoading(false);
    }
    fetchData();
  }, [todos])

  return (
    isLoading ? <p></p> :
      <div className="todos">
        {
          search && searchResult ? searchResult.map((item, index) => {
            return <List {...item} key={item._id} list={list} setList={setList} index={index} />
          })
            :
            list && list.map((item, index) => {
              return <List {...item} key={item._id} list={list} setList={setList} index={index} />
            })
        }
      </div >
  )
}

export default Main; 