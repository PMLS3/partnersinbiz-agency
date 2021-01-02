// const admin = require('firebase-admin')
// admin.initializeApp()
const moment = require('moment')
var Twit = require('twit')

// Utility function - Gives unique elements from an array
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}
module.exports = {
  retweet: function () {
    console.log('RETWEET')
    const docRef = admin
      .firestore()
      .collection('retweets')
      .where('status', '==', 'scheduled')

    return docRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let payload = {
          id: doc.id,
          ...doc.data(),
        }

        var min = 5,
          max = 10
        var random = Math.floor(Math.random() * (max - min + 1) + min) //Generate Random number between 5 - 10
        console.log('Wait for ' + random + ' seconds before RETWEET')
        // retweetAgain(payload, 1)
        needRetweet(payload)

        // setTimeout(needRetweet(payload), random * 1000)
      })
    })
  },

  likeTweet: function () {
    console.log('LIKES')
    const docRef = admin
      .firestore()
      .collection('likeTweets')
      .where('status', '==', 'scheduled')

    return docRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let payload = {
          id: doc.id,
          ...doc.data(),
        }

        var min = 5,
          max = 10
        var random = Math.floor(Math.random() * (max - min + 1) + min) //Generate Random number between 5 - 10
        console.log('Wait for ' + random + ' seconds before Like')
        // retweetAgain(payload, 1)
        needlikeTweet(payload)

        // setTimeout(needlikeTweet(payload), random * 1000)
      })
    })
  },

  needlikeTweet: function (payload) {
    var T = new Twit(payload.config)

    let params = {
      q: payload.liked_words + '',
      result_type: 'recent',
      count: 5,
      lang: 'en',
    }

    T.get(
      'search/tweets',
      params,
      function (err_search, data_search, response_search) {
        let tweets = data_search.statuses
        if (!err_search) {
          let tweetIDList = []
          for (let tweet of tweets) {
            // To avoid duplication of retweets
            if (tweet.text.startsWith('RT @')) {
              // If tweet text starts with "RT @" then it is a retweeted tweet,
              // with a different 'id_str' than the original
              console.log('\nStarts with RT@, adding retweeted status id_str')
              if (tweet.retweeted_status) {
                tweetIDList.push(tweet.retweeted_status.id_str)
              } else {
                tweetIDList.push(tweet.id_str)
              }
            } else {
              tweetIDList.push(tweet.id_str)
            }
          }

          // Get only unique entries
          tweetIDList = tweetIDList.filter(onlyUnique)

          console.log('TweetID LIST = \n' + tweetIDList)

          // Call the 'statuses/retweet/:id' API endpoint for retweeting EACH of the tweetID
          for (let tweetID of tweetIDList) {
            T.post(
              'favorites/create',
              { id: tweetID },
              function (err_rt, data_rt, response_rt) {
                if (!err_rt) {
                  console.log('\n\nRetweeted! ID - ' + tweetID)
                } else {
                  console.log('\nError... Duplication maybe... ' + tweetID)
                  console.log('Error = ' + err_rt)
                }

                // For debugging
                // console.log("Data = " + data_rt.text)
                // console.log(data_rt)
              }
            )
          }
        } else {
          console.log('Error while searching' + err_search)
          process.exit(1)
        }
      }
    )
  },

  needRetweet: function (payload) {
    var T = new Twit(payload.config)

    let params = {
      q: payload.retweet_words + '',
      result_type: 'recent',
      count: 5,
      lang: 'en',
    }

    T.get(
      'search/tweets',
      params,
      function (err_search, data_search, response_search) {
        let tweets = data_search.statuses
        if (!err_search) {
          let tweetIDList = []
          for (let tweet of tweets) {
            // To avoid duplication of retweets
            if (tweet.text.startsWith('RT @')) {
              // If tweet text starts with "RT @" then it is a retweeted tweet,
              // with a different 'id_str' than the original
              console.log('\nStarts with RT@, adding retweeted status id_str')
              if (tweet.retweeted_status) {
                tweetIDList.push(tweet.retweeted_status.id_str)
              } else {
                tweetIDList.push(tweet.id_str)
              }
            } else {
              tweetIDList.push(tweet.id_str)
            }
          }

          // Get only unique entries
          tweetIDList = tweetIDList.filter(onlyUnique)

          console.log('TweetID LIST = \n' + tweetIDList)

          // Call the 'statuses/retweet/:id' API endpoint for retweeting EACH of the tweetID
          for (let tweetID of tweetIDList) {
            T.post(
              'statuses/retweet/:id',
              { id: tweetID },
              function (err_rt, data_rt, response_rt) {
                if (!err_rt) {
                  console.log('\n\nRetweeted! ID - ' + tweetID)
                } else {
                  console.log('\nError... Duplication maybe... ' + tweetID)
                  console.log('Error = ' + err_rt)
                }

                // For debugging
                // console.log("Data = " + data_rt.text)
                // console.log(data_rt)
              }
            )
          }
        } else {
          console.log('Error while searching' + err_search)
          process.exit(1)
        }
      }
    )
  },

  tweeting: function () {
    var today = new Date()
    var time = today.getHours() + ':' + today.getMinutes() // + ':' + today.getSeconds()
    var hour = today.getHours()
    var min = today.getMinutes()

    const date = moment(today).format('YYYY-MM-DD')

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

        needTweet(payload)
      })
    })
  },
  needTweet: function (payload) {
    id = payload.id
    var T = new Twit(payload.config)

    var tweet = {
      status: payload.tweets[0].textarea,
    }

    T.post('statuses/update', tweet, tweeted)
  },
  tweeted: function (err, data, response) {
    if (err) {
      console.log('err', err)
    } else {
      admin.firestore().collection('tweets').doc(id).update({ status: 'done' })
    }
  },
}
