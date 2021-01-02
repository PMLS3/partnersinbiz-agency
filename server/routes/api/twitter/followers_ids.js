'use strict'
const express = require('express')
const router = express.Router()
const twit = require('twit')

router.get('/', async (req, res) => {
  let accessToken = req.query.access_token_secret
  console.log('accessToken', accessToken)

  let config = {
    consumer_key: req.query.consumer_key,
    consumer_secret: req.query.consumer_secret,
    access_token: req.query.access_token,
    access_token_secret: req.query.access_token_secret,
  }

  const T = new twit(config)
  await T.get(
    'followers/ids',
    { screen_name: req.query.screen_name },
    (err, data, response) => {
      if (err) {
        console.log('ERROR: in SEARCH RESULT: ' + err.message)
      }
      console.log('SUCCESS: SEARCH SENT')
      res.send(data)
    }
  )
})

router.post('/', async (req, res) => {
  res.status(201).send()
})

module.exports = router
