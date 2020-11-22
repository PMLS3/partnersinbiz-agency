
importScripts(
  'https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyBMj2o9iEITpXpmXGiaJ9wfDr8otWdh-fw","authDomain":"apps-test-all.firebaseapp.com","databaseURL":"https:\u002F\u002Fapps-test-all.firebaseio.com","projectId":"apps-test-all","storageBucket":"apps-test-all.appspot.com","messagingSenderId":"458723667512","appId":"1:458723667512:web:112c5fcd9c7ece141140cd","measurementId":"G-NCTV5W0QKN","fcmPublicVapidKey":"BJnNaNqvpiEa1uoj4fSPMD_BNU3rFPB7QYQIJb9KsqtyPbmYT7HeajpCjFD1NViUcwQ8dBaHFTpEmoA4TGAEanU"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()
