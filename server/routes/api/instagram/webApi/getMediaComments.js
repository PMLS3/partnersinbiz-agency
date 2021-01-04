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
    .getMediaComments({ shortcode: shortcode, first: first, after: after })
    .catch((error) => {
      console.log(error)
    })
    .then((response) => {
      console.log(response)
    })

  //The query cursor 'after' maybe return an array, if array you need to convert like this:
  let pointer = response.page_info.end_cursor
  // this will try to convert array to json stringify
  try {
    pointer = JSON.parse(pointer)
    pointer = JSON.stringify(pointer)
  } catch (e) {
    console.log("Pointer is not array!, don't need to be converted!")
  }

  console.log(result)
  res.send(result)
})

module.exports = router
