'use strict'
const express = require('express')
const router = express.Router()
const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')

router.get('/', async (req, res) => {
  let username = req.query.username
  let password = req.query.password
  let challengeUrl = req.query.challengeUrl

  const cookieStore = new FileCookieStore('./cookies.json')
  const client = new Instagram({ username, password, cookieStore })

  await client.login()
  const activity = await client.getChallenge({ challengeUrl: challengeUrl })

  console.log(activity)
  res.send(activity)
})

module.exports = router
