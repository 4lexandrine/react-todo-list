import React from "react";
import axios from "axios";

const Header = ({ search, setSearch, setSearchResult }) => {

    return (
        <header>
            <h1>Todo List</h1>
            {/* SEARCH */}
            <div className="searchBar">
                <input className="search" onChange={async (event) => {
                    setSearch(event.target.value)
                    const response = await axios.post("http://localhost:3100/search",
                        { title: search });
                    setSearchResult(response.data.todos);
                }}></input>
                <i className="fas fa-search search-icon"></i>
            </div>
        </header>
    )
}

export default Header;