import React from "react";
import axios from "axios";

const List = ({ index, _id, done, title, list, setList }) => {
    return (
        <form
            onSubmit={async () => {
                await axios.post(process.env.REACT_APP_URL + "remove", { id: _id });
            }}
        >
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
                            await axios.post(process.env.REACT_APP_URL + "update", { id: list[index]._id, done: list[index].done });
                        }} />
                    <label className={done ? "line" : ""}>{title}</label>
                    <button className="trash-btn">
                        <i className="fas fa-trash" />
                    </button>
                </li>
            </ul>
        </form>
    )
}

export default List;