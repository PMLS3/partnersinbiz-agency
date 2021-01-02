'use strict'
const express = require('express')
const router = express.Router()
const twit = require('twit')

router.get('/', async (req, res) => {})

router.post('/', async (req, res) => {
  console.log('req body', req.body)
  console.log('req post_id', req.body.post_id)

  let config = req.body.config
  const T = new twit(config)
  T.post(
    'statuses/retweet/:id',
    { id: req.body.post_id },
    function (err, data, response) {
      if (err) {
        console.log('error', err)
        res.status(404).send(err)
      } else {
        console.log('success')
        res.status(201).send(data)
      }
    }
  )
})

module.exports = router
