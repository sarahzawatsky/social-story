import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const StoryForm = ({ story, handleSubmit }) => {
  const cancelPath = story._id ? `#/stories/${story._id}` : '#stories'

  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="chapter">
        <Form.Label>Chapter</Form.Label>
        <Form.Control
          type="text"
          placeholder="Chapter"
          name="chapter"
        />
      </Form.Group>
      <Form.Group controlId="narrative">
        <Form.Label>Narrative</Form.Label>
        <Form.Control
          type="text"
          placeholder="Narrative"
          name="narrative"
        />
      </Form.Group>
      <Form.Group controlId="file" encType="multipart/form-data">
        <Form.Label>Upload</Form.Label>
        <Form.Control
          type="file"
          placeholder="Upload"
          name="file"
        />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
      <Button variant="secondary" href={cancelPath} className="ml-2" type="button">Cancel</Button>
    </Form>
  )
}

export default StoryForm

//   <Form.Group controlId="event">
//     <Form.Label>Title</Form.Label>
//     <Form.Control
//       type="text"
//       placeholder="Story"
//       name="event"
//     />
//   </Form.Group>
