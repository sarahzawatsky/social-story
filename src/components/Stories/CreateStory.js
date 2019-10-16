import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import StoryForm from './StoryForm'

const CreateStory = ({ user }) => {
  console.log('user', user)

  const [created, setCreated] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    // ADD A LOADING GIF!!!!!
    const formData = new FormData(event.target)
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
      .then(() => alert({ heading: 'Success', message: 'Chapter has been created', variant: 'success' }))
      .catch(() => alert({ heading: 'Your chapter was not created.', message: 'Something went wrong!', variant: 'danger' }))
      .catch(console.error)
  }

  if (created) {
    return <Redirect to={`/stories/${created}`} />
  }

  return (
    <div>
      <StoryForm
        story={created}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </div>
  )
}

export default CreateStory
