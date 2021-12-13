import React from 'react'

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          // <div className="menu-filter">
          //   <div className="tab-title-menu" key={index}>
          //     <h2>{category}</h2>
          //     <p> <i className="flaticon-canape" onClick={() => filterItems(category)}></i> </p>
          //   </div>
          //   </div>
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories