import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import StoryForm from './StoryForm'

const EditStory = ({ user, match, alert, history }) => {
  const [storyUpload, setStory] = useState({ event: '', chapter: '', url: '', narrative: '' })
  console.log(storyUpload)
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/stories/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setStory(responseData.data.storyUpload._id))
      .catch(console.error)
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    console.log(storyUpload)
    formData.append('_id', storyUpload)
    axios({
      url: `${apiUrl}/stories/${match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: formData,
      contentType: false,
      processData: false
    })
      .then(() => alert({ heading: 'Success', message: 'Story has been updated', variant: 'success' }))
      .then(() => history.push(`/stories/${match.params.id}`))
      .catch(() => alert({ heading: 'Change unsuccessful.', message: 'Something went wrong!', variant: 'danger' }))
  }

  return (
    <div>
      <StoryForm
        story={storyUpload}
        handleSubmit={handleSubmit}
        cancelPath={`/stories/${match.params.id}`}
      />
    </div>
  )
}

export default withRouter(EditStory)
