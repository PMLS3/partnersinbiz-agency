'use strict'
const express = require('express')
const router = express.Router()
const twit = require('twit')

router.post('/', async (req, res) => {
  console.log('req body', req.body.config)
  let config = req.body.config
  const T = new twit(config)
  const stream = T.stream('statuses/filter', { track: '@PeetStander' })
  stream.on('connected', function (response) {
    //...
    console.log('connected', response)
  })
  stream.on('follow', followed)
  res.status(201).send()
})

function followed(event) {
  console.log('Follow event is running')

  let name = event.source.name
  screenName = event.source.screen_name

  tweetNow(
    'Thank you @' + screenName + ' . I hope you get useful information here.'
  )
}

function tweetNow(tweetText) {
  let tweet = {
    status: tweetText,
  }

  T.post('statuses/update', tweet, (err, data, response) => {
    if (err) {
      console.log('ERROR: in Follow TWEET')
    }
    console.log('SUCCESS: Repliyed to Follower')
  })
}

module.exports = router
