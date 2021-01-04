'use strict'
const express = require('express')
const router = express.Router()
const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')

router.get('/', async (req, res) => {
  let username = req.query.username
  let password = req.query.password
  let shortcode = req.query.shortcode
  let first = req.query.first
  let after = req.query.after

  const cookieStore = new FileCookieStore('./cookies.json')
  const client = new Instagram({ username, password, cookieStore })

  await client.login()
  const result = await client
    .getMediaLikes({ shortcode: shortcode, first: first, after: after })
    .catch((error) => {
      console.log(error)
    })
    .then((response) => {
      console.log(response)
    })

  console.log(result)
  res.send(result)
})

module.exports = router
