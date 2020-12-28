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
    console.log('Every minte counts')
    // const newDate = new Date()
    var today = new Date()
    var time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    // const now = admin.firestore.Timestamp.now()
    // const nowNow = moment(newDate).format('LLL')
    // const timeNow = moment(newDate).format()
    const date = moment(today).format('YYYY-MM-DD')
    // const time = moment(newDate).format('H:MM:SS')

    // console.log('newDate: ' + newDate)
    // console.log('now: ' + now)
    // console.log('now: ' + nowNow)
    // console.log('timeNow: ' + timeNow)
    console.log('time new time', time)
    console.log('date', date)

    const docRef = admin
      .firestore()
      .collection('tweets')
      .where('startDate', '==', date)
      .where('status', '==', 'scheduled')
      .where('time', '<=', time)
    console.log('docRef: ' + docRef)

    return docRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`)

        // console.log('1', doc.data().performAt <= timeNow)
        // console.log('2', doc.data().performAt <= now)
        console.log('3', doc.data().time <= time)
        console.log('4', doc.data().startDate == date)

        let payload = {
          id: doc.id,
          ...doc.data(),
        }
        needTweet(payload)
      })
    })
  })
function needTweet(payload) {
  console.log('PAYLOAD', payload)
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
    console.log('data', data, id)
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
