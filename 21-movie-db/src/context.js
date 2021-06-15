import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('blade runner')

  const fetchMovies = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${API_ENDPOINT}&s=${query}`)
      const data = await response.json()
      if (data.Response === 'False') {
        setError({ show: true, msg: data.Error })
        setLoading(false)
      } else {
        setMovies(data.Search)
        setError({ show: false, msg: `` })
        setLoading(false)
      }
      // console.log(data.Search)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchMovies()
  }, [query])

  return (
    <AppContext.Provider value={{ loading, error, query, setQuery, movies }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
