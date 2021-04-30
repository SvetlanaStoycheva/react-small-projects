import { useState, useEffect } from 'react'
import { useGlobalContext } from './context'
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

export const useFetch = () => {
  const { query, setQuery } = useGlobalContext()

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })

  const fetchMovies = async () => {
    const url = `${API_ENDPOINT}&s=${query}`

    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()

      if (data.Response === 'True') {
        setMovies(data.Search)
        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: data.Error })
      }
      setIsLoading(false)
    } catch (error) {}
  }

  useEffect(() => {
    fetchMovies()
  }, [query])

  return { isLoading, error, movies, query, setQuery }
}
