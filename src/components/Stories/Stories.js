import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'

const Stories = ({ user, alerts }) => {
  const [stories, setStories] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/stories`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => {
        setStories(responseData.data.storyUploads)
        return responseData
      })
      .then((responseData) => {
        if (responseData.data.storyUploads.length === 0) {
          alert({
            heading: 'No stories!',
            message: 'Make some stories!',
            variant: 'danger' })
        }
      })
      .catch(console.error)
  }, [])

  const storiesJsx = stories.filter(story => {
    return story.owner._id === user._id
  }).map(story => (
    <p key={story._id}>
      <Link to={`/stories/${story._id}`}>{story.chapter}</Link>
    </p>
  ))

  return (
    <div>
      <h1>Stories</h1>
      <p>Check out your stories or make some new ones!</p>
      {storiesJsx}
    </div>
  )
}

export default Stories
