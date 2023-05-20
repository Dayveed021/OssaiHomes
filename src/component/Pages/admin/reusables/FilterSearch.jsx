import React from "react";
import "./reusables.scss";

const FilterSearch = ({ background, marginBlock, marginInline }) => {
  return (
    <div
      className="search-filter"
      style={{ marginBlock: marginBlock, marginInline }}
    >
      <div className="search" style={{ backgroundColor: background }}>
        <img src="../../flaticons/search1.png" alt="" />
        <input type="search" placeholder="Search" />
      </div>
      <div className="filter" style={{ backgroundColor: background }}>
        <h4>Filter</h4>
        <img src="../../flaticons/menu2.png" alt="" />
      </div>
    </div>
  );
};

export default FilterSearch;
