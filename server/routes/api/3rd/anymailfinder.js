const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', async (req, res) => {
  res.send(posts)
})

router.post('/', async (req, res) => {
  axios.post('https://site.com/', {
    foo: 'bar',
  })
  res.status(201).send()
})

module.exports = router
