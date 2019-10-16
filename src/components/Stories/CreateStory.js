import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import StoryForm from './StoryForm'

const CreateStory = ({ user }) => {
  console.log(user)
  const storyObject = {
    _id: user._id,
    chapter: '',
    narrative: '',
    url: ''
  }
  const [created, setCreated] = useState(false)
  const [story, setStory] = useState(storyObject)

  const handleChange = event => {
    event.persist()
    setStory(story => ({ ...story, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    // ADD A LOADING GIF!!!!!
    const formData = new FormData(event.target)
    for (const pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }
    axios({
      url: `${apiUrl}/stories`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: formData,
      contentType: false,
      processData: false
    })
      .then(responseData => setCreated(responseData.data.storyUpload._id))
      .catch(console.error)
  }

  if (created) {
    return <Redirect to={`/stories/${created}`} />
  }

  return (
    <div>
      <StoryForm
        story={story}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </div>
  )
}

export default CreateStory
