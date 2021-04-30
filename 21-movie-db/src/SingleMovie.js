import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './useFetch'

const noPicAvailable = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUg-3W6kCfr49tQgDEDkUc_KLJFHieT8ZMIKwp1AgIdodPotF-K4djuErSvYa84Cfcmw&usqp=CAU`

const SingleMovie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })

  const fetchMovie = async () => {
    const url = `${API_ENDPOINT}&i=${id}`

    const response = await fetch(url)
    const data = await response.json()

    if (data.Response === 'True') {
      setMovie(data)
      setIsLoading(false)
    } else {
      setError({ show: true, msg: data.Error })
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMovie()
  }, [id])

  if (isLoading) {
    return <div className='loading'></div>
  }
  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    )
  }

  const { Title: title, Year: year, Poster: poster, Plot: plot } = movie
  return (
    <div className='single-movie'>
      <img src={poster === 'N/A' ? noPicAvailable : poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </div>
  )
}

export default SingleMovie
