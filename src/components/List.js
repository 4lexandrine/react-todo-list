import React from "react";
import axios from "axios";


const List = ({ index, _id, done, title, list, setList }) => {
    return (<form key={index} onSubmit={async () => {
        await axios.post("http://localhost:3100/delete", { id: _id });
    }}>
        <ul>
            <li>
                <input
                    type="checkbox"
                    checked={done ? true : false}
                    onChange={async () => {
                        const newList = [...list];
                        const todo = newList[index];
                        todo.done = !todo.done
                        setList(newList);
                        await axios.post("http://localhost:3100/update", { id: list[index]._id, done: list[index].done });
                    }} />
                <label className={done ? "line" : ""}>{title}</label>
                <button className="trash-btn"><i className="fas fa-trash"
                ></i></button>
            </li>
        </ul>
    </form>)
}

export default List;