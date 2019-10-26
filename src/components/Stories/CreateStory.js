import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import StoryForm from './StoryForm'
import messages from '../AutoDismissAlert/messages'

const CreateStory = ({ user, alert }) => {
  const [created, setCreated] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
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
      .then(() => {
        alert({ heading: 'Success', message: messages.createSuccess, variant: 'success' })
      })
      .catch(() => alert({ heading: 'Your chapter was not created.', message: messages.failure, variant: 'danger' }))
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
        cancelPath="#stories"
      />
    </div>
  )
}

export default CreateStory
