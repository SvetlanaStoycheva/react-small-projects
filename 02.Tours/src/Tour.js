import React, { useState } from 'react'

const Tour = ({ id, name, image, info, price, tours, setTours }) => {
  const [readMore, setReadMore] = useState(false)

  const handleDelete = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read More'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => handleDelete(id)}>
          not interested
        </button>
      </footer>
    </article>
  )
}

export default Tour
