import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const { isLoading, hits, deleteStory } = useGlobalContext()

  if (isLoading) {
    return <div className='loading'></div>
  }

  return (
    <section className='stories'>
      {hits.map((story) => {
        // console.log(story)
        const {
          objectID,
          story_title,
          title,
          num_comments,
          story_url,
          url,
          points,
          author,
        } = story
        return (
          <article key={objectID} className='story'>
            <h4 className='title'>
              {title}
              {story_title}
            </h4>
            <p className='info'>
              {points} point by <span>{author} | </span>
              {num_comments} comments
            </p>
            <div>
              <a
                href={url === null ? story_url : url}
                className='read-link'
                target='_blank'
                rel='noreferrer noopener'
              >
                read more
              </a>
              <button
                className='remove-btn'
                onClick={() => deleteStory(objectID)}
              >
                remove
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Stories
