import React from "react";

const Todo = ({ todos, setTodos, list, setList }) => {
    return (
        <form className="newTask" onSubmit={(e) => {
            e.preventDefault();
            if (todos) {
                const newList = [...list];
                newList.push({ todo: todos, done: false });
                setList(newList)
                setTodos("")
            }
        }} >
            {/* je crée mon input qui aura pour valeur ce que l'utilisateur écrit  */}
            <input className="newTask" type="text" value={todos} placeholder="add a new task" onChange={(event) => {
                setTodos(event.target.value)

            }} />
            {/* quand je clic sur le bouton add, je mets à jour ma liste de todos à afficher via la méthode onSubmit du formulaire */}
            <button type="submit" >Add</button>

        </form>
    );
}

export default Todo;