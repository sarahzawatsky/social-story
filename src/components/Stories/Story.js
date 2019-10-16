import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter, Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Story = ({ user, alerts, match }) => {
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

  // AJAX request to delete story
  const destroy = () => {
    console.log()
    axios({
      url: `${apiUrl}/stories/${match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { story }
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!story) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/stories' } } />
  }

  return (
    <div>
      <h4>{story.chapter}</h4>
      <p>{story.narrative}</p>
      <img src={story.url}/>
      <Button onClick={destroy}>Delete Chapter</Button>
      <Button href={`#/stories/${match.params.id}/edit`}>Edit</Button>
      <Link to="/stories">Back to all stories</Link>
    </div>
  )
}

//       {story.owner.token === user.token && <Button onClick={ () => destroy(story._id) }>Delete</Button>}

export default withRouter(Story)
