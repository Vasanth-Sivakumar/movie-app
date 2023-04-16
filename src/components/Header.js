import React from "react";
import "../App.css";

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <div className="row">
      <div className="col-12 mb-3 d-flex justify-content-between align-items-center">
        <h1
          className="display-6 fw-bolder text-center mr-3 link-hover"
        >
          Movies
        </h1>
        <input
          className="col col-sm-5"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Type to search..."
        />
      </div>
      <hr />
    </div>
  );
};

export default Header;
