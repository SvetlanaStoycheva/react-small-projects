import React, { useEffect } from 'react'
import { useFetch } from './useFetch'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

function App() {
  const { photos, loading, setPage, query, setQuery, fetchImages } = useFetch()
  // console.log(photos)

  const handleSubmit = (e) => {
    e.preventDefault()
    setPage(1)
    fetchImages()
  }

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      // console.log(`innerHeignt ${window.innerHeight}`)
      // console.log(`scrollY ${window.scrollY}`)
      // console.log(`body height ${document.body.scrollHeight}`)
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        // console.log('it worked')
        setPage((oldPage) => {
          return oldPage + 1
        })
      }
    })
    return () => window.removeEventListener('scroll', event)
  }, [])

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input
            type='text'
            placeholder='search'
            className='form-input'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className='submit-btn' type='submit' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((photo, index) => {
            return <Photo key={index} photo={photo} />
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  )
}

export default App
