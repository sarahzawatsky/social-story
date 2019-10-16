import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import StoryForm from './StoryForm'

const EditStory = ({ user, match, alert, history }) => {
  const [storyUpload, setStory] = useState({ chapter: '', url: '', narrative: '' })

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

  const handleChange = event => {
    event.persist()
    setStory(storyUpload => ({ ...storyUpload, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    // const formData = new FormData(event.target)
    console.log('edit story', storyUpload)
    // console.log('form data in edit story', formData)
    axios({
      url: `${apiUrl}/stories/${match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { storyUpload },
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
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/stories/${match.params.id}`}
      />
    </div>
  )
}

export default withRouter(EditStory)
