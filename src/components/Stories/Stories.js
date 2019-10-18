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
      .then(responseData => setStories(responseData.data.storyUploads))
      .catch(console.error)
  }, [])

  const storiesJsx = stories.map(story => (
    <p key={story._id}>
      <Link to={`/stories/${story._id}`}>{story.chapter}</Link>
    </p>
  ))

  return (
    <div>
      <h1>Stories</h1>
      {storiesJsx}
    </div>
  )
}

export default Stories
