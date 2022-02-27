import React from "react";
import "./Searchbar.css";

export default function SearchBar({ search }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    search(e.target[0].value);
  };
  return (
    <div className="Search__Container">
      <form onSubmit={handleOnSubmit}>
        <input className="SearchBar__Bar" type="text" title="title" placeholder="Search a Food" />
        <input className="SearchBar__Submit" type="submit" value="send" />
      </form>
    </div>
  );
}