import React from 'react'

const FilterSearch = () => {
  return (
    <div className="search-filter">
        <div className="search">
            <img src="../../flaticons/search1.png" alt="" />
            <input type="search" placeholder="Search" />
        </div>
        <div className="filter">
            <h4>Filter</h4>
            <img src="../../flaticons/menu2.png" alt="" />
        </div>
    </div>
  )
}

export default FilterSearch