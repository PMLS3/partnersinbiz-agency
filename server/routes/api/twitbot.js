var Twit = require('twit')

var T = new Twit({
  consumer_key: 'JTn5mvPViv3qLLmO1PIRploGc',
  consumer_secret: '1wKb0qabNF0mP5pttsCnHmeT6cXEHMcOfLqhYU8zIVZEltb6EE',
  access_token: '962690099631869953-jcwYNkI4OKArcLxbFJeekS5N1PXmezt',
  access_token_secret: 'slZhPGqG9OB721p27BtnVuSArK6NGDUwg5LTzap4oN5eW',
})

var params = {
  q: 'banana since:2011-11-11',
  count: 100,
}

T.get('search/tweets', params, gotData)

function gotData(err, data, response) {
  var tweets = data.statuses
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text)
  }
}

function tweetIt(txt) {
  T.post(
    'media/uload',
    {
      media_data:
        'https://www.keepinspiring.me/wp-content/uploads/2012/06/inspirational-quotes-header.jpg',
    },
    uploaded
  )

  function uploaded(err, data, response) {
    var id = data.media_id_string
    console.log('data.media_id', data.media_id_string)
    var tweet = {
      status: txt,
      media_ids: [id],
    }

    T.post('statuses/update', tweet, tweeted)
  }

  function tweeted(err, data, response) {
    if (err) {
      console.log('err', err)
    } else {
      console.log('data', data)
    }
  }
}

tweetIt(
  "If you are working on something that you really care about, you don't have to be pushed."
)

//Setting up a user stream
var stream = T.stream('user')

stream.on('follow', followed)

function followed(eventMsg) {
  var name = eventMsg.source.name
  var screenName = eventMsg.source.screen_name
  tweetIt('@' + screenName + 'thanks for the follow')
}
