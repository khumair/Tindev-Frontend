import React from "react";

const SearchBar = () => {
  return (
    <div className="d-flex flex-row-reverse mb-4 mt-4">
      <div id="custom-search-input">
        <div className="input-group col-md-12">
          <input
            type="text"
            className="  search-query form-control"
            placeholder="Search"
          />
          <span className="input-group-btn">
            <button className="btn btn-danger" type="button">
              <span className=" search-icon">Search</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
