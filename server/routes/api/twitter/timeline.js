'use strict'
const express = require('express')
const router = express.Router()
const twit = require('twit')

router.get('/', async (req, res) => {
  let accessToken = req.query.access_token_secret
  console.log('accessToken', accessToken)

  let config = req.query
  const T = new twit(config)
  await T.get('statuses/user_timeline', (err, data, response) => {
    if (err) {
      console.log('ERROR: in RETRIEVING TIMELINE')
    }
    console.log('SUCCESS: TIMELINE SENT')
    res.send(data)
  })
})

router.post('/', async (req, res) => {
  res.status(201).send()
})

module.exports = router
