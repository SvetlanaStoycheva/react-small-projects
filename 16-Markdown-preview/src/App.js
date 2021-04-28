import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
// ## Example:
// #### markdown preview
// - first
// - second
// 1. Sven
// 2. Stoune
// ```
// Hello Simi!
// ```
// [wikipedia](https://www.wikipedia.org)
// - ![image](https://images.pexels.com/photos/2598683/pexels-photo-2598683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)

function App() {
  const [markdown, setMarkdown] = useState('## markdown preview')

  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
