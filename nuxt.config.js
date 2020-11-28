module.exports = {
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'PIB',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    // SCSS file in the project
    '~/assets/css/loader.css',
    // Tailwind
    '~/assets/css/main.css',
    // SCSS file in the project
    '~/assets/css/iconfont.css',
    // SCSS file in the project
    '~/assets/scss/main.scss',
    // Material Icons
    'material-icons/iconfont/material-icons.css',
    // Vue Select
    'vue-select/dist/vue-select.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vuesax',
    '@/plugins/filters.js',
    { src: '~/plugins/globalComponents', mode: 'client' },
    { src: '~/plugins/peer', mode: 'client' }
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
    '@nuxtjs/composition-api'
  ],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/main.css',
    purgeCSSInDev: false
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

    [
      'nuxt-sass-resources-loader',
      ['./assets/css/main.scss'],
      ['~/assets/css/loader.css'],
      ['~/assets/css/iconfont.css'],
      ['~/assets/scss/main.scss'],
      ['material-icons/iconfont/material-icons.css'],
      ['vuesax/dist/vuesax.css'],
      ['swiper/dist/css/swiper.min.css'],
      ['vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css']
    ]
  ],
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
          'BElIDO8oe-f5IJCFctJDlKMVaOlbfwXK1XusDBdHShY3YtiKBwYaBMBJLO3JE9QdMLbKazjI3icNvdWlh1JWqc4' // Sets vapid key for FCM after initialization
      },
      development: {
        apiKey: 'AIzaSyBMj2o9iEITpXpmXGiaJ9wfDr8otWdh-fw',
        authDomain: 'apps-test-all.firebaseapp.com',
        databaseURL: 'https://apps-test-all.firebaseio.com',
        projectId: 'apps-test-all',
        storageBucket: 'apps-test-all.appspot.com',
        messagingSenderId: '458723667512',
        appId: '1:458723667512:web:112c5fcd9c7ece141140cd',
        measurementId: 'G-NCTV5W0QKN',
        fcmPublicVapidKey:
          'BJnNaNqvpiEa1uoj4fSPMD_BNU3rFPB7QYQIJb9KsqtyPbmYT7HeajpCjFD1NViUcwQ8dBaHFTpEmoA4TGAEanU' // Sets vapid key for FCM after initialization
      }
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
          ssr: true // Default
        }
      },
      firestore: {
        static: false, // default
        preload: false, // default
        chunkName:
          process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
        enablePersistence: true
      },
      functions: {
        location: 'us-central1', // Default
        emulatorPort: 12345
      },
      storage: true,
      realtimeDb: true,
      performance: true,
      analytics: true,
      remoteConfig: {
        settings: {
          fetchTimeoutMillis: 60000, // Default
          minimumFetchIntervalMillis: 43200000 // Default
        },
        defaultConfig: {
          welcome_message: 'Welcome'
        }
      },
      messaging: {
        createServiceWorker: true
      }
    }
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
          mutations: [{ type: 'draw/SET_DRAW_TYPE' }]
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
              'sendMsg + userMsg'
            ],
            listeners: ['joinedRoom [updateUsers', 'leavedRoom [updateUsers']
          },

          '/videochat': {
            emitters: [
              'joinRoom + joinDetails --> roomInfo',
              'leaveRoom + joinDetails --> roomInfo',
              'messageSent + messageInfo',
              'sendStream + myStream',
              'videoSend + sendStream'
            ],
            listeners: [
              'joinedRoom [updateUsers',
              'leavedRoom [updateUsers',
              'receivedStream [connectToNewUser',
              'videoReceived [recv'
            ]
          },
          '/chat': {
            emitters: [
              'joinRoom + joinDetails --> roomInfo',
              'leaveRoom + joinDetails --> roomInfo',
              'sendMsg + userMsg'
            ],
            listeners: [
              'joinedRoom [updateUsers',
              'leavedRoom [updateUsers',
              'chatMessage [appendChats'
            ]
          }
        }
      }
    ]
  },
  /*
   ** Purge CSS
   */
  purgeCSS: {
    enabled: false
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  // content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
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
      'file-saver',
      'vue-chartjs',
      'vue-echarts',
      'html2canvas',
      'jspdf',
      'vue2-gmap-custom-marker'
    ],

    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
