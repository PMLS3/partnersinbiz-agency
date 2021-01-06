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

  let q = req.query.search
  console.log('date', req.query.since)
  if (req.query.since) {
    q = q + ' ' + 'since:' + req.query.since
    console.log('q', q)
  }

  const T = new twit(config)
  await T.post('search/tweets', { q: q, count: 100 }, (err, data, response) => {
    if (err) {
      console.log('ERROR: in SEARCH RESULT: ' + err.message)
    }
    console.log('SUCCESS: SEARCH SENT', response)
    res.send(data)
  })
})

router.post('/', async (req, res) => {
  res.status(201).send()
})

module.exports = router
