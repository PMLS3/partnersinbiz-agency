const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const router = express.Router()

const page_url =
  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=2500&type=restaurant&keyword=cruise&key=AIzaSyCB-A02_U3WrFZGBkL2a1jucVpmnrfC_y8'

myStates = []
myStates2 = []

async function getUSStates() {
  let data = await axios.get(page_url)
  console.log(' data.results[19]', data.data.results[19])
  let myData = data.data
  let newLoc =
    data.data.results[19].geometry.location.lat +
    ',' +
    data.data.results[19].geometry.location.lng
  console.log(newLoc)
  let newURL =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
    newLoc +
    '&radius=2500&type=restaurant&keyword=cruise&key=AIzaSyCB-A02_U3WrFZGBkL2a1jucVpmnrfC_y8'
  console.log('newURL', newURL)
  let datas = await axios.get(newURL)
  console.log('datas', datas.data)
  let latestData = [...datas.data.results, ...myData]
  console.log('latestData', latestData)
  myStates = latestData.results
}
router.get('/', async (req, res) => {
  res.send(myStates)
})

router.post('/', async (req, res) => {
  console.log('req body', req.body)
  getUSStates()
  res.status(201).send()
})

module.exports = router
