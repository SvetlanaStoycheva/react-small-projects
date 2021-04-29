import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

//if the key theme exist in the localeStaorage, set variable theme
//to what it is in the storage. Otherwise set default 'light-theme'.
const getStorageTheme = () => {
  let theme = 'light-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme())

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleToggle = () => {
    theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme')
  }

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>overreacted</h1>
          <button className='btn' onClick={handleToggle}>
            toggle
          </button>
        </div>
      </nav>
      <section className='article'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}

export default App
