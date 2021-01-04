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
  let challengeUrl = req.body.challengeUrl
  let choice = req.body.choice
  let securityCode = req.body.securityCode

  const cookieStore = new FileCookieStore('./cookies.json')
  const client = new Instagram({ username, password, cookieStore })

  await client.login()
  if (securityCode) {
    await client
      .updateChallenge({ challengeUrl, securityCode: securityCode })
      .catch((error) => {
        console.log(error)
      })
      .then((response) => {
        console.log(response)
      })
  } else {
    await client
      .updateChallenge({ challengeUrl, choice: choice })
      .catch((error) => {
        console.log(error)
      })
      .then((response) => {
        console.log(response)
      })
  }
})

module.exports = router
