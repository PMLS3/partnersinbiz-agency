'use strict'
const express = require('express')
const router = express.Router()
const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')

router.get('/', async (req, res) => {
  let username = req.query.username
  let password = req.query.password
  let shortcode = req.query.shortcode

  const cookieStore = new FileCookieStore('./cookies.json')
  const client = new Instagram({ username, password, cookieStore })

  await client.login()
  const media = await client
    .getMediaByShortcode({ shortcode: shortcode })
    .catch((error) => {
      console.log(error)
    })
    .then((response) => {
      console.log(response)
    })

  console.log(media)
  res.send(media)
})

module.exports = router
