'use strict'
const express = require('express')
const router = express.Router()
const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')

router.post('/', async (req, res) => {
  console.log('req body', req.body)

  let config = req.body.config
  let username = config.username
  let password = config.password
  let url = req.body.url
  let caption = req.body.caption
  let post = req.body.post

  const cookieStore = new FileCookieStore('./cookies.json')
  const client = new Instagram({ username, password, cookieStore })

  const photo = url

  await client.login()

  // Upload Photo to feed or story, just configure 'post' to 'feed' or 'story'
  await client
    .uploadPhoto({
      photo: photo,
      caption: caption,
      post: post,
    })
    .catch((error) => {
      console.log(error)
    })
    .then((response) => {
      console.log(response)
    })
  console.log(`https://www.instagram.com/p/${media.code}/`)
})

module.exports = router
