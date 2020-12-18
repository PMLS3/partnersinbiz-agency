
importScripts(
  'https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyAv6qjy00LlrxmBCk2xuaRKjw2zXJE1jPo","authDomain":"partnersinbiz-agency.firebaseapp.com","databaseURL":"https:\u002F\u002Fpartnersinbiz-agency.firebaseio.com","projectId":"partnersinbiz-agency","storageBucket":"partnersinbiz-agency.appspot.com","messagingSenderId":"463207487963","appId":"1:463207487963:web:d555981e27f1c41189affe","measurementId":"G-0ML2QYBW4V","fcmPublicVapidKey":"BElIDO8oe-f5IJCFctJDlKMVaOlbfwXK1XusDBdHShY3YtiKBwYaBMBJLO3JE9QdMLbKazjI3icNvdWlh1JWqc4"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()
