import React from 'react'
import { useFetch } from './useFetch'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const { setQuery, error } = useFetch()
  const { query } = useGlobalContext()

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search movies</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className='error'>{error.show && error.msg}</div>
    </form>
  )
}

export default SearchForm
