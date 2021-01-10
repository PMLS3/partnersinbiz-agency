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
  convertImgToBase64(req.body.url, function (base64Img) {
    console.log(base64Img)
  })
  https
    .get(req.body.url, (resp) => {
      resp.setEncoding('base64')
      let body = 'data:' + resp.headers['content-type'] + ';base64,'
      resp.on('data', (data) => {
        imgData = data
        body += data
      })
      resp.on('end', () => {
        console.log('body', body.substring(0, 50))
        T.post(
          'media/upload',
          { media: imgData },
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

function convertImgToBase64(url, callback, outputFormat) {
  console.log('URL', url)
  if (process.client) {
    var canvas = document.createElement('CANVAS')
    var ctx = canvas.getContext('2d')
    var img = new Image()
    img.crossOrigin = 'Anonymous'
    img.onload = function () {
      canvas.height = img.height
      canvas.width = img.width
      ctx.drawImage(img, 0, 0)
      var dataURL = canvas.toDataURL(outputFormat || 'image/png')
      callback.call(this, dataURL)
      // Clean up
      canvas = null
    }
    img.src = url

    console.log('img', img.substring(0, 50))
    // const T = new twit(config)

    // T.post(
    //   'media/upload',
    //   { media: body },
    //   function (err, data, response) {
    //     if (err) {
    //       console.log('error', err)
    //       res.status(201).send(err)
    //     } else {
    //       console.log('data', data)
    //       res.status(201).send(data)
    //     }
    //   }
    // )
  }
}

module.exports = router
