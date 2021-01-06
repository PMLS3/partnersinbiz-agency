'use strict'
const express = require('express')
const router = express.Router()
const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')

router.get('/', async (req, res) => {
  let username = req.query.username
  let password = req.query.password
  let userId = req.query.geuserIdtUser
  let first = req.query.first ? req.query.first : 20 // default 20

  const cookieStore = new FileCookieStore('./cookies.json')
  const client = new Instagram({ username, password, cookieStore })

  await client.login()
  const user = await client
    .getUserByUsername({ userId: userId, first: first })
    .catch((error) => {
      console.log(error)
    })
    .then((response) => {
      console.log(response)
    })

  console.log(user)
  res.send(user)
})

module.exports = router