import React from "react";
import "../style.css";

const SearchComponent = ({ state, setState, getWeatherDetails }) => {
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <button className="searchButton" onClick={getWeatherDetails}>
            search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
