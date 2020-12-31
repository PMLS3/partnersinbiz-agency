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
