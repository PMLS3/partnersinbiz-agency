module.exports = {
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'SAAS-EMPIRE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      // { src: 'https://aframe.io/releases/1.0.4/aframe.min.js' },
      // {
      //   src:
      //     'https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js',
      // },
      // {
      //   src:
      //     'https://unpkg.com/aframe-event-set-component@5.0.0/dist/aframe-event-set-component.min.js',
      // },
      // {
      //   src:
      //     'https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js',
      // },
      // {
      //   src:
      //     'https://unpkg.com/aframe-animation-component@^5.1.2/dist/aframe-animation-component.min.js',
      // },
      // {
      //   src:
      //     'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js'
      // }
    ],
  },
  /*
   ** Router middleware
   */
  router: {
    middleware: 'routing',
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    // VUESAX
    'vuesax/dist/vuesax.css',

    // Tailwind
    '~/assets/css/main.css',
    // SCSS file in the project
    '~/assets/css/iconfont.css',
    // SCSS file in the project
    '~/assets/scss/main.scss',
    // Material Icons
    'material-icons/iconfont/material-icons.css',
    // Vue Select
    'vue-select/dist/vue-select.css',
    'fullpage-vue/src/fullpage.css',
    'animate.css',
    // SCSS file in the project
    '~/assets/css/loader.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuesax',
    '@/plugins/inject.js',

    '@/plugins/fake-db/index.js',
    '@/plugins/http/requests',
    '@/plugins/i18n/i18n.js',
    '@/plugins/filters.js',
    { src: '~/plugins/globalComponents', mode: 'client' },
    { src: '~/plugins/peer', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // components: {
  //   dirs: [
  //     "~/components",
  //     {
  //       path: "~/components/base/",
  //       prefix: "Base"
  //     }
  //   ]
  // },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api',
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/main.css',
    purgeCSSInDev: false,
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    // '@nuxt/content',
    'nuxt-purgecss',
    '@nuxtjs/firebase',
    'nuxt-socket-io',
    '@nuxtjs/device',
    '@nuxtjs/proxy',

    [
      'nuxt-sass-resources-loader',
      ['./assets/css/main.scss'],
      ['~/assets/css/loader.css'],
      ['~/assets/css/iconfont.css'],
      ['~/assets/scss/main.scss'],
      ['material-icons/iconfont/material-icons.css'],
      ['vuesax/dist/vuesax.css'],
      ['swiper/dist/css/swiper.min.css'],
      ['vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'],
      ['animate.css'],
      ['fullpage-vue/src/fullpage.css'],
    ],
  ],
  proxy: {
    '/api': {
      target: 'http://example.com',
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  // content: {
  //   markdown: {
  //     prism: {
  //       theme: false
  //     }
  //   }
  // },

  /*
   ** Firebase Config
   */
  firebase: {
    config: {
      production: {
        apiKey: 'AIzaSyAv6qjy00LlrxmBCk2xuaRKjw2zXJE1jPo',
        authDomain: 'partnersinbiz-agency.firebaseapp.com',
        databaseURL: 'https://partnersinbiz-agency.firebaseio.com',
        projectId: 'partnersinbiz-agency',
        storageBucket: 'partnersinbiz-agency.appspot.com',
        messagingSenderId: '463207487963',
        appId: '1:463207487963:web:d555981e27f1c41189affe',
        measurementId: 'G-0ML2QYBW4V',
        fcmPublicVapidKey:
          'BElIDO8oe-f5IJCFctJDlKMVaOlbfwXK1XusDBdHShY3YtiKBwYaBMBJLO3JE9QdMLbKazjI3icNvdWlh1JWqc4', // Sets vapid key for FCM after initialization
      },
      development: {
        apiKey: 'AIzaSyAv6qjy00LlrxmBCk2xuaRKjw2zXJE1jPo',
        authDomain: 'partnersinbiz-agency.firebaseapp.com',
        databaseURL: 'https://partnersinbiz-agency.firebaseio.com',
        projectId: 'partnersinbiz-agency',
        storageBucket: 'partnersinbiz-agency.appspot.com',
        messagingSenderId: '463207487963',
        appId: '1:463207487963:web:d555981e27f1c41189affe',
        measurementId: 'G-0ML2QYBW4V',
        fcmPublicVapidKey:
          'BElIDO8oe-f5IJCFctJDlKMVaOlbfwXK1XusDBdHShY3YtiKBwYaBMBJLO3JE9QdMLbKazjI3icNvdWlh1JWqc4', // Sets vapid key for FCM after initialization
        // apiKey: 'AIzaSyBMj2o9iEITpXpmXGiaJ9wfDr8otWdh-fw',
        // authDomain: 'apps-test-all.firebaseapp.com',
        // databaseURL: 'https://apps-test-all.firebaseio.com',
        // projectId: 'apps-test-all',
        // storageBucket: 'apps-test-all.appspot.com',
        // messagingSenderId: '458723667512',
        // appId: '1:458723667512:web:112c5fcd9c7ece141140cd',
        // measurementId: 'G-NCTV5W0QKN',
        // fcmPublicVapidKey:
        //   'BJnNaNqvpiEa1uoj4fSPMD_BNU3rFPB7QYQIJb9KsqtyPbmYT7HeajpCjFD1NViUcwQ8dBaHFTpEmoA4TGAEanU', // Sets vapid key for FCM after initialization
      },
    },
    customEnv: false,
    onFirebaseHosting: false,
    services: {
      auth: {
        // Experimental Feature, use with caution.
        initialize: {
          onSuccessMutation: 'SET_AUTH_USER',
          onSuccessAction: null,
          onErrorMutation: null,
          onErrorAction: 'handleAuthError',
          ssr: true, // Default
        },
        emulatorPort: 9099,
        emulatorHost: 'http://localhost',
      },
      firestore: {
        static: false, // default
        preload: false, // default
        chunkName:
          process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
        enablePersistence: true,
        memoryOnly: false, // default
        emulatorPort: 8080,
        emulatorHost: 'localhost',
      },
      functions: {
        location: 'us-central1', // Default
        emulatorPort: 5001,
        emulatorHost: 'http://10.10.10.3',
      },
      storage: true,
      realtimeDb: true,
      performance: true,
      analytics: true,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000, // Default
          minimumFetchIntervalMillis: 43200000, // Default
        },
        defaultConfig: {
          welcome_message: 'Welcome',
        },
      },
      messaging: {
        createServiceWorker: true,
      },
    },
  },
  /*
   ** IO Config
   */
  io: {
    sockets: [
      {
        name: 'home',
        url: 'http://localhost:3000',
        // url: 'https://partnersinbiz-agency-296409.uc.r.appspot.com',

        default: process.env.DEPLOY !== 'GH_PAGES',
        vuex: {
          mutations: [{ type: 'draw/SET_DRAW_TYPE' }],
          // actions: [{ chatMessage: 'FORMAT_MESSAGE' }],
          // emitBacks: [
          //   'examples/someObj',
          //   'examples/sample',
          //   { 'examples/sample2': 'sample2' },
          //   'titleFromUser'
          // ]
        },
        namespaces: {
          '/index': {
            emitters: [
              'joinRoom + joinDetails --> roomInfo',
              'leaveRoom + joinDetails --> roomInfo',
              'sendMsg + userMsg',
            ],
            listeners: ['joinedRoom [updateUsers', 'leavedRoom [updateUsers'],
          },

          '/videochat': {
            emitters: [
              'joinRoom + joinDetails --> roomInfo',
              'leaveRoom + joinDetails --> roomInfo',
              'messageSent + messageInfo',
              'sendStream + myStream',
              'videoSend + sendStream',
            ],
            listeners: [
              'joinedRoom [updateUsers',
              'leavedRoom [updateUsers',
              'receivedStream [connectToNewUser',
              'videoReceived [recv',
            ],
          },
          '/chat': {
            emitters: [
              'joinRoom + joinDetails --> roomInfo',
              'leaveRoom + joinDetails --> roomInfo',
              'sendMsg + userMsg',
            ],
            listeners: [
              'joinedRoom [updateUsers',
              'leavedRoom [updateUsers',
              'chatMessage [appendChats',
            ],
          },
          '/radio': {
            emitters: [
              'joinRoom + joinDetails --> roomInfo',
              'leaveRoom + joinDetails --> roomInfo',
              'sendPlaylist + newList',
              'playTrack + playIndex',
              'pauseTrack + pauseIndex',
              'stopTrack + stopIndex',
              'skipToTrack + skipToIndex',
              'start + startList',
              'startTimer + playlistSet',
            ],
            listeners: [
              'joinedRoom [updateUsers',
              'leavedRoom [updateUsers',
              'receivePlaylist  [receivedPlaylist',
              'receivePlayTrack  [playTracked',
              'receivePauseTrack  [pauseTracked',
              'receiveStopTrack  [stopTracked',
              'receiveSkipToTrack  [skipToTracked',
              'chatMessage [appendChats',
              'timerReceived [timerAppend',
            ],
          },
          '/whiteboard': {
            emitters: [
              'joinRoom + joinDetails ',
              'leaveRoom + leaveMsg',
              'drawBoard + sendDraw ',
              'handleToolsSend + handleToolsItems',
              'mouseDownSend + mouseDownItems',
              'mouseUpSend + mouseUpItems',
              'mouseMoveSend + mouseMoveItems',
              'mouseClickSend + mouseClickItems',
              'colorSend + colorItems',
              'colorFillSend + colorFillItems',
              'lineWidthSend + lineWidthItems',
              'trSend + trItems',
              'imageToolsSend + imageItems',
              'strokeChangeSend + stokeEnable',
              'fillChangeSend + fillEnable',
            ],
            listeners: [
              'joinedRoom [updateUsers',
              'leftRoom [updateUsers',
              'remoteDraw [drawEveryone',
              'handleToolsInfo [handleToolsReceived',
              'mouseDownInfo [mouseDownReceived',
              'mouseUpInfo [mouseUpReceived',
              'mouseMoveInfo [mouseMoveReceived',
              'mouseClickInfo [mouseClickReceived',
              'colorInfo [colorReceived',
              'colorFillInfo [colorFillReceived',
              'lineWidthInfo [lineWidthReceived',
              'trInfo [trReceived',
              'imageInfo [imageReceived',
              'strokeInfo [strokeReceived',
              'fillInfo [fillReceived',
            ],
          },
        },
      },
    ],
  },
  /*
   ** Purge CSS
   */
  purgeCSS: {
    enabled: false,
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // baseURL: 'https://partnersinbiz.tech/',
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  // content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    // extractCSS: {
    //   ignoreOrder: true,
    // },
    vendor: ['peerjs', 'three', 'vue-three'],
    transpile: [
      '@chenfengyuan/vue-countdown',
      'moment',
      'algoliasearch',
      'ag-grid-community',
      'ag-grid-vue',
      'chart.js',
      'echarts',
      'latlon-geohash',
      'lodash',
      'vue-prism-component',
      'xlsx',
      'postcss-rtl',
      'peerjs',
      'vue-select',
      'vue-apexcharts',
      'vue-form-wizard',
      'vue-quill-editor',
      'vue-property-decorator',
      'vue2-google-maps',
      'vue-flatpickr-component',
      'vue-image-lightbox-carousel',
      'vue-popperjs',
      'vue-video-player',
      'videojs',
      'vuecode.js',
      'vue-quill-editor',
      'vue-select-image',
      'vue-star-rating',
      'vuejs-datepicker',
      'vue2-perfect-scrollbar',
      'vue-simple-calendar',
      'vue-instantsearch',
      'quill',
      'vue2-hammer',
      'vue-simple-suggest',
      'vue-context',
      'vue-tree-halower',
      '/^vue2-google-maps($|/)/',
      'file-saver',
      'vue-chartjs',
      'vue-echarts',
      'html2canvas',
      'jspdf',
      'vue2-gmap-custom-marker',
      // 'aframe',
      // 'aframe-physics-system',
      // 'aframe-rounded',
      // 'aframe-sharedspace-component',
      // 'aframe-stereo-component',
      // 'aframe-sun-sky',
      // 'ag-grid-community',
      // 'ag-grid-vue',
      // 'algoliasearch',
      // 'animate.css',
      // 'apexcharts',
      // 'axios-mock-adapter',
      // 'body-parser',
      // 'chart.js',
      // 'cheerio',
      // 'core-js',
      // 'cross-env',
      // 'delay',
      // 'echarts',
      // 'express',
      // 'fabric',
      // 'file-saver',
      // 'firebase',
      // 'firebase-admin',
      // 'fullpage-vue',
      // 'howler',
      // 'html2canvas',
      // 'http',
      // 'imap',
      // 'instagram-web-api',
      // 'jspdf',
      // 'konva',
      // 'latlon-geohash',
      // 'less-loader',
      // 'mailparser',
      // 'material-icons',
      // 'moment',
      // 'networked-aframe',
      // 'nuxt-purgecss',
      // 'nuxt-sass-resources-loader',
      // 'nuxt-socket-io',
      // 'peer',
      // 'peerjs',
      // 'postcss-rtl',
      // 'prismjs',
      // 'puppeteer',
      // 'puppeteer-extra',
      // 'puppeteer-extra-plugin-adblocker',
      // 'puppeteer-extra-plugin-stealth',
      // 'quill',
      // 'script-loader',
      // 'shuffle-array',
      // 'socket.io',
      // 'socket.io-client',
      // 'socket.io-stream',
      // 'three',
      // 'three-fbx-loader',
      // 'three-text2d',
      // 'three-trackballcontrols',
      // 'threex.domevents',
      // 'tough-cookie-filestore2',
      // 'twilio',
      // 'twit',
      // 'v-validate',
      // 'vee-validate',
      // 'verte',
      // 'videojs',
      // 'vue',
      // 'vue-apexcharts',
      // 'vue-backtotop',
      // 'vue-cal',
      // 'vue-chartjs',
      // 'vue-class-component',
      // 'vue-clipboard2',
      // 'vue-context',
      // 'vue-echarts',
      // 'vue-feather-icons',
      // 'vue-flatpickr-component',
      // 'vue-form-wizard',
      // 'vue-i18n',
      // 'vue-image-lightbox-carousel',
      // 'vue-instantsearch',
      // 'vue-ionicons',
      // 'vue-long-click',
      // 'vue-perfect-scrollbar',
      // 'vue-popperjs',
      // 'vue-prism-component',
      // 'vue-property-decorator',
      // 'vue-quill-editor',
      // 'vue-select',
      // 'vue-select-image',
      // 'vue-simple-calendar',
      // 'vue-simple-suggest',
      // 'vue-star-rating',
      // 'vue-svg',
      // 'vue-svg-gauge',
      // 'vue-tel-input',
      // 'vue-three',
      // 'vue-tour',
      // 'vue-tree-halower',
      // 'vue-video-player',
      // 'vue-video-player-videojs-7',
      // 'vue2-gmap-custom-marker',
      // 'vue2-google-maps',
      // 'vue2-hammer',
      // 'vue2-perfect-scrollbar',
      // 'vuedraggable',
      // 'vuejs-datepicker',
      // 'vuesax',
      // 'xlsx',
    ],

    /*
     ** Run ESLint on save
     */
    // extend(config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
    extend(config, ctx) {
      // const vueLoader = config.module.rules.find(
      //   loader => loader.loader === 'vue-loader'
      // )
      // vueLoader.options.transformToRequire = {
      //   audio: 'src',
      //   video: 'src',
      // }
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    },
  },
}
