import React from "react";

const List = ({ list, setList}) => {
  return (
        <div className="todos">
         {/* je retourne tous les éléments de ma liste */}
         {list.map((item, index) => {
            // console.log(list);
            return (
              <ul key={index}>
                <li>
                <input 
                type="checkbox"
                checked={item.done ? true : false }   
                onChange={() => {
                  const newList = [...list];
                  const todo = newList[index];
                  newList[index].done = !newList[index].done
                  //si mon todo est "checked" je le descends en bas de liste
                  if (newList[index].done) {
                    newList.splice(index, 1)
                    newList.push(todo)
                  } else { // sinon je le remonte
                    newList.splice(index, 1)
                    newList.unshift(todo)
                  }
                   setList(newList);

                }} />
                <label className={item.done ? "line" : ""}>{item.todo}</label><i className="fas fa-trash" 
                onClick={() => { // quand je clic sur la corbeille, je supprime le todo du tableau et j'affiche mon nouveau tableau
                  let newList = [...list]
                  newList.splice(index, 1)
                  setList(newList)
                }} ></i>
                </li>
              </ul>
            )
          })}
        </div>
  )
}

export default List;