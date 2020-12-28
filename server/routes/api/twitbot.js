var Twit = require('twit')

var T = new Twit({
  consumer_key: 'JTn5mvPViv3qLLmO1PIRploGc',
  consumer_secret: '1wKb0qabNF0mP5pttsCnHmeT6cXEHMcOfLqhYU8zIVZEltb6EE',
  access_token: '962690099631869953-jcwYNkI4OKArcLxbFJeekS5N1PXmezt',
  access_token_secret: 'slZhPGqG9OB721p27BtnVuSArK6NGDUwg5LTzap4oN5eW',
})

// var params = {
//   q: 'banana since:2011-11-11',
//   count: 100,
// }

// T.get('search/tweets', params, gotData)

// function gotData(err, data, response) {
//   var tweets = data.statuses
//   for (var i = 0; i < tweets.length; i++) {
//     console.log(tweets[i].text)
//   }
// }

// function tweetIt(txt) {
//   T.post(
//     'media/uload',
//     {
//       media_data:
//         'https://www.keepinspiring.me/wp-content/uploads/2012/06/inspirational-quotes-header.jpg',
//     },
//     uploaded
//   )

//   function uploaded(err, data, response) {
//     var id = data.media_id_string
//     console.log('data.media_id', data.media_id_string)
//     var tweet = {
//       status: txt,
//       media_ids: [id],
//     }

//     T.post('statuses/update', tweet, tweeted)
//   }

//   function tweeted(err, data, response) {
//     if (err) {
//       console.log('err', err)
//     } else {
//       console.log('data', data)
//     }
//   }
// }

// tweetIt(
//   "If you are working on something that you really care about, you don't have to be pushed."
// )

//Setting up a user stream
// var stream = T.stream('user')

// stream.on('follow', followed)

// function followed(eventMsg) {
//   var name = eventMsg.source.name
//   var screenName = eventMsg.source.screen_name
//   tweetIt('@' + screenName + 'thanks for the follow')
// }

// stream.on('tweet', tweetEvent)

// function tweetEvent(eventMsg) {
//   //   var fs = require('fs')
//   //   var json = JSON.stringify(eventMsg, null, 2)
//   //   fs.writeFile('tweet.json', json)

//   var replyto = eventMsg.in_reply_to_screen_name
//   var text = eventMsg.text
//   var from = eventMsg.user.screen_name
//   if (replyto === 'pmslasdjf') {
//     var newtweet = '@' + from + 'thank you for tweet me'
//     tweetIt(newtweet)
//   }
// }

// RETWEET
// This is the URL of a search for the latest tweets on the '#mediaarts' hashtag.
var mediaArtsSearch = { q: '#javascript', count: 10, result_type: 'recent' }

// This function finds the latest tweet with the #mediaarts hashtag, and retweets it.
function retweetLatest() {
  T.get('search/tweets', mediaArtsSearch, function (error, data) {
    // log out any errors and responses
    console.log(error, data)
    // If our search request to the server had no errors...
    if (!error) {
      // ...then we grab the ID of the tweet we want to retweet...
      var retweetId = data.statuses[0].id_str
      // ...and then we tell Twitter we want to retweet it!
      T.post('statuses/retweet/' + retweetId, {}, function (error, response) {
        if (response) {
          console.log(
            'Success! Check your bot, it should have retweeted something.'
          )
        }
        // If there was an error with our Twitter call, we print it out here.
        if (error) {
          console.log('There was an error with Twitter:', error)
        }
      })
    }
    // However, if our original search request had an error, we want to print it out here.
    else {
      console.log('There was an error with your hashtag search:', error)
    }
  })
}

// Try to retweet something as soon as we run the program...
retweetLatest()
// ...and then every hour after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
setInterval(retweetLatest, 1000 * 60 * 60)
