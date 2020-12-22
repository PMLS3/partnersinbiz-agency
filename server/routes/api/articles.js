const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
  res.send('hello')
})

router.post('/articles', (req, res) => {
  const click = { clickTime: new Date() }
  console.log(click)
  console.log(db)

  // db.collection('clicks').save(click, (err, result) => {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log('click added to db');
  //   res.sendStatus(201);
  // });
})

module.exports = router
