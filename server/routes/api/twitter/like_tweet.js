'use strict'
const express = require('express')
const router = express.Router()
const twit = require('twit')

router.get('/', async (req, res) => {
  //   let accessToken = req.query.access_token_secret
  //   console.log('accessToken', accessToken)
  //   let config = {
  //     consumer_key: req.query.consumer_key,
  //     consumer_secret: req.query.consumer_secret,
  //     access_token: req.query.access_token,
  //     access_token_secret: req.query.access_token_secret,
  //   }
  //   console.log('screen_name', req.query.user_id)
  //   const T = new twit(config)
  //   await T.get(
  //     'favorite/create',
  //     { id: req.query.user_id },
  //     (err, data, response) => {
  //       if (err) {
  //         console.log('ERROR: in SEARCH RESULT: ' + err.message)
  //       }
  //       console.log('SUCCESS: SEARCH SENT')
  //       res.send(data)
  //     }
  //   )
})

router.post('/', async (req, res) => {
  console.log('req body', req.body)
  console.log('req body', req.body.post_id)

  let config = req.body.config
  const T = new twit(config)
  console.log('config', req.body.post_id)
  T.post(
    'favorites/create',
    { id: req.body.post_id },
    function (err, data, response) {
      if (err) {
        console.log('error', err)

        res.status(404).send(err)
      } else {
        console.log('success', data)

        res.status(201).send(data)
      }
    }
  )
})

module.exports = router
