'use strict'
const express = require('express')
const router = express.Router()
const twit = require('twit')
const http = require('http') // Prod should use https
const https = require('https')

router.post('/', async (req, res) => {
  console.log('req body', req.body)
  let config = req.body.config
  const T = new twit(config)
  let imgData = ''

  https
    .get(req.body.url, (resp) => {
      resp.setEncoding('base64')
      let body = 'data:' + resp.headers['content-type'] + ';base64,'
      resp.on('data', (data) => {
        imgData = data
        body += data
      })
      resp.on('end', () => {
        console.log('bodys', imgData.substring(0, 50))
        T.post(
          'media/upload',
          { media_data: imgData },
          function (err, data, response) {
            if (err) {
              console.log('error', err)
              res.status(201).send(err)
            } else {
              console.log('data', data)
              res.status(201).send(data)
            }
          }
        )
        return res.json({ result: body, status: 'success' })
      })
    })
    .on('error', (e) => {
      console.log(`Got error: ${e.message}`)
    })
})

module.exports = router
