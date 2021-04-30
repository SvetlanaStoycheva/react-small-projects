import React from 'react'
import { useFetch } from './useFetch'
import { Link } from 'react-router-dom'

const noPicAvailable = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUg-3W6kCfr49tQgDEDkUc_KLJFHieT8ZMIKwp1AgIdodPotF-K4djuErSvYa84Cfcmw&usqp=CAU`

const Movies = () => {
  const { movies, isLoading } = useFetch()

  if (isLoading) {
    return <div className='loading'></div>
  }

  return (
    <section className='movies'>
      {movies.map((movie, index) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie
        return (
          <Link key={index} to={`movies/${id}`} className='movie'>
            <article>
              <img
                src={poster === 'N/A' ? noPicAvailable : poster}
                alt={title}
              />
              <div className='movie-info'>
                <h4 className='title'>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies
