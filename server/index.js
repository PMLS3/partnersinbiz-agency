const http = require('http') // Prod should use https
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const config = require('../nuxt.config.js')
const { IOServer } = require('./io')
var bodyParser = require('body-parser')

// Boiler-plate
const app = express()
const server = http.createServer(app) // Prod should separate server code from client and use https
app.use(bodyParser.json())
// Import and Set Nuxt.js options
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt
  const nuxt = new Nuxt(config)
  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.get('/apptest', (req, res) => res.send('Hello World!'))

  const posts = require('./routes/api/posts')
  app.use('/api/posts', posts)

  const states = require('./routes/api/getUSStates.js')
  app.use('/api/states', states)

  const business = require('./routes/api/getBusiness.js')
  app.use('/api/business', business)

  //TWITTER
  const twitterTimeline = require('./routes/api/twitter/timeline.js')
  app.use('/api/twitter/timeline', twitterTimeline)

  const twitterHomeTimeline = require('./routes/api/twitter/home_timeline.js')
  app.use('/api/twitter/home_timeline', twitterHomeTimeline)

  const twitterMentions = require('./routes/api/twitter/mentions.js')
  app.use('/api/twitter/mentions', twitterMentions)

  const twitterFollow = require('./routes/api/twitter/follow.js')
  app.use('/api/twitter/follow', twitterFollow)

  const twitterScrape = require('./routes/api/twitter/scrape.js')
  app.use('/api/twitter/scrape', twitterScrape)

  const twitterTweet = require('./routes/api/twitter/tweet.js')
  app.use('/api/twitter/tweet', twitterTweet)

  const twitterSearch = require('./routes/api/twitter/search.js')
  app.use('/api/twitter/search', twitterSearch)

  const twitterUserFollowersSearch = require('./routes/api/twitter/followers_ids.js')
  app.use('/api/twitter/twitterUserFollowersSearch', twitterUserFollowersSearch)

  const twitterFollowUser = require('./routes/api/twitter/follow_user.js')
  app.use('/api/twitter/followUser', twitterFollowUser)

  const twitterLike = require('./routes/api/twitter/like_tweet.js')
  app.use('/api/twitter/twitterLike', twitterLike)

  const twitterRetweet = require('./routes/api/twitter/retweet_tweet.js')
  app.use('/api/twitter/twitterRetweet', twitterRetweet)

  const twitterUserShow = require('./routes/api/twitter/user_show.js')
  app.use('/api/twitter/twitterUserShow', twitterUserShow)

  //Instagram
  const instagramClientProfile = require('./routes/api/instagram/webApi/clientProfile.js')
  app.use('/api/instagram/ClientProfile', instagramClientProfile)

  const instagramaddComment = require('./routes/api/instagram/webApi/addComment.js')
  app.use('/api/instagram/addComment', instagramaddComment)

  const instagramapproveFriendshipRequest = require('./routes/api/instagram/webApi/approveFriendshipRequest.js')
  app.use(
    '/api/instagram/approveFriendshipRequest',
    instagramapproveFriendshipRequest
  )

  const instagramblock = require('./routes/api/instagram/webApi/block.js')
  app.use('/api/instagram/block', instagramblock)

  const instagramchangeProfilePhoto = require('./routes/api/instagram/webApi/changeProfilePhoto.js')
  app.use('/api/instagram/changeProfilePhoto', instagramchangeProfilePhoto)

  const instagramdeleteComment = require('./routes/api/instagram/webApi/deleteComment.js')
  app.use('/api/instagram/deleteComment', instagramdeleteComment)

  const instagramdeleteMedia = require('./routes/api/instagram/webApi/deleteMedia.js')
  app.use('/api/instagram/deleteMedia', instagramdeleteMedia)

  const instagramfeed = require('./routes/api/instagram/webApi/feed.js')
  app.use('/api/instagram/feed', instagramfeed)

  const instagramfollow = require('./routes/api/instagram/webApi/follow.js')
  app.use('/api/instagram/follow', instagramfollow)

  const instagramgetActivity = require('./routes/api/instagram/webApi/getActivity.js')
  app.use('/api/instagram/getActivity', instagramgetActivity)

  const instagramgetChainsData = require('./routes/api/instagram/webApi/getChainsData.js')
  app.use('/api/instagram/getChainsData', instagramgetChainsData)

  const instagramgetChallenge = require('./routes/api/instagram/webApi/getChallenge.js')
  app.use('/api/instagram/', instagramgetChallenge)

  const instagramgetFeedHashtag = require('./routes/api/instagram/webApi/getFeedHashtag.js')
  app.use('/api/instagram/getFeedHashtag', instagramgetFeedHashtag)

  const instagramgetFeedLocation = require('./routes/api/instagram/webApi/getFeedLocation.js')
  app.use('/api/instagram/getFeedLocation', instagramgetFeedLocation)

  const instagramgetFollowers = require('./routes/api/instagram/webApi/getFollowers.js')
  app.use('/api/instagram/getFollowers', instagramgetFollowers)

  const instagramgetFollowings = require('./routes/api/instagram/webApi/getFollowings.js')
  app.use('/api/instagram/', instagramgetFollowings)

  const instagramgetMediaByShortcode = require('./routes/api/instagram/webApi/getMediaByShortcode.js')
  app.use('/api/instagram/getMediaByShortcode', instagramgetMediaByShortcode)

  const instagramgetMediaComments = require('./routes/api/instagram/webApi/getMediaComments.js')
  app.use('/api/instagram/getMediaComments', instagramgetMediaComments)

  const instagramgetMediaLikes = require('./routes/api/instagram/webApi/getMediaLikes.js')
  app.use('/api/instagram/getMediaLikes', instagramgetMediaLikes)

  const instagramgetPhotoByUserName = require('./routes/api/instagram/webApi/getPhotoByUserName.js')
  app.use('/api/instagram/getPhotoByUserName', instagramgetPhotoByUserName)

  const instagramgetPhotoHashtag = require('./routes/api/instagram/webApi/getPhotoHashtag.js')
  app.use('/api/instagram/getPhotoHashtag', instagramgetPhotoHashtag)

  const instagramgetPrivateProfilesFollowRequest = require('./routes/api/instagram/webApi/getPrivateProfilesFollowRequests.js')
  app.use(
    '/api/instagram/getPrivateProfilesFollowRequest',
    instagramgetPrivateProfilesFollowRequest
  )

  const instagramgetUserByUsername = require('./routes/api/instagram/webApi/getUserByUsername.js')
  app.use('/api/instagram/getUserByUsername', instagramgetUserByUsername)

  const instagramlike = require('./routes/api/instagram/webApi/like.js')
  app.use('/api/instagram/like', instagramlike)

  const instagramlocationSearch = require('./routes/api/instagram/webApi/locationSearch.js')
  app.use('/api/instagram/locationSearch', instagramlocationSearch)

  const instagrampost = require('./routes/api/instagram/webApi/post.js')
  app.use('/api/instagram/post', instagrampost)

  const instagramrejectFriendshipRequest = require('./routes/api/instagram/webApi/rejectFriendshipRequest.js')
  app.use(
    '/api/instagram/rejectFriendshipRequest',
    instagramrejectFriendshipRequest
  )

  const instagramreplayChallenge = require('./routes/api/instagram/webApi/replayChallenge.js')
  app.use('/api/instagram/replayChallenge', instagramreplayChallenge)

  const instagramsave = require('./routes/api/instagram/webApi/save.js')
  app.use('/api/instagram/save', instagramsave)

  const instagramsearch = require('./routes/api/instagram/webApi/search.js')
  app.use('/api/instagram/search', instagramsearch)

  const instagramunblock = require('./routes/api/instagram/webApi/unblock.js')
  app.use('/api/instagram/unblock', instagramunblock)

  const instagramunfollow = require('./routes/api/instagram/webApi/unfollow.js')
  app.use('/api/instagram/unfollow', instagramunfollow)

  const instagramunlike = require('./routes/api/instagram/webApi/unlike.js')
  app.use('/api/instagram/unlike', instagramunlike)

  const instagramunsave = require('./routes/api/instagram/webApi/unsave.js')
  app.use('/api/instagram/unsave', instagramunsave)

  const instagramupdateChallenge = require('./routes/api/instagram/webApi/updateChallenge.js')
  app.use('/api/instagram/updateChallenge', instagramupdateChallenge)

  const instagramupdateProfile = require('./routes/api/instagram/webApi/updateProfile.js')
  app.use('/api/instagram/updateProfile', instagramupdateProfile)
  // const instagram = require('./routes/api/instagram/webApi/')
  // app.use('/api/instagram/', instagram)

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  server.listen(port, host, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true,
    })

    // Start the socket.IO Server
    const ioServer = IOServer({ host, port, server })
    ioServer.start()
  })
}
// const { PeerServer } = require('peer')
// const peerServer = PeerServer({ port: 9000, path: '/' })
if (require.main === module) {
  start()
}
