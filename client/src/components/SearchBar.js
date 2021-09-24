import React from "react";
import "../styles/SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search movie"
        onChange={props.handleSearch}
        onKeyDown={props.handleClear}
        value={props.searchValue}
      />
    </div>
  );
};

export default SearchBar;
