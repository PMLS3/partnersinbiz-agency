'use strict'
const express = require('express')
const router = express.Router()
const twit = require('twit')

router.post('/', async (req, res) => {
  console.log('req body', req.body)
  let config = req.body.config
  const T = new twit(config)
  T.post(
    'statuses/update',
    { status: `${req.body.message}` },
    function (err, data, response) {
      if (err) {
        res.status(201).send(err)
      } else {
        res.status(201).send(data)
      }
    }
  )
})

module.exports = router
