import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data)
      setLoading(false)
      setTours(data)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length < 1) {
    return (
      <div className='title'>
        <h1>no tours left</h1>
        <button className='btn' onClick={fetchTours}>
          refresh
        </button>
      </div>
    )
  }

  return (
    <main>
      <Tours tours={tours} setTours={setTours} />
    </main>
  )
}

export default App
