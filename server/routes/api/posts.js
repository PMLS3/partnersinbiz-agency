const express = require('express')
const router = express.Router()

let posts = [
  { id: 1, Title: 'Hello' },
  { id: 2, Title: 'Hello' },
  { id: 3, Title: 'Hello' },
  { id: 4, Title: 'Whoo' },
]

router.get('/', async (req, res) => {
  res.send(posts)
})

router.post('/', async (req, res) => {
  console.log('req body', req.body)

  posts.push({
    Title: req.body.title,
    Author: req.body.author,

    createdAt: new Date(),
  })
  res.status(201).send()
})

router.delete('/:id', async (req, res) => {
  let postID = req.params.id

  var index = posts
    .map((x) => {
      return x.id
    })
    .indexOf(postID)

  posts.splice(index, 1)
  res.status(201).send()

  console.log('posts', posts)
})
module.exports = router
