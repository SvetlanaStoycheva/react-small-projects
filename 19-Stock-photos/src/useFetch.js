import { useState, useEffect } from 'react'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

export const useFetch = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [query, setQuery] = useState('')

  const fetchImages = async () => {
    setLoading(true)
    let url
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`
    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    } else {
      url = `${mainUrl}${clientID}${urlPage}`
    }

    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results
        } else if (query) {
          return [...oldPhotos, ...data.results]
        } else {
          return [...oldPhotos, ...data]
        }
      })

      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [page])
  return { photos, loading, page, setPage, query, setQuery, fetchImages }
}
