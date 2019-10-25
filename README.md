# Social Story

Social Story is a social-emotional learning tool for people who are challenged by social and personal scenarios like transitions, personal care, and new experiences.

Social stories have traditionally been used to help autistic people learn about and process upcoming new experiences or to learn helpful strategies and behaviors when interacting in social situations.

A social story consists of images and brief captions that explain what is going to happen or what to do in a given situation.  If a particular instance is likely to be a sensory trigger, the story might also include an affirmation such as 'I am okay' or offer a reminder for a solution such as 'I can put my headphones on'.

Authenticated users who create social stories using this app are able to create stories by uploading a chapter name, a caption, and an image as a form.


# Deployed Repos and Sites
Backend Repo:
https://github.com/sarahzawatsky/capstone-backend

Backend Site:
http://vast-ridge-48751.herokuapp.com/

Frontend Repo:
https://github.com/sarahzawatsky/social-story

Frontend Site:
https://sarahzawatsky.github.io/social-story/#/

# Technologies Used
- Javascript
- React
- Bootstrap
- express
- MongoDB
- Mongoose
- CSS
- HTML
- Node
- AWS

# Unsolved Problems
- Chapters should be organized into stories:
  - User has many stories.  Stories have many chapters.  At this time the user actually only has one resource for chapters.
- Create a story.
- Edit a story title.
- Delete a story.
- Edit forms should populate previously entered and saved data.
- Ability to browse and favorite community gallery of stories.
- Ability to set some stories to public or private.

# Planning, Process, and Problem-Solving
I knew right away that this app would require multiple resources, however I decided to start with just one resource, in this case, individual chapters of a story.  A social story is most effective when visuals are provided so I decided to focus much of my time ensuring files could be uploaded to AWS.

# Wireframes and User stories
As a user, I want to be able to:
- Sign up
- Sign in
- Change my password
- Sign out
- Create a new story
- Edit a new story
- Delete a story
- See all my stories
- Upload a photo to accompany each of my stories
- Give my stories a title and a narrative
- See only my stories when I log in

# Wireframes
![Wireframes](https://i.imgur.com/FAUUp3i.jpg)


# App Screenshot
![Social Story](https://i.imgur.com/QyRXh5x.png)


# Setup and Installation Instructions
1. Fork and clone.
2. Install dependencies by running `npm install` (see package.json)
3. Run `npm start` to run in browser.
