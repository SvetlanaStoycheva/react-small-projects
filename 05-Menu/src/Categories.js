import React from 'react'

const Categories = ({ filterItems, uniqueCategories }) => {
  return (
    <div className='btn-container'>
      {uniqueCategories.map((c, index) => (
        <button
          key={index}
          className='filter-btn'
          onClick={() => filterItems(c)}
        >
          {c}
        </button>
      ))}
    </div>
  )
}

export default Categories
