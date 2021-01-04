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
  let data = req.body.data

  const cookieStore = new FileCookieStore('./cookies.json')
  const client = new Instagram({ username, password, cookieStore })

  await client.login()

  await client
    .updateProfile(data)
    .catch((error) => {
      console.log(error)
    })
    .then((response) => {
      console.log(response)
    })
  res.status(201).send(data)
})

module.exports = router
