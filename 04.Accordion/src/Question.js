import React, { useState } from 'react'
import { BsSlashCircleFill, BsPlusCircleFill } from 'react-icons/bs'

const Question = ({ question }) => {
  const { title, info } = question
  const [showInfo, setShowInfo] = useState(false)

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>

        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <BsSlashCircleFill /> : <BsPlusCircleFill />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Question
