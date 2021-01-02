'use strict'
const express = require('express')
const router = express.Router()
const twit = require('twit')

router.post('/', async (req, res) => {
  console.log('req body', req.body)
  console.log('req body', req.body.user_id)
  console.log('req body', req.body.screen_name)

  let config = req.body.config
  const T = new twit(config)

  let q = ''
  if (req.body.user_id) {
    q = q + 'user_id:' + req.body.user_id
  }

  if (req.body.screen_name) {
    q = q + 'screen_name:' + req.body.screen_name
  }
  console.log('follow', q)
  T.post(
    'friendships/create',
    { id: req.body.user_id },
    function (err, data, response) {
      if (err) {
        console.log('ERROR:', err)
        res.status(404).send(err)
      } else {
        console.log('SUCCESS:')
        res.status(201).send()
      }
    }
  )
})

module.exports = router
