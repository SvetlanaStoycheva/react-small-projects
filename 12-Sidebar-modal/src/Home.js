import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
// import { AppContext } from './context'
// with the custom hook useGlobalContext, we don't need to import useContext and AppContect
import { useGlobalContext } from './context'

const Home = () => {
  // const data = useContext(AppContext)
  const { openSidebar, openModal } = useGlobalContext()

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        show modal
      </button>
    </main>
  )
}

export default Home
