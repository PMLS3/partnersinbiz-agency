'use strict'
const express = require('express')
const router = express.Router()
const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')

router.get('/', async (req, res) => {
  let username = req.query.username
  let password = req.query.password
  let userId = req.query.userId

  const cookieStore = new FileCookieStore('./cookies.json')
  const client = new Instagram({ username, password, cookieStore })

  await client.login()
  await client
    .getChainsData({ userId })
    .catch((error) => {
      console.log(error)
    })
    .then((response) => {
      console.log(response)
      console.log(response)
      res.send(response)
    })
})

module.exports = router
