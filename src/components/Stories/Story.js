import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Story = ({ user, alert, match }) => {
  const [story, setStory] = useState({})
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/stories/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setStory(responseData.data.storyUpload))
      .catch(console.error)
  }, [])

  // REQUEST TO DELETE
  const destroy = () => {
    axios({
      url: `${apiUrl}/stories/${match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { story }
    })
      .then(() => setDeleted(true))
      .then(() => {
        alert({ heading: 'Success', message: 'Deleted!', variant: 'success' })
      })
      .catch(() => alert({ heading: 'Uh-oh.', message: 'Not deleted!', variant: 'danger' }))
      .catch(console.error)
  }

  if (!story) {
    return <p>Loading...</p>
  }

  if (deleted) {
    // alert({ heading: 'Deleted', message: 'Story has been deleted', variant: 'success' })
    return <Redirect to={
      { pathname: '/stories' } } />
  }

  return (
    <div>
      <h4 className="story-title">{story.chapter}</h4>
      <p>{story.narrative}</p>
      <img src={story.url}/>
      <div className="story-buttons">
        <Button onClick={destroy}>Delete Chapter</Button>
        {' '}
        <Button href={`#/stories/${match.params.id}/edit`}>Edit</Button>
        {' '}
        <Button href={'#/stories/'}>Back to all stories</Button>
      </div>
    </div>
  )
}

export default withRouter(Story)
