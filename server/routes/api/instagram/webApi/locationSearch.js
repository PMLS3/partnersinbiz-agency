'use strict'
const express = require('express')
const router = express.Router()
const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')

router.get('/', async (req, res) => {
  let username = req.query.username
  let password = req.query.password
  let longitude = req.query.longitude
  let latitude = req.query.latitude
  let query = req.query.query

  const cookieStore = new FileCookieStore('./cookies.json')
  const client = new Instagram({ username, password, cookieStore })

  await client.login()
  const venues = client.locationSearch({
    query: query,
    latitude: latitude,
    longitude: longitude,
  })

  console.log(venues)
  res.send(venues)
})

module.exports = router
