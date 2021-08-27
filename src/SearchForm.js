import React from "react";

const SearchForm = (props) => {
  return (
    <form>
      <input
        style={{ margin: "10px" }}
        name="search"
        placeholder="Search Countries"
        value={props.search}
        onChange={props.onSearchChange}
      />
    </form>
  );
};

export default SearchForm;
