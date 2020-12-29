const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const messaging = admin.messaging()
const db = admin.firestore()
const moment = require('moment')
var Twit = require('twit')
// min hour day month weekday https://crontab.guru/

// exports.scheduledFunction = functions.pubsub
//   .schedule('every 5 minutes')
//   .onRun((context) => {
//     console.log('This will be run every 5 minutes!')
//     const now = admin.firestore.Timestamp.now()
//     const nowNow = moment(now).format('LLL')

//     console.log('now: ' + now)
//     console.log('now: ' + nowNow)

//     return null
//   })

// exports.scheduledFunctionCrontab = functions.pubsub
//   .schedule('5 11 * * *')
//   .timeZone('America/New_York') // Users can choose timezone - default is America/Los_Angeles
//   .onRun((context) => {
//     console.log('This will be run every day at 11:05 AM Eastern!')
//     return null
//   })

let id

exports.scheduledFunctionMinute = functions.pubsub
  .schedule('* * * * *')
  .onRun((context) => {
    var today = new Date()
    var time = today.getHours() + ':' + today.getMinutes() // + ':' + today.getSeconds()
    var hour = today.getHours()
    var min = today.getMinutes()

    const date = moment(today).format('YYYY-MM-DD')

    console.log('time', hour, min)

    const docRef = admin
      .firestore()
      .collection('tweets')
      .where('scheduled_date', '==', date)
      .where('status', '==', 'scheduled')
      .where('scheduled_hour', '==', hour)
      .where('scheduled_minutes', '<=', min)

    return docRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let payload = {
          id: doc.id,
          ...doc.data(),
        }

        console.log('TWEET TIME', doc.data().time, time)
        needTweet(payload)
      })
    })
  })
function needTweet(payload) {
  id = payload.id
  var T = new Twit(payload.config)

  var tweet = {
    status: payload.tweets[0].textarea,
  }

  T.post('statuses/update', tweet, tweeted)
}
function tweeted(err, data, response) {
  if (err) {
    console.log('err', err)
  } else {
    admin.firestore().collection('tweets').doc(id).update({ status: 'done' })
  }
}
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
