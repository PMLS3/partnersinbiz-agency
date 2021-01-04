'use strict'
const express = require('express')
const router = express.Router()
const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')

router.get('/', async (req, res) => {
  let username = req.query.username
  let password = req.query.password
  const cookieStore = new FileCookieStore('./cookies.json')
  const client = new Instagram({ username, password, cookieStore })

  await client.login()
  const feed = await client
    .getHome(
      'KGEAxpEdUwUrxxoJvxRoQeXFGooSlADHZ8UaDdSWbnOIxxoUUhyciJ7EGlxNlZjaYcUaXTgUM00qyBrgBhUsLezIGqVTlxqausga5W-fVax9xRryaBdN1EnIGvdQFgzxoMgaFoLO7v7xWQA='
    )
    .catch((error) => {
      console.log(error)
    })
    .then((response) => {
      console.log(response)
    })

  console.log(feed)
  res.send(feed)
})

module.exports = router
