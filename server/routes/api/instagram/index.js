'use strict'
const express = require('express')
const router = express.Router()
const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')
const clientProfile = require('./webApi/index')
router.get('/', async (req, res) => {
  let client = {}

  if (client) {
    console.log('client', client)
  } else {
    let username = req.query.username
    let password = req.query.password
    const cookieStore = new FileCookieStore('./cookies.json')
    client = new Instagram({ username, password, cookieStore })

    await client.login()
    let profile = await clientProfile(client)
    res.send(profile)
  }
})

module.exports = router
