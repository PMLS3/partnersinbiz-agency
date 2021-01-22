let vm = ''
export function setVM(data) {
  vm = data
}
/******/ ;(function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {} // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }) // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ) // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true // Return the exports of the module
    /******/
    /******/ /******/ return module.exports
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      })
      /******/
    }
    /******/
  } // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      })
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true })
    /******/
  } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value)
    /******/ if (mode & 8) return value
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value
    /******/ var ns = Object.create(null)
    /******/ __webpack_require__.r(ns)
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    })
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key]
          }.bind(null, key)
        )
    /******/ return ns
    /******/
  } // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default']
          }
        : /******/ function getModuleExports() {
            return module
          }
    /******/ __webpack_require__.d(getter, 'a', getter)
    /******/ return getter
    /******/
  } // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  } // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = './src/index.js')
  )
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ './node_modules/firebase-key-encode/firebase-key-encode.js':
      /*!*****************************************************************!*\
  !*** ./node_modules/firebase-key-encode/firebase-key-encode.js ***!
  \*****************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function _typeof(obj) {
          '@babel/helpers - typeof'
          if (
            typeof Symbol === 'function' &&
            typeof Symbol.iterator === 'symbol'
          ) {
            _typeof = function _typeof(obj) {
              return typeof obj
            }
          } else {
            _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }
          }
          return _typeof(obj)
        }

        module.exports = {
          encode: function encode(decoded) {
            return encodeURIComponent(decoded).replace(/\./g, '%2E')
          },
          decode: function decode(encoded) {
            return decodeURIComponent(encoded.replace('%2E', '.'))
          },
          // Replaces the key with `fn(key)` on each key in an object tree.
          // i.e. making all keys uppercase.
          deepKeyReplace: function deepKeyReplace(obj, fn) {
            var rebuiltTree = Object.assign({}, obj)

            function traverse(o, x, func) {
              if (_typeof(o) === 'object') {
                for (var i in o) {
                  if (
                    o[i] !== null &&
                    (_typeof(o[i]) == 'object' || Array.isArray(o[i]))
                  ) {
                    //going on step down in the object tree!!
                    traverse(o[i], x[i], func)
                  }

                  func.apply(this, [x, i, x[i]])
                }
              } else if (Array.isArray(o)) {
                for (var i = 0; i < o.length; i++) {
                  // func.apply(this,[o, i,o[i]]);
                  if (
                    o[i] !== null &&
                    (_typeof(o[i]) == 'object' || Array.isArray(o[i]))
                  ) {
                    //going on step down in the object tree!!
                    traverse(o[i], x[i], func)
                  }
                }
              }
            }

            traverse(obj, rebuiltTree, function(parent, key, val) {
              delete parent[key]
              parent[fn(key)] = val
            })
            return rebuiltTree
          },
          deepDecode: function deepDecode(encodedTree) {
            var $this = this
            var rebuiltTree = this.deepKeyReplace(encodedTree, function(key) {
              return $this.decode(key)
            })
            return rebuiltTree
          },
          deepEncode: function deepEncode(decodedTree) {
            var $this = this
            var rebuiltTree = this.deepKeyReplace(decodedTree, function(key) {
              return $this.encode(key)
            })
            return rebuiltTree
          }
        }

        /***/
      },

    /***/ './src/WebRtcPeer.js':
      /*!***************************!*\
  !*** ./src/WebRtcPeer.js ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          return Constructor
        }

        var WebRtcPeer = /*#__PURE__*/ (function() {
          function WebRtcPeer(localId, remoteId, sendSignalFunc) {
            _classCallCheck(this, WebRtcPeer)

            this.localId = localId
            this.remoteId = remoteId
            this.sendSignalFunc = sendSignalFunc
            this.open = false
            this.channelLabel = 'networked-aframe-channel'
            this.pc = this.createPeerConnection()
            this.channel = null
          }

          _createClass(WebRtcPeer, [
            {
              key: 'setDatachannelListeners',
              value: function setDatachannelListeners(
                openListener,
                closedListener,
                messageListener
              ) {
                this.openListener = openListener
                this.closedListener = closedListener
                this.messageListener = messageListener
              }
            },
            {
              key: 'offer',
              value: function offer() {
                var self = this // reliable: false - UDP

                this.setupChannel(
                  this.pc.createDataChannel(this.channelLabel, {
                    reliable: false
                  })
                )
                this.pc.createOffer(
                  function(sdp) {
                    self.handleSessionDescription(sdp)
                  },
                  function(error) {
                    console.error('WebRtcPeer.offer: ' + error)
                  }
                )
              }
            },
            {
              key: 'handleSignal',
              value: function handleSignal(signal) {
                // ignores signal if it isn't for me
                if (this.localId !== signal.to || this.remoteId !== signal.from)
                  return

                switch (signal.type) {
                  case 'offer':
                    this.handleOffer(signal)
                    break

                  case 'answer':
                    this.handleAnswer(signal)
                    break

                  case 'candidate':
                    this.handleCandidate(signal)
                    break

                  default:
                    console.error(
                      'WebRtcPeer.handleSignal: Unknown signal type ' +
                        signal.type
                    )
                    break
                }
              }
            },
            {
              key: 'send',
              value: function send(type, data) {
                // TODO: throw error?
                if (this.channel === null || this.channel.readyState !== 'open')
                  return
                this.channel.send(
                  JSON.stringify({
                    type: type,
                    data: data
                  })
                )
              }
            },
            {
              key: 'getStatus',
              value: function getStatus() {
                if (this.channel === null) return WebRtcPeer.NOT_CONNECTED

                switch (this.channel.readyState) {
                  case 'open':
                    return WebRtcPeer.IS_CONNECTED

                  case 'connecting':
                    return WebRtcPeer.CONNECTING

                  case 'closing':
                  case 'closed':
                  default:
                    return WebRtcPeer.NOT_CONNECTED
                }
              }
              /*
               * Privates
               */
            },
            {
              key: 'createPeerConnection',
              value: function createPeerConnection() {
                var self = this
                var RTCPeerConnection =
                  window.RTCPeerConnection ||
                  window.webkitRTCPeerConnection ||
                  window.mozRTCPeerConnection ||
                  window.msRTCPeerConnection

                if (RTCPeerConnection === undefined) {
                  throw new Error(
                    'WebRtcPeer.createPeerConnection: This browser does not seem to support WebRTC.'
                  )
                }

                var pc = new RTCPeerConnection({
                  iceServers: WebRtcPeer.ICE_SERVERS
                })

                pc.onicecandidate = function(event) {
                  if (event.candidate) {
                    self.sendSignalFunc({
                      from: self.localId,
                      to: self.remoteId,
                      type: 'candidate',
                      sdpMLineIndex: event.candidate.sdpMLineIndex,
                      candidate: event.candidate.candidate
                    })
                  }
                } // Note: seems like channel.onclose hander is unreliable on some platforms,
                //       so also tries to detect disconnection here.

                pc.oniceconnectionstatechange = function() {
                  if (self.open && pc.iceConnectionState === 'disconnected') {
                    self.open = false
                    self.closedListener(self.remoteId)
                  }
                }

                return pc
              }
            },
            {
              key: 'setupChannel',
              value: function setupChannel(channel) {
                var self = this
                this.channel = channel // received data from a remote peer

                this.channel.onmessage = function(event) {
                  var data = JSON.parse(event.data)
                  self.messageListener(self.remoteId, data.type, data.data)
                } // connected with a remote peer

                this.channel.onopen = function(event) {
                  self.open = true
                  self.openListener(self.remoteId)
                } // disconnected with a remote peer

                this.channel.onclose = function(event) {
                  if (!self.open) return
                  self.open = false
                  self.closedListener(self.remoteId)
                } // error occurred with a remote peer

                this.channel.onerror = function(error) {
                  console.error('WebRtcPeer.channel.onerror: ' + error)
                }
              }
            },
            {
              key: 'handleOffer',
              value: function handleOffer(message) {
                var self = this

                this.pc.ondatachannel = function(event) {
                  self.setupChannel(event.channel)
                }

                this.setRemoteDescription(message)
                this.pc.createAnswer(
                  function(sdp) {
                    self.handleSessionDescription(sdp)
                  },
                  function(error) {
                    console.error('WebRtcPeer.handleOffer: ' + error)
                  }
                )
              }
            },
            {
              key: 'handleAnswer',
              value: function handleAnswer(message) {
                this.setRemoteDescription(message)
              }
            },
            {
              key: 'handleCandidate',
              value: function handleCandidate(message) {
                var self = this
                var RTCIceCandidate =
                  window.RTCIceCandidate ||
                  window.webkitRTCIceCandidate ||
                  window.mozRTCIceCandidate
                this.pc.addIceCandidate(
                  new RTCIceCandidate(message),
                  function() {},
                  function(error) {
                    console.error('WebRtcPeer.handleCandidate: ' + error)
                  }
                )
              }
            },
            {
              key: 'handleSessionDescription',
              value: function handleSessionDescription(sdp) {
                var self = this
                this.pc.setLocalDescription(
                  sdp,
                  function() {},
                  function(error) {
                    console.error(
                      'WebRtcPeer.handleSessionDescription: ' + error
                    )
                  }
                )
                this.sendSignalFunc({
                  from: this.localId,
                  to: this.remoteId,
                  type: sdp.type,
                  sdp: sdp.sdp
                })
              }
            },
            {
              key: 'setRemoteDescription',
              value: function setRemoteDescription(message) {
                var self = this
                var RTCSessionDescription =
                  window.RTCSessionDescription ||
                  window.webkitRTCSessionDescription ||
                  window.mozRTCSessionDescription ||
                  window.msRTCSessionDescription
                this.pc.setRemoteDescription(
                  new RTCSessionDescription(message),
                  function() {},
                  function(error) {
                    console.error('WebRtcPeer.setRemoteDescription: ' + error)
                  }
                )
              }
            }
          ])

          return WebRtcPeer
        })()

        WebRtcPeer.IS_CONNECTED = 'IS_CONNECTED'
        WebRtcPeer.CONNECTING = 'CONNECTING'
        WebRtcPeer.NOT_CONNECTED = 'NOT_CONNECTED'
        WebRtcPeer.ICE_SERVERS = [
          {
            urls: 'stun:stun1.l.google.com:19302'
          },
          {
            urls: 'stun:stun2.l.google.com:19302'
          },
          {
            urls: 'stun:stun3.l.google.com:19302'
          },
          {
            urls: 'stun:stun4.l.google.com:19302'
          }
        ]
        module.exports = WebRtcPeer

        /***/
      },

    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function')
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ('value' in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          return Constructor
        }

        var firebaseKeyEncode = __webpack_require__(
          /*! firebase-key-encode */ './node_modules/firebase-key-encode/firebase-key-encode.js'
        )

        var WebRtcPeer = __webpack_require__(
          /*! ./WebRtcPeer */ './src/WebRtcPeer.js'
        )

        var FirebaseWebRtcAdapter = /*#__PURE__*/ (function() {
          /**
    Config structure:
    config.authType: none;
    config.apiKey: your-api;
    config.authDomain: your-project.firebaseapp.com;
    config.databaseURL: https://your-project.firebaseio.com;
  */
          function FirebaseWebRtcAdapter(firebase, config) {
            _classCallCheck(this, FirebaseWebRtcAdapter)

            this.rootPath = 'networked-aframe'
            this.localId = null
            this.appId = null
            this.roomId = null
            this.peers = {} // id -> WebRtcPeer

            this.occupants = {} // id -> joinTimestamp

            this.serverTimeRequests = 0
            this.timeOffsets = []
            this.avgTimeOffset = 0
            config = config || window.firebaseConfig
            this.firebase = firebase || window.firebase

            if (this.firebase === undefined) {
              throw new Error(
                'Import https://www.gstatic.com/firebasejs/x.x.x/firebase.js'
              )
            }

            // authType: 'none',
            //     apiKey: 'AIzaSyDgWjG8-BvI9crK5Yw2FURpVFOoZilE3_c',
            //     authDomain: 'test-6a8f9.firebaseapp.com',
            //     databaseURL: 'https://test-6a8f9.firebaseio.com',
            //     projectId: 'test-6a8f9',
            //     storageBucket: 'test-6a8f9.appspot.com',
            //     messagingSenderId: '917819406042',
            //     appId: '1:917819406042:web:72b3f9873bbaf9e05ad7e3',
            //     measurementId: 'G-7SRMTNSWYE'

            this.authType = 'none'
            this.apiKey = 'AIzaSyDgWjG8-BvI9crK5Yw2FURpVFOoZilE3_c'
            this.authDomain = 'test-6a8f9.firebaseapp.com'
            this.databaseURL = 'https://test-6a8f9.firebaseio.com'
          }
          /*
           * Call before `connect`
           */

          _createClass(FirebaseWebRtcAdapter, [
            {
              key: 'setServerUrl',
              value: function setServerUrl(url) {
                // handled in config
              }
            },
            {
              key: 'setApp',
              value: function setApp(appId) {
                this.appId = appId
              }
            },
            {
              key: 'setRoom',
              value: function setRoom(roomId) {
                this.roomId = roomId
              } // options: { datachannel: bool, audio: bool }
            },
            {
              key: 'setWebRtcOptions',
              value: function setWebRtcOptions(options) {
                // TODO: support audio and video
                if (options.datachannel === false)
                  NAF.log.warn(
                    'FirebaseWebRtcAdapter.setWebRtcOptions: datachannel must be true.'
                  )
                if (options.audio === true)
                  NAF.log.warn(
                    'FirebaseWebRtcAdapter does not support audio yet.'
                  )
                if (options.video === true)
                  NAF.log.warn(
                    'FirebaseWebRtcAdapter does not support video yet.'
                  )
              }
            },
            {
              key: 'setServerConnectListeners',
              value: function setServerConnectListeners(
                successListener,
                failureListener
              ) {
                this.connectSuccess = successListener
                this.connectFailure = failureListener
              }
            },
            {
              key: 'setRoomOccupantListener',
              value: function setRoomOccupantListener(occupantListener) {
                this.occupantListener = occupantListener
              }
            },
            {
              key: 'setDataChannelListeners',
              value: function setDataChannelListeners(
                openListener,
                closedListener,
                messageListener
              ) {
                this.openListener = openListener
                this.closedListener = closedListener

                this.messageListener = function(remoteId, dataType, data) {
                  var decodedData = firebaseKeyEncode.deepDecode(data)
                  messageListener(remoteId, dataType, decodedData)
                }
              }
            },
            {
              key: 'connect',
              value: function connect() {
                var self = this
                this.initFirebase(function(id) {
                  self.updateTimeOffset()
                  self.localId = id
                  // var firebaseApp = self.firebaseApp // Note: assuming that data transfer via firebase realtime database
                  //       is reliable and in order
                  // TODO: can race among peers? If so, fix

                  self.getTimestamp(function(timestamp) {
                    self.myRoomJoinTime = timestamp
                    var userRef = vm.$fireDb.ref(self.getUserPath(self.localId))
                    userRef.set({
                      timestamp: timestamp,
                      signal: '',
                      data: ''
                    })
                    userRef.onDisconnect().remove()
                    var roomRef = vm.$fireDb.ref(self.getRoomPath())
                    roomRef.on('child_added', function(data) {
                      var remoteId = data.key
                      if (
                        remoteId === self.localId ||
                        remoteId === 'timestamp' ||
                        self.peers[remoteId] !== undefined
                      )
                        return
                      var remoteTimestamp = data.val().timestamp
                      var peer = new WebRtcPeer(
                        self.localId,
                        remoteId, // send signal function
                        function(data) {
                          vm.$fireDb
                            .ref(self.getSignalPath(self.localId))
                            .set(data)
                        }
                      )
                      peer.setDatachannelListeners(
                        self.openListener,
                        self.closedListener,
                        self.messageListener
                      )
                      self.peers[remoteId] = peer
                      self.occupants[remoteId] = remoteTimestamp // received signal

                      vm.$fireDb
                        .ref(self.getSignalPath(remoteId))
                        .on('value', function(data) {
                          var value = data.val()
                          if (value === null || value === '') return
                          peer.handleSignal(value)
                        }) // received data

                      vm.$fireDb
                        .ref(self.getDataPath(remoteId))
                        .on('value', function(data) {
                          var value = data.val()
                          if (
                            value === null ||
                            value === '' ||
                            value.to !== self.localId
                          )
                            return
                          self.messageListener(remoteId, value.type, value.data)
                        }) // send offer from a peer who
                      //   - later joined the room, or
                      //   - has larger id if two peers joined the room at same time

                      if (
                        timestamp > remoteTimestamp ||
                        (timestamp === remoteTimestamp &&
                          self.localId > remoteId)
                      )
                        peer.offer()
                      self.occupantListener(self.occupants)
                    })
                    roomRef.on('child_removed', function(data) {
                      var remoteId = data.key
                      if (
                        remoteId === self.localId ||
                        remoteId === 'timestamp' ||
                        self.peers[remoteId] === undefined
                      )
                        return
                      delete self.peers[remoteId]
                      delete self.occupants[remoteId]
                      self.occupantListener(self.occupants)
                    })
                    self.connectSuccess(self.localId)
                  })
                })
              }
            },
            {
              key: 'shouldStartConnectionTo',
              value: function shouldStartConnectionTo(client) {
                return (
                  (this.myRoomJoinTime || 0) <=
                  (client ? client.roomJoinTime : 0)
                )
              }
            },
            {
              key: 'startStreamConnection',
              value: function startStreamConnection(clientId) {
                // Handled by WebRtcPeer
              }
            },
            {
              key: 'closeStreamConnection',
              value: function closeStreamConnection(clientId) {
                // Handled by WebRtcPeer
              }
            },
            {
              key: 'sendData',
              value: function sendData(clientId, dataType, data) {
                this.peers[clientId].send(dataType, data)
              }
            },
            {
              key: 'sendDataGuaranteed',
              value: function sendDataGuaranteed(clientId, dataType, data) {
                console.log('FIRE', vm.$fireStore)
                console.log('vm', vm)
                var clonedData = JSON.parse(JSON.stringify(data))
                var encodedData = firebaseKeyEncode.deepEncode(clonedData)
                vm.$fireDb.ref(this.getDataPath(this.localId)).set({
                  to: clientId,
                  type: dataType,
                  data: encodedData
                })
              }
            },
            {
              key: 'broadcastData',
              value: function broadcastData(dataType, data) {
                for (var clientId in this.peers) {
                  if (this.peers.hasOwnProperty(clientId)) {
                    this.sendData(clientId, dataType, data)
                  }
                }
              }
            },
            {
              key: 'broadcastDataGuaranteed',
              value: function broadcastDataGuaranteed(dataType, data) {
                for (var clientId in this.peers) {
                  if (this.peers.hasOwnProperty(clientId)) {
                    this.sendDataGuaranteed(clientId, dataType, data)
                  }
                }
              }
            },
            {
              key: 'getConnectStatus',
              value: function getConnectStatus(clientId) {
                var peer = this.peers[clientId]
                if (peer === undefined) return NAF.adapters.NOT_CONNECTED

                switch (peer.getStatus()) {
                  case WebRtcPeer.IS_CONNECTED:
                    return NAF.adapters.IS_CONNECTED

                  case WebRtcPeer.CONNECTING:
                    return NAF.adapters.CONNECTING

                  case WebRtcPeer.NOT_CONNECTED:
                  default:
                    return NAF.adapters.NOT_CONNECTED
                }
              }
            },
            {
              key: 'getMediaStream',
              value: function getMediaStream(clientId) {
                return Promise.reject(
                  'Interface method not implemented: getMediaStream'
                )
              }
              /*
               * Privates
               */
            },
            {
              key: 'initFirebase',
              value: function initFirebase(callback) {
                console.log('FIRE', vm.$fireStore)
                console.log('vm', vm)

                // this.firebaseApp = this.firebase.initializeApp(
                //   {
                //     apiKey: this.apiKey,
                //     authDomain: this.authDomain,
                //     databaseURL: this.databaseURL
                //   },
                //   this.appId
                // )
                this.auth('none', callback)
              }
            },
            {
              key: 'auth',
              value: function auth(type, callback) {
                switch (type) {
                  case 'none':
                    this.authNone(callback)
                    break

                  case 'anonymous':
                    this.authAnonymous(callback)
                    break
                  // TODO: support other auth type

                  default:
                    NAF.log.write(
                      'FirebaseWebRtcInterface.auth: Unknown authType ' + type
                    )
                    break
                }
              }
            },
            {
              key: 'authNone',
              value: function authNone(callback) {
                var self = this // asynchronously invokes open listeners for the compatibility with other auth types.
                // TODO: generate not just random but also unique id

                requestAnimationFrame(function() {
                  callback(self.randomString())
                })
              }
            },
            {
              key: 'authAnonymous',
              value: function authAnonymous(callback) {
                var self = this
                vm.$fireAuth.signInAnonymously()['catch'](function(error) {
                  NAF.log.error(
                    'FirebaseWebRtcInterface.authAnonymous: ' + error
                  )
                  self.connectFailure(null, error)
                })
                vm.$fireAuth.onAuthStateChanged(function(user) {
                  if (user !== null) {
                    callback(user.uid)
                  }
                })
              }
              /*
               * realtime database layout
               *
               * /rootPath/appId/roomId/
               *   - /userId/
               *     - timestamp: joining the room timestamp
               *     - signal: used to send signal
               *     - data: used to send guaranteed data
               *   - /timestamp/: working path to get timestamp
               *     - userId:
               */
            },
            {
              key: 'getRootPath',
              value: function getRootPath() {
                return this.rootPath
              }
            },
            {
              key: 'getAppPath',
              value: function getAppPath() {
                return this.getRootPath() + '/' + this.appId
              }
            },
            {
              key: 'getRoomPath',
              value: function getRoomPath() {
                return this.getAppPath() + '/' + this.roomId
              }
            },
            {
              key: 'getUserPath',
              value: function getUserPath(id) {
                return this.getRoomPath() + '/' + id
              }
            },
            {
              key: 'getSignalPath',
              value: function getSignalPath(id) {
                return this.getUserPath(id) + '/signal'
              }
            },
            {
              key: 'getDataPath',
              value: function getDataPath(id) {
                return this.getUserPath(id) + '/data'
              }
            },
            {
              key: 'getTimestampGenerationPath',
              value: function getTimestampGenerationPath(id) {
                return this.getRoomPath() + '/timestamp/' + id
              }
            },
            {
              key: 'randomString',
              value: function randomString() {
                var stringLength = 16
                var chars =
                  'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789'
                var string = ''

                for (var i = 0; i < stringLength; i++) {
                  var randomNumber = Math.floor(Math.random() * chars.length)
                  string += chars.substring(randomNumber, randomNumber + 1)
                }

                return string
              }
            },
            {
              key: 'getTimestamp',
              value: function getTimestamp(callback) {
                console.log('server value', Date.now())
                // var firebaseApp = this.firebaseApp
                var ref = vm.$fireDb.ref(
                  this.getTimestampGenerationPath(this.localId)
                )
                // ref.set(vm.$fireDb.ServerValue.TIMESTAMP)
                ref.set(Date.now())

                ref.once('value', function(data) {
                  var timestamp = data.val()
                  ref.remove()
                  callback(timestamp)
                })
                ref.onDisconnect().remove()
              }
            },
            {
              key: 'updateTimeOffset',
              value: function updateTimeOffset() {
                var _this = this

                return vm.$fireDb
                  .ref('/.info/serverTimeOffset')
                  .once('value')
                  .then(function(data) {
                    var timeOffset = data.val()
                    _this.serverTimeRequests++

                    if (_this.serverTimeRequests <= 10) {
                      _this.timeOffsets.push(timeOffset)
                    } else {
                      _this.timeOffsets[
                        _this.serverTimeRequests % 10
                      ] = timeOffset
                    }

                    _this.avgTimeOffset =
                      _this.timeOffsets.reduce(function(acc, offset) {
                        return (acc += offset)
                      }, 0) / _this.timeOffsets.length

                    if (_this.serverTimeRequests > 10) {
                      setTimeout(function() {
                        return _this.updateTimeOffset()
                      }, 5 * 60 * 1000) // Sync clock every 5 minutes.
                    } else {
                      _this.updateTimeOffset()
                    }
                  })
              }
            },
            {
              key: 'getServerTime',
              value: function getServerTime() {
                return new Date().getTime() + this.avgTimeOffset
              }
            }
          ])

          return FirebaseWebRtcAdapter
        })()

        NAF.adapters.register('firebase', FirebaseWebRtcAdapter)
        module.exports = FirebaseWebRtcAdapter

        /***/
      }

    /******/
  }
)
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlLWtleS1lbmNvZGUvZmlyZWJhc2Uta2V5LWVuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViUnRjUGVlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImVuY29kZSIsImRlY29kZWQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiZGVjb2RlIiwiZW5jb2RlZCIsImRlY29kZVVSSUNvbXBvbmVudCIsImRlZXBLZXlSZXBsYWNlIiwib2JqIiwiZm4iLCJyZWJ1aWx0VHJlZSIsIk9iamVjdCIsImFzc2lnbiIsInRyYXZlcnNlIiwibyIsIngiLCJmdW5jIiwiaSIsIkFycmF5IiwiaXNBcnJheSIsImFwcGx5IiwibGVuZ3RoIiwicGFyZW50Iiwia2V5IiwidmFsIiwiZGVlcERlY29kZSIsImVuY29kZWRUcmVlIiwiJHRoaXMiLCJkZWVwRW5jb2RlIiwiZGVjb2RlZFRyZWUiLCJXZWJSdGNQZWVyIiwibG9jYWxJZCIsInJlbW90ZUlkIiwic2VuZFNpZ25hbEZ1bmMiLCJvcGVuIiwiY2hhbm5lbExhYmVsIiwicGMiLCJjcmVhdGVQZWVyQ29ubmVjdGlvbiIsImNoYW5uZWwiLCJvcGVuTGlzdGVuZXIiLCJjbG9zZWRMaXN0ZW5lciIsIm1lc3NhZ2VMaXN0ZW5lciIsInNlbGYiLCJzZXR1cENoYW5uZWwiLCJjcmVhdGVEYXRhQ2hhbm5lbCIsInJlbGlhYmxlIiwiY3JlYXRlT2ZmZXIiLCJzZHAiLCJoYW5kbGVTZXNzaW9uRGVzY3JpcHRpb24iLCJlcnJvciIsImNvbnNvbGUiLCJzaWduYWwiLCJ0byIsImZyb20iLCJ0eXBlIiwiaGFuZGxlT2ZmZXIiLCJoYW5kbGVBbnN3ZXIiLCJoYW5kbGVDYW5kaWRhdGUiLCJkYXRhIiwicmVhZHlTdGF0ZSIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwiTk9UX0NPTk5FQ1RFRCIsIklTX0NPTk5FQ1RFRCIsIkNPTk5FQ1RJTkciLCJSVENQZWVyQ29ubmVjdGlvbiIsIndpbmRvdyIsIndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uIiwibW96UlRDUGVlckNvbm5lY3Rpb24iLCJtc1JUQ1BlZXJDb25uZWN0aW9uIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJpY2VTZXJ2ZXJzIiwiSUNFX1NFUlZFUlMiLCJvbmljZWNhbmRpZGF0ZSIsImV2ZW50IiwiY2FuZGlkYXRlIiwic2RwTUxpbmVJbmRleCIsIm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlIiwiaWNlQ29ubmVjdGlvblN0YXRlIiwib25tZXNzYWdlIiwicGFyc2UiLCJvbm9wZW4iLCJvbmNsb3NlIiwib25lcnJvciIsIm1lc3NhZ2UiLCJvbmRhdGFjaGFubmVsIiwic2V0UmVtb3RlRGVzY3JpcHRpb24iLCJjcmVhdGVBbnN3ZXIiLCJSVENJY2VDYW5kaWRhdGUiLCJ3ZWJraXRSVENJY2VDYW5kaWRhdGUiLCJtb3pSVENJY2VDYW5kaWRhdGUiLCJhZGRJY2VDYW5kaWRhdGUiLCJzZXRMb2NhbERlc2NyaXB0aW9uIiwiUlRDU2Vzc2lvbkRlc2NyaXB0aW9uIiwid2Via2l0UlRDU2Vzc2lvbkRlc2NyaXB0aW9uIiwibW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uIiwibXNSVENTZXNzaW9uRGVzY3JpcHRpb24iLCJ1cmxzIiwiZmlyZWJhc2VLZXlFbmNvZGUiLCJyZXF1aXJlIiwiRmlyZWJhc2VXZWJSdGNBZGFwdGVyIiwiZmlyZWJhc2UiLCJjb25maWciLCJyb290UGF0aCIsImFwcElkIiwicm9vbUlkIiwicGVlcnMiLCJvY2N1cGFudHMiLCJzZXJ2ZXJUaW1lUmVxdWVzdHMiLCJ0aW1lT2Zmc2V0cyIsImF2Z1RpbWVPZmZzZXQiLCJmaXJlYmFzZUNvbmZpZyIsImF1dGhUeXBlIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwidXJsIiwib3B0aW9ucyIsImRhdGFjaGFubmVsIiwiTkFGIiwibG9nIiwid2FybiIsImF1ZGlvIiwidmlkZW8iLCJzdWNjZXNzTGlzdGVuZXIiLCJmYWlsdXJlTGlzdGVuZXIiLCJjb25uZWN0U3VjY2VzcyIsImNvbm5lY3RGYWlsdXJlIiwib2NjdXBhbnRMaXN0ZW5lciIsImRhdGFUeXBlIiwiZGVjb2RlZERhdGEiLCJpbml0RmlyZWJhc2UiLCJpZCIsInVwZGF0ZVRpbWVPZmZzZXQiLCJmaXJlYmFzZUFwcCIsImdldFRpbWVzdGFtcCIsInRpbWVzdGFtcCIsIm15Um9vbUpvaW5UaW1lIiwidXNlclJlZiIsImRhdGFiYXNlIiwicmVmIiwiZ2V0VXNlclBhdGgiLCJzZXQiLCJvbkRpc2Nvbm5lY3QiLCJyZW1vdmUiLCJyb29tUmVmIiwiZ2V0Um9vbVBhdGgiLCJvbiIsInJlbW90ZVRpbWVzdGFtcCIsInBlZXIiLCJnZXRTaWduYWxQYXRoIiwic2V0RGF0YWNoYW5uZWxMaXN0ZW5lcnMiLCJ2YWx1ZSIsImhhbmRsZVNpZ25hbCIsImdldERhdGFQYXRoIiwib2ZmZXIiLCJjbGllbnQiLCJyb29tSm9pblRpbWUiLCJjbGllbnRJZCIsImNsb25lZERhdGEiLCJlbmNvZGVkRGF0YSIsImhhc093blByb3BlcnR5Iiwic2VuZERhdGEiLCJzZW5kRGF0YUd1YXJhbnRlZWQiLCJhZGFwdGVycyIsImdldFN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiLCJjYWxsYmFjayIsImluaXRpYWxpemVBcHAiLCJhdXRoIiwiYXV0aE5vbmUiLCJhdXRoQW5vbnltb3VzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmFuZG9tU3RyaW5nIiwic2lnbkluQW5vbnltb3VzbHkiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwidWlkIiwiZ2V0Um9vdFBhdGgiLCJnZXRBcHBQYXRoIiwic3RyaW5nTGVuZ3RoIiwiY2hhcnMiLCJzdHJpbmciLCJyYW5kb21OdW1iZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJnZXRUaW1lc3RhbXBHZW5lcmF0aW9uUGF0aCIsIlNlcnZlclZhbHVlIiwiVElNRVNUQU1QIiwib25jZSIsInRoZW4iLCJ0aW1lT2Zmc2V0IiwicHVzaCIsInJlZHVjZSIsImFjYyIsIm9mZnNldCIsInNldFRpbWVvdXQiLCJEYXRlIiwiZ2V0VGltZSIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JDLFFBQU0sRUFBRSxnQkFBVUMsT0FBVixFQUFtQjtBQUN2QixXQUFPQyxrQkFBa0IsQ0FBQ0QsT0FBRCxDQUFsQixDQUE0QkUsT0FBNUIsQ0FBb0MsS0FBcEMsRUFBMkMsS0FBM0MsQ0FBUDtBQUNILEdBSFk7QUFJYkMsUUFBTSxFQUFFLGdCQUFVQyxPQUFWLEVBQW1CO0FBQ3ZCLFdBQU9DLGtCQUFrQixDQUFDRCxPQUFPLENBQUNGLE9BQVIsQ0FBZ0IsS0FBaEIsRUFBdUIsR0FBdkIsQ0FBRCxDQUF6QjtB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QUcsSUFBSUMsTUFBekI7QUFBQSxTQUF4QixFQUEwRCxDQUExRCxJQUNBLEtBQUksQ0FBQ3pGLFdBQUwsQ0FBaUIxRixNQUZuQjs7QUFJQSxZQUFJLEtBQUksQ0FBQ3lGLGtCQUFMLEdBQTBCLEVBQTlCLEVBQWtDO0FBQ2hDMkYsb0JBQVUsQ0FBQztBQUFBLG1CQUFNLEtBQUksQ0FBQ2xFLGdCQUFMLEVBQU47QUFBQSxXQUFELEVBQWdDLElBQUksRUFBSixHQUFTLElBQXpDLENBQVYsQ0FEZ0MsQ0FDMEI7QUFDM0QsU0FGRCxNQUVPO0FBQ0wsZUFBSSxDQUFDQSxnQkFBTDtBQUNEO0FBQ0YsT0F4QkksQ0FBUDtBQXlCRDs7O29DQUVlO0FBQ2QsYUFBTyxJQUFJbUUsSUFBSixHQUFXQyxPQUFYLEtBQXVCLEtBQUszRixhQUFuQztBQUNEOzs7Ozs7QUFHSFMsR0FBRyxDQUFDNkMsUUFBSixDQUFhc0MsUUFBYixDQUFzQixVQUF0QixFQUFrQ3RHLHFCQUFsQztBQUVBeEcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdUcscUJBQWpCLEMiLCJmaWxlIjoibmFmLWZpcmViYXNlLWFkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZW5jb2RlOiBmdW5jdGlvbiAoZGVjb2RlZCkge1xyXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoZGVjb2RlZCkucmVwbGFjZSgvXFwuL2csICclMkUnKTtcclxuICAgIH0sXHJcbiAgICBkZWNvZGU6IGZ1bmN0aW9uIChlbmNvZGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkLnJlcGxhY2UoJyUyRScsICcuJykpO1xyXG4gICAgfSxcclxuICAgIC8vIFJlcGxhY2VzIHRoZSBrZXkgd2l0aCBgZm4oa2V5KWAgb24gZWFjaCBrZXkgaW4gYW4gb2JqZWN0IHRyZWUuXHJcbiAgICAvLyBpLmUuIG1ha2luZyBhbGwga2V5cyB1cHBlcmNhc2UuXHJcbiAgICBkZWVwS2V5UmVwbGFjZTogZnVuY3Rpb24gKG9iaiwgZm4pIHtcclxuICAgICAgICB2YXIgcmVidWlsdFRyZWUgPSBPYmplY3QuYXNzaWduKHt9LCBvYmopO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0cmF2ZXJzZShvLCB4LCBmdW5jKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YobykgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvW2ldICE9PSBudWxsICYmICh0eXBlb2Yob1tpXSk9PVwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShvW2ldKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9nb2luZyBvbiBzdGVwIGRvd24gaW4gdGhlIG9iamVjdCB0cmVlISFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmVyc2Uob1tpXSx4W2ldLGZ1bmMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsW3gsIGksIHhbaV1dKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG8pKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmdW5jLmFwcGx5KHRoaXMsW28sIGksb1tpXV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvW2ldICE9PSBudWxsICYmICh0eXBlb2Yob1tpXSk9PVwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShvW2ldKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9nb2luZyBvbiBzdGVwIGRvd24gaW4gdGhlIG9iamVjdCB0cmVlISFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhdmVyc2Uob1tpXSwgeFtpXSwgZnVuYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cmF2ZXJzZShvYmosIHJlYnVpbHRUcmVlLCBmdW5jdGlvbiAocGFyZW50LCBrZXksIHZhbCkge1xyXG4gICAgICAgICAgICBkZWxldGUgcGFyZW50W2tleV07XHJcbiAgICAgICAgICAgIHBhcmVudFtmbihrZXkpXSA9IHZhbDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlYnVpbHRUcmVlO1xyXG4gICAgfSxcclxuICAgIGRlZXBEZWNvZGU6IGZ1bmN0aW9uIChlbmNvZGVkVHJlZSkge1xyXG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZhciByZWJ1aWx0VHJlZSA9IHRoaXMuZGVlcEtleVJlcGxhY2UoZW5jb2RlZFRyZWUsIGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICR0aGlzLmRlY29kZShrZXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVidWlsdFRyZWU7XHJcbiAgICB9LFxyXG4gICAgZGVlcEVuY29kZTogZnVuY3Rpb24gKGRlY29kZWRUcmVlKSB7XHJcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgdmFyIHJlYnVpbHRUcmVlID0gdGhpcy5kZWVwS2V5UmVwbGFjZShkZWNvZGVkVHJlZSwgZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJHRoaXMuZW5jb2RlKGtleSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZWJ1aWx0VHJlZTtcclxuICAgIH1cclxufVxyXG4iLCJjbGFzcyBXZWJSdGNQZWVyIHtcbiAgY29uc3RydWN0b3IobG9jYWxJZCwgcmVtb3RlSWQsIHNlbmRTaWduYWxGdW5jKSB7XG4gICAgdGhpcy5sb2NhbElkID0gbG9jYWxJZDtcbiAgICB0aGlzLnJlbW90ZUlkID0gcmVtb3RlSWQ7XG4gICAgdGhpcy5zZW5kU2lnbmFsRnVuYyA9IHNlbmRTaWduYWxGdW5jO1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbm5lbExhYmVsID0gXCJuZXR3b3JrZWQtYWZyYW1lLWNoYW5uZWxcIjtcblxuICAgIHRoaXMucGMgPSB0aGlzLmNyZWF0ZVBlZXJDb25uZWN0aW9uKCk7XG4gICAgdGhpcy5jaGFubmVsID0gbnVsbDtcbiAgfVxuXG4gIHNldERhdGFjaGFubmVsTGlzdGVuZXJzKG9wZW5MaXN0ZW5lciwgY2xvc2VkTGlzdGVuZXIsIG1lc3NhZ2VMaXN0ZW5lcikge1xuICAgIHRoaXMub3Blbkxpc3RlbmVyID0gb3Blbkxpc3RlbmVyO1xuICAgIHRoaXMuY2xvc2VkTGlzdGVuZXIgPSBjbG9zZWRMaXN0ZW5lcjtcbiAgICB0aGlzLm1lc3NhZ2VMaXN0ZW5lciA9IG1lc3NhZ2VMaXN0ZW5lcjtcbiAgfVxuXG4gIG9mZmVyKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAvLyByZWxpYWJsZTogZmFsc2UgLSBVRFBcbiAgICB0aGlzLnNldHVwQ2hhbm5lbChcbiAgICAgIHRoaXMucGMuY3JlYXRlRGF0YUNoYW5uZWwodGhpcy5jaGFubmVsTGFiZWwsIHsgcmVsaWFibGU6IGZhbHNlIH0pXG4gICAgKTtcbiAgICB0aGlzLnBjLmNyZWF0ZU9mZmVyKFxuICAgICAgZnVuY3Rpb24oc2RwKSB7XG4gICAgICAgIHNlbGYuaGFuZGxlU2Vzc2lvbkRlc2NyaXB0aW9uKHNkcCk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIldlYlJ0Y1BlZXIub2ZmZXI6IFwiICsgZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBoYW5kbGVTaWduYWwoc2lnbmFsKSB7XG4gICAgLy8gaWdub3JlcyBzaWduYWwgaWYgaXQgaXNuJ3QgZm9yIG1lXG4gICAgaWYgKHRoaXMubG9jYWxJZCAhPT0gc2lnbmFsLnRvIHx8IHRoaXMucmVtb3RlSWQgIT09IHNpZ25hbC5mcm9tKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKHNpZ25hbC50eXBlKSB7XG4gICAgICBjYXNlIFwib2ZmZXJcIjpcbiAgICAgICAgdGhpcy5oYW5kbGVPZmZlcihzaWduYWwpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImFuc3dlclwiOlxuICAgICAgICB0aGlzLmhhbmRsZUFuc3dlcihzaWduYWwpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImNhbmRpZGF0ZVwiOlxuICAgICAgICB0aGlzLmhhbmRsZUNhbmRpZGF0ZShzaWduYWwpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIldlYlJ0Y1BlZXIuaGFuZGxlU2lnbmFsOiBVbmtub3duIHNpZ25hbCB0eXBlIFwiICsgc2lnbmFsLnR5cGVcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc2VuZCh0eXBlLCBkYXRhKSB7XG4gICAgLy8gVE9ETzogdGhyb3cgZXJyb3I/XG4gICAgaWYgKHRoaXMuY2hhbm5lbCA9PT0gbnVsbCB8fCB0aGlzLmNoYW5uZWwucmVhZHlTdGF0ZSAhPT0gXCJvcGVuXCIpIHJldHVybjtcblxuICAgIHRoaXMuY2hhbm5lbC5zZW5kKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogdHlwZSwgZGF0YTogZGF0YSB9KSk7XG4gIH1cblxuICBnZXRTdGF0dXMoKSB7XG4gICAgaWYgKHRoaXMuY2hhbm5lbCA9PT0gbnVsbCkgcmV0dXJuIFdlYlJ0Y1BlZXIuTk9UX0NPTk5FQ1RFRDtcblxuICAgIHN3aXRjaCAodGhpcy5jaGFubmVsLnJlYWR5U3RhdGUpIHtcbiAgICAgIGNhc2UgXCJvcGVuXCI6XG4gICAgICAgIHJldHVybiBXZWJSdGNQZWVyLklTX0NPTk5FQ1RFRDtcblxuICAgICAgY2FzZSBcImNvbm5lY3RpbmdcIjpcbiAgICAgICAgcmV0dXJuIFdlYlJ0Y1BlZXIuQ09OTkVDVElORztcblxuICAgICAgY2FzZSBcImNsb3NpbmdcIjpcbiAgICAgIGNhc2UgXCJjbG9zZWRcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBXZWJSdGNQZWVyLk5PVF9DT05ORUNURUQ7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICAgKiBQcml2YXRlc1xuICAgICAqL1xuXG4gIGNyZWF0ZVBlZXJDb25uZWN0aW9uKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgUlRDUGVlckNvbm5lY3Rpb24gPVxuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uIHx8XG4gICAgICB3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24gfHxcbiAgICAgIHdpbmRvdy5tb3pSVENQZWVyQ29ubmVjdGlvbiB8fFxuICAgICAgd2luZG93Lm1zUlRDUGVlckNvbm5lY3Rpb247XG5cbiAgICBpZiAoUlRDUGVlckNvbm5lY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIldlYlJ0Y1BlZXIuY3JlYXRlUGVlckNvbm5lY3Rpb246IFRoaXMgYnJvd3NlciBkb2VzIG5vdCBzZWVtIHRvIHN1cHBvcnQgV2ViUlRDLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBwYyA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbih7IGljZVNlcnZlcnM6IFdlYlJ0Y1BlZXIuSUNFX1NFUlZFUlMgfSk7XG5cbiAgICBwYy5vbmljZWNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuY2FuZGlkYXRlKSB7XG4gICAgICAgIHNlbGYuc2VuZFNpZ25hbEZ1bmMoe1xuICAgICAgICAgIGZyb206IHNlbGYubG9jYWxJZCxcbiAgICAgICAgICB0bzogc2VsZi5yZW1vdGVJZCxcbiAgICAgICAgICB0eXBlOiBcImNhbmRpZGF0ZVwiLFxuICAgICAgICAgIHNkcE1MaW5lSW5kZXg6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4LFxuICAgICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gTm90ZTogc2VlbXMgbGlrZSBjaGFubmVsLm9uY2xvc2UgaGFuZGVyIGlzIHVucmVsaWFibGUgb24gc29tZSBwbGF0Zm9ybXMsXG4gICAgLy8gICAgICAgc28gYWxzbyB0cmllcyB0byBkZXRlY3QgZGlzY29ubmVjdGlvbiBoZXJlLlxuICAgIHBjLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoc2VsZi5vcGVuICYmIHBjLmljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gXCJkaXNjb25uZWN0ZWRcIikge1xuICAgICAgICBzZWxmLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgc2VsZi5jbG9zZWRMaXN0ZW5lcihzZWxmLnJlbW90ZUlkKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHBjO1xuICB9XG5cbiAgc2V0dXBDaGFubmVsKGNoYW5uZWwpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuXG4gICAgLy8gcmVjZWl2ZWQgZGF0YSBmcm9tIGEgcmVtb3RlIHBlZXJcbiAgICB0aGlzLmNoYW5uZWwub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIHNlbGYubWVzc2FnZUxpc3RlbmVyKHNlbGYucmVtb3RlSWQsIGRhdGEudHlwZSwgZGF0YS5kYXRhKTtcbiAgICB9O1xuXG4gICAgLy8gY29ubmVjdGVkIHdpdGggYSByZW1vdGUgcGVlclxuICAgIHRoaXMuY2hhbm5lbC5vbm9wZW4gPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgc2VsZi5vcGVuID0gdHJ1ZTtcbiAgICAgIHNlbGYub3Blbkxpc3RlbmVyKHNlbGYucmVtb3RlSWQpO1xuICAgIH07XG5cbiAgICAvLyBkaXNjb25uZWN0ZWQgd2l0aCBhIHJlbW90ZSBwZWVyXG4gICAgdGhpcy5jaGFubmVsLm9uY2xvc2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgaWYgKCFzZWxmLm9wZW4pIHJldHVybjtcbiAgICAgIHNlbGYub3BlbiA9IGZhbHNlO1xuICAgICAgc2VsZi5jbG9zZWRMaXN0ZW5lcihzZWxmLnJlbW90ZUlkKTtcbiAgICB9O1xuXG4gICAgLy8gZXJyb3Igb2NjdXJyZWQgd2l0aCBhIHJlbW90ZSBwZWVyXG4gICAgdGhpcy5jaGFubmVsLm9uZXJyb3IgPSBmdW5jdGlvbihlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIldlYlJ0Y1BlZXIuY2hhbm5lbC5vbmVycm9yOiBcIiArIGVycm9yKTtcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlT2ZmZXIobWVzc2FnZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMucGMub25kYXRhY2hhbm5lbCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBzZWxmLnNldHVwQ2hhbm5lbChldmVudC5jaGFubmVsKTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRSZW1vdGVEZXNjcmlwdGlvbihtZXNzYWdlKTtcblxuICAgIHRoaXMucGMuY3JlYXRlQW5zd2VyKFxuICAgICAgZnVuY3Rpb24oc2RwKSB7XG4gICAgICAgIHNlbGYuaGFuZGxlU2Vzc2lvbkRlc2NyaXB0aW9uKHNkcCk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIldlYlJ0Y1BlZXIuaGFuZGxlT2ZmZXI6IFwiICsgZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBoYW5kbGVBbnN3ZXIobWVzc2FnZSkge1xuICAgIHRoaXMuc2V0UmVtb3RlRGVzY3JpcHRpb24obWVzc2FnZSk7XG4gIH1cblxuICBoYW5kbGVDYW5kaWRhdGUobWVzc2FnZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgUlRDSWNlQ2FuZGlkYXRlID1cbiAgICAgIHdpbmRvdy5SVENJY2VDYW5kaWRhdGUgfHxcbiAgICAgIHdpbmRvdy53ZWJraXRSVENJY2VDYW5kaWRhdGUgfHxcbiAgICAgIHdpbmRvdy5tb3pSVENJY2VDYW5kaWRhdGU7XG5cbiAgICB0aGlzLnBjLmFkZEljZUNhbmRpZGF0ZShcbiAgICAgIG5ldyBSVENJY2VDYW5kaWRhdGUobWVzc2FnZSksXG4gICAgICBmdW5jdGlvbigpIHt9LFxuICAgICAgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIldlYlJ0Y1BlZXIuaGFuZGxlQ2FuZGlkYXRlOiBcIiArIGVycm9yKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgaGFuZGxlU2Vzc2lvbkRlc2NyaXB0aW9uKHNkcCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMucGMuc2V0TG9jYWxEZXNjcmlwdGlvbihcbiAgICAgIHNkcCxcbiAgICAgIGZ1bmN0aW9uKCkge30sXG4gICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiV2ViUnRjUGVlci5oYW5kbGVTZXNzaW9uRGVzY3JpcHRpb246IFwiICsgZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLnNlbmRTaWduYWxGdW5jKHtcbiAgICAgIGZyb206IHRoaXMubG9jYWxJZCxcbiAgICAgIHRvOiB0aGlzLnJlbW90ZUlkLFxuICAgICAgdHlwZTogc2RwLnR5cGUsXG4gICAgICBzZHA6IHNkcC5zZHBcbiAgICB9KTtcbiAgfVxuXG4gIHNldFJlbW90ZURlc2NyaXB0aW9uKG1lc3NhZ2UpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9XG4gICAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uIHx8XG4gICAgICB3aW5kb3cud2Via2l0UlRDU2Vzc2lvbkRlc2NyaXB0aW9uIHx8XG4gICAgICB3aW5kb3cubW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uIHx8XG4gICAgICB3aW5kb3cubXNSVENTZXNzaW9uRGVzY3JpcHRpb247XG5cbiAgICB0aGlzLnBjLnNldFJlbW90ZURlc2NyaXB0aW9uKFxuICAgICAgbmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbihtZXNzYWdlKSxcbiAgICAgIGZ1bmN0aW9uKCkge30sXG4gICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiV2ViUnRjUGVlci5zZXRSZW1vdGVEZXNjcmlwdGlvbjogXCIgKyBlcnJvcik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG5XZWJSdGNQZWVyLklTX0NPTk5FQ1RFRCA9IFwiSVNfQ09OTkVDVEVEXCI7XG5XZWJSdGNQZWVyLkNPTk5FQ1RJTkcgPSBcIkNPTk5FQ1RJTkdcIjtcbldlYlJ0Y1BlZXIuTk9UX0NPTk5FQ1RFRCA9IFwiTk9UX0NPTk5FQ1RFRFwiO1xuXG5XZWJSdGNQZWVyLklDRV9TRVJWRVJTID0gW1xuICB7IHVybHM6IFwic3R1bjpzdHVuMS5sLmdvb2dsZS5jb206MTkzMDJcIiB9LFxuICB7IHVybHM6IFwic3R1bjpzdHVuMi5sLmdvb2dsZS5jb206MTkzMDJcIiB9LFxuICB7IHVybHM6IFwic3R1bjpzdHVuMy5sLmdvb2dsZS5jb206MTkzMDJcIiB9LFxuICB7IHVybHM6IFwic3R1bjpzdHVuNC5sLmdvb2dsZS5jb206MTkzMDJcIiB9XG5dO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYlJ0Y1BlZXI7XG4iLCJjb25zdCBmaXJlYmFzZUtleUVuY29kZSA9IHJlcXVpcmUoXCJmaXJlYmFzZS1rZXktZW5jb2RlXCIpO1xuY29uc3QgV2ViUnRjUGVlciA9IHJlcXVpcmUoXCIuL1dlYlJ0Y1BlZXJcIik7XG5cbmNsYXNzIEZpcmViYXNlV2ViUnRjQWRhcHRlciB7XG4gIC8qKlxuICAgIENvbmZpZyBzdHJ1Y3R1cmU6XG4gICAgY29uZmlnLmF1dGhUeXBlOiBub25lO1xuICAgIGNvbmZpZy5hcGlLZXk6IHlvdXItYXBpO1xuICAgIGNvbmZpZy5hdXRoRG9tYWluOiB5b3VyLXByb2plY3QuZmlyZWJhc2VhcHAuY29tO1xuICAgIGNvbmZpZy5kYXRhYmFzZVVSTDogaHR0cHM6Ly95b3VyLXByb2plY3QuZmlyZWJhc2Vpby5jb207XG4gICovXG4gIGNvbnN0cnVjdG9yKGZpcmViYXNlLCBjb25maWcpIHtcbiAgICB0aGlzLnJvb3RQYXRoID0gXCJuZXR3b3JrZWQtYWZyYW1lXCI7XG5cbiAgICB0aGlzLmxvY2FsSWQgPSBudWxsO1xuICAgIHRoaXMuYXBwSWQgPSBudWxsO1xuICAgIHRoaXMucm9vbUlkID0gbnVsbDtcblxuICAgIHRoaXMucGVlcnMgPSB7fTsgLy8gaWQgLT4gV2ViUnRjUGVlclxuICAgIHRoaXMub2NjdXBhbnRzID0ge307IC8vIGlkIC0+IGpvaW5UaW1lc3RhbXBcblxuICAgIHRoaXMuc2VydmVyVGltZVJlcXVlc3RzID0gMDtcbiAgICB0aGlzLnRpbWVPZmZzZXRzID0gW107XG4gICAgdGhpcy5hdmdUaW1lT2Zmc2V0ID0gMDtcblxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB3aW5kb3cuZmlyZWJhc2VDb25maWc7XG4gICAgdGhpcy5maXJlYmFzZSA9IGZpcmViYXNlIHx8IHdpbmRvdy5maXJlYmFzZTtcblxuICAgIGlmICh0aGlzLmZpcmViYXNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJJbXBvcnQgaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy94LngueC9maXJlYmFzZS5qc1wiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuYXV0aFR5cGUgPSBjb25maWcuYXV0aFR5cGU7XG4gICAgdGhpcy5hcGlLZXkgPSBjb25maWcuYXBpS2V5O1xuICAgIHRoaXMuYXV0aERvbWFpbiA9IGNvbmZpZy5hdXRoRG9tYWluO1xuICAgIHRoaXMuZGF0YWJhc2VVUkwgPSBjb25maWcuZGF0YWJhc2VVUkw7XG4gIH1cblxuICAvKlxuICAgKiBDYWxsIGJlZm9yZSBgY29ubmVjdGBcbiAgICovXG5cbiAgc2V0U2VydmVyVXJsKHVybCkge1xuICAgIC8vIGhhbmRsZWQgaW4gY29uZmlnXG4gIH1cblxuICBzZXRBcHAoYXBwSWQpIHtcbiAgICB0aGlzLmFwcElkID0gYXBwSWQ7XG4gIH1cblxuICBzZXRSb29tKHJvb21JZCkge1xuICAgIHRoaXMucm9vbUlkID0gcm9vbUlkO1xuICB9XG5cbiAgLy8gb3B0aW9uczogeyBkYXRhY2hhbm5lbDogYm9vbCwgYXVkaW86IGJvb2wgfVxuICBzZXRXZWJSdGNPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAvLyBUT0RPOiBzdXBwb3J0IGF1ZGlvIGFuZCB2aWRlb1xuICAgIGlmIChvcHRpb25zLmRhdGFjaGFubmVsID09PSBmYWxzZSlcbiAgICAgIE5BRi5sb2cud2FybihcbiAgICAgICAgXCJGaXJlYmFzZVdlYlJ0Y0FkYXB0ZXIuc2V0V2ViUnRjT3B0aW9uczogZGF0YWNoYW5uZWwgbXVzdCBiZSB0cnVlLlwiXG4gICAgICApO1xuICAgIGlmIChvcHRpb25zLmF1ZGlvID09PSB0cnVlKVxuICAgICAgTkFGLmxvZy53YXJuKFwiRmlyZWJhc2VXZWJSdGNBZGFwdGVyIGRvZXMgbm90IHN1cHBvcnQgYXVkaW8geWV0LlwiKTtcbiAgICBpZiAob3B0aW9ucy52aWRlbyA9PT0gdHJ1ZSlcbiAgICAgIE5BRi5sb2cud2FybihcIkZpcmViYXNlV2ViUnRjQWRhcHRlciBkb2VzIG5vdCBzdXBwb3J0IHZpZGVvIHlldC5cIik7XG4gIH1cblxuICBzZXRTZXJ2ZXJDb25uZWN0TGlzdGVuZXJzKHN1Y2Nlc3NMaXN0ZW5lciwgZmFpbHVyZUxpc3RlbmVyKSB7XG4gICAgdGhpcy5jb25uZWN0U3VjY2VzcyA9IHN1Y2Nlc3NMaXN0ZW5lcjtcbiAgICB0aGlzLmNvbm5lY3RGYWlsdXJlID0gZmFpbHVyZUxpc3RlbmVyO1xuICB9XG5cbiAgc2V0Um9vbU9jY3VwYW50TGlzdGVuZXIob2NjdXBhbnRMaXN0ZW5lcikge1xuICAgIHRoaXMub2NjdXBhbnRMaXN0ZW5lciA9IG9jY3VwYW50TGlzdGVuZXI7XG4gIH1cblxuICBzZXREYXRhQ2hhbm5lbExpc3RlbmVycyhvcGVuTGlzdGVuZXIsIGNsb3NlZExpc3RlbmVyLCBtZXNzYWdlTGlzdGVuZXIpIHtcbiAgICB0aGlzLm9wZW5MaXN0ZW5lciA9IG9wZW5MaXN0ZW5lcjtcbiAgICB0aGlzLmNsb3NlZExpc3RlbmVyID0gY2xvc2VkTGlzdGVuZXI7XG4gICAgdGhpcy5tZXNzYWdlTGlzdGVuZXIgPSBmdW5jdGlvbihyZW1vdGVJZCwgZGF0YVR5cGUsIGRhdGEpIHtcbiAgICAgIHZhciBkZWNvZGVkRGF0YSA9IGZpcmViYXNlS2V5RW5jb2RlLmRlZXBEZWNvZGUoZGF0YSk7XG4gICAgICBtZXNzYWdlTGlzdGVuZXIocmVtb3RlSWQsIGRhdGFUeXBlLCBkZWNvZGVkRGF0YSk7XG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3QoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5pbml0RmlyZWJhc2UoZnVuY3Rpb24oaWQpIHtcbiAgICAgIHNlbGYudXBkYXRlVGltZU9mZnNldCgpO1xuXG4gICAgICBzZWxmLmxvY2FsSWQgPSBpZDtcbiAgICAgIHZhciBmaXJlYmFzZUFwcCA9IHNlbGYuZmlyZWJhc2VBcHA7XG5cbiAgICAgIC8vIE5vdGU6IGFzc3VtaW5nIHRoYXQgZGF0YSB0cmFuc2ZlciB2aWEgZmlyZWJhc2UgcmVhbHRpbWUgZGF0YWJhc2VcbiAgICAgIC8vICAgICAgIGlzIHJlbGlhYmxlIGFuZCBpbiBvcmRlclxuICAgICAgLy8gVE9ETzogY2FuIHJhY2UgYW1vbmcgcGVlcnM/IElmIHNvLCBmaXhcblxuICAgICAgc2VsZi5nZXRUaW1lc3RhbXAoZnVuY3Rpb24odGltZXN0YW1wKSB7XG4gICAgICAgIHNlbGYubXlSb29tSm9pblRpbWUgPSB0aW1lc3RhbXA7XG5cbiAgICAgICAgdmFyIHVzZXJSZWYgPSBmaXJlYmFzZUFwcFxuICAgICAgICAgIC5kYXRhYmFzZSgpXG4gICAgICAgICAgLnJlZihzZWxmLmdldFVzZXJQYXRoKHNlbGYubG9jYWxJZCkpO1xuICAgICAgICB1c2VyUmVmLnNldCh7IHRpbWVzdGFtcDogdGltZXN0YW1wLCBzaWduYWw6IFwiXCIsIGRhdGE6IFwiXCIgfSk7XG4gICAgICAgIHVzZXJSZWYub25EaXNjb25uZWN0KCkucmVtb3ZlKCk7XG5cbiAgICAgICAgdmFyIHJvb21SZWYgPSBmaXJlYmFzZUFwcC5kYXRhYmFzZSgpLnJlZihzZWxmLmdldFJvb21QYXRoKCkpO1xuXG4gICAgICAgIHJvb21SZWYub24oXCJjaGlsZF9hZGRlZFwiLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgdmFyIHJlbW90ZUlkID0gZGF0YS5rZXk7XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICByZW1vdGVJZCA9PT0gc2VsZi5sb2NhbElkIHx8XG4gICAgICAgICAgICByZW1vdGVJZCA9PT0gXCJ0aW1lc3RhbXBcIiB8fFxuICAgICAgICAgICAgc2VsZi5wZWVyc1tyZW1vdGVJZF0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgIHZhciByZW1vdGVUaW1lc3RhbXAgPSBkYXRhLnZhbCgpLnRpbWVzdGFtcDtcblxuICAgICAgICAgIHZhciBwZWVyID0gbmV3IFdlYlJ0Y1BlZXIoXG4gICAgICAgICAgICBzZWxmLmxvY2FsSWQsXG4gICAgICAgICAgICByZW1vdGVJZCxcbiAgICAgICAgICAgIC8vIHNlbmQgc2lnbmFsIGZ1bmN0aW9uXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgIGZpcmViYXNlQXBwXG4gICAgICAgICAgICAgICAgLmRhdGFiYXNlKClcbiAgICAgICAgICAgICAgICAucmVmKHNlbGYuZ2V0U2lnbmFsUGF0aChzZWxmLmxvY2FsSWQpKVxuICAgICAgICAgICAgICAgIC5zZXQoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICBwZWVyLnNldERhdGFjaGFubmVsTGlzdGVuZXJzKFxuICAgICAgICAgICAgc2VsZi5vcGVuTGlzdGVuZXIsXG4gICAgICAgICAgICBzZWxmLmNsb3NlZExpc3RlbmVyLFxuICAgICAgICAgICAgc2VsZi5tZXNzYWdlTGlzdGVuZXJcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgc2VsZi5wZWVyc1tyZW1vdGVJZF0gPSBwZWVyO1xuICAgICAgICAgIHNlbGYub2NjdXBhbnRzW3JlbW90ZUlkXSA9IHJlbW90ZVRpbWVzdGFtcDtcblxuICAgICAgICAgIC8vIHJlY2VpdmVkIHNpZ25hbFxuICAgICAgICAgIGZpcmViYXNlQXBwXG4gICAgICAgICAgICAuZGF0YWJhc2UoKVxuICAgICAgICAgICAgLnJlZihzZWxmLmdldFNpZ25hbFBhdGgocmVtb3RlSWQpKVxuICAgICAgICAgICAgLm9uKFwidmFsdWVcIiwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhLnZhbCgpO1xuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IFwiXCIpIHJldHVybjtcbiAgICAgICAgICAgICAgcGVlci5oYW5kbGVTaWduYWwodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyByZWNlaXZlZCBkYXRhXG4gICAgICAgICAgZmlyZWJhc2VBcHBcbiAgICAgICAgICAgIC5kYXRhYmFzZSgpXG4gICAgICAgICAgICAucmVmKHNlbGYuZ2V0RGF0YVBhdGgocmVtb3RlSWQpKVxuICAgICAgICAgICAgLm9uKFwidmFsdWVcIiwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhLnZhbCgpO1xuICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IFwiXCIgfHwgdmFsdWUudG8gIT09IHNlbGYubG9jYWxJZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIHNlbGYubWVzc2FnZUxpc3RlbmVyKHJlbW90ZUlkLCB2YWx1ZS50eXBlLCB2YWx1ZS5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gc2VuZCBvZmZlciBmcm9tIGEgcGVlciB3aG9cbiAgICAgICAgICAvLyAgIC0gbGF0ZXIgam9pbmVkIHRoZSByb29tLCBvclxuICAgICAgICAgIC8vICAgLSBoYXMgbGFyZ2VyIGlkIGlmIHR3byBwZWVycyBqb2luZWQgdGhlIHJvb20gYXQgc2FtZSB0aW1lXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGltZXN0YW1wID4gcmVtb3RlVGltZXN0YW1wIHx8XG4gICAgICAgICAgICAodGltZXN0YW1wID09PSByZW1vdGVUaW1lc3RhbXAgJiYgc2VsZi5sb2NhbElkID4gcmVtb3RlSWQpXG4gICAgICAgICAgKVxuICAgICAgICAgICAgcGVlci5vZmZlcigpO1xuXG4gICAgICAgICAgc2VsZi5vY2N1cGFudExpc3RlbmVyKHNlbGYub2NjdXBhbnRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm9vbVJlZi5vbihcImNoaWxkX3JlbW92ZWRcIiwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIHZhciByZW1vdGVJZCA9IGRhdGEua2V5O1xuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcmVtb3RlSWQgPT09IHNlbGYubG9jYWxJZCB8fFxuICAgICAgICAgICAgcmVtb3RlSWQgPT09IFwidGltZXN0YW1wXCIgfHxcbiAgICAgICAgICAgIHNlbGYucGVlcnNbcmVtb3RlSWRdID09PSB1bmRlZmluZWRcbiAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICBkZWxldGUgc2VsZi5wZWVyc1tyZW1vdGVJZF07XG4gICAgICAgICAgZGVsZXRlIHNlbGYub2NjdXBhbnRzW3JlbW90ZUlkXTtcblxuICAgICAgICAgIHNlbGYub2NjdXBhbnRMaXN0ZW5lcihzZWxmLm9jY3VwYW50cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGYuY29ubmVjdFN1Y2Nlc3Moc2VsZi5sb2NhbElkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvdWxkU3RhcnRDb25uZWN0aW9uVG8oY2xpZW50KSB7XG4gICAgcmV0dXJuICh0aGlzLm15Um9vbUpvaW5UaW1lIHx8IDApIDw9IChjbGllbnQgPyBjbGllbnQucm9vbUpvaW5UaW1lIDogMCk7XG4gIH1cblxuICBzdGFydFN0cmVhbUNvbm5lY3Rpb24oY2xpZW50SWQpIHtcbiAgICAvLyBIYW5kbGVkIGJ5IFdlYlJ0Y1BlZXJcbiAgfVxuXG4gIGNsb3NlU3RyZWFtQ29ubmVjdGlvbihjbGllbnRJZCkge1xuICAgIC8vIEhhbmRsZWQgYnkgV2ViUnRjUGVlclxuICB9XG5cbiAgc2VuZERhdGEoY2xpZW50SWQsIGRhdGFUeXBlLCBkYXRhKSB7XG4gICAgdGhpcy5wZWVyc1tjbGllbnRJZF0uc2VuZChkYXRhVHlwZSwgZGF0YSk7XG4gIH1cblxuICBzZW5kRGF0YUd1YXJhbnRlZWQoY2xpZW50SWQsIGRhdGFUeXBlLCBkYXRhKSB7XG4gICAgdmFyIGNsb25lZERhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB2YXIgZW5jb2RlZERhdGEgPSBmaXJlYmFzZUtleUVuY29kZS5kZWVwRW5jb2RlKGNsb25lZERhdGEpO1xuICAgIHRoaXMuZmlyZWJhc2VBcHBcbiAgICAgIC5kYXRhYmFzZSgpXG4gICAgICAucmVmKHRoaXMuZ2V0RGF0YVBhdGgodGhpcy5sb2NhbElkKSlcbiAgICAgIC5zZXQoe1xuICAgICAgICB0bzogY2xpZW50SWQsXG4gICAgICAgIHR5cGU6IGRhdGFUeXBlLFxuICAgICAgICBkYXRhOiBlbmNvZGVkRGF0YVxuICAgICAgfSk7XG4gIH1cblxuICBicm9hZGNhc3REYXRhKGRhdGFUeXBlLCBkYXRhKSB7XG4gICAgZm9yICh2YXIgY2xpZW50SWQgaW4gdGhpcy5wZWVycykge1xuICAgICAgaWYgKHRoaXMucGVlcnMuaGFzT3duUHJvcGVydHkoY2xpZW50SWQpKSB7XG4gICAgICAgIHRoaXMuc2VuZERhdGEoY2xpZW50SWQsIGRhdGFUeXBlLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBicm9hZGNhc3REYXRhR3VhcmFudGVlZChkYXRhVHlwZSwgZGF0YSkge1xuICAgIGZvciAodmFyIGNsaWVudElkIGluIHRoaXMucGVlcnMpIHtcbiAgICAgIGlmICh0aGlzLnBlZXJzLmhhc093blByb3BlcnR5KGNsaWVudElkKSkge1xuICAgICAgICB0aGlzLnNlbmREYXRhR3VhcmFudGVlZChjbGllbnRJZCwgZGF0YVR5cGUsIGRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvbm5lY3RTdGF0dXMoY2xpZW50SWQpIHtcbiAgICB2YXIgcGVlciA9IHRoaXMucGVlcnNbY2xpZW50SWRdO1xuXG4gICAgaWYgKHBlZXIgPT09IHVuZGVmaW5lZCkgcmV0dXJuIE5BRi5hZGFwdGVycy5OT1RfQ09OTkVDVEVEO1xuXG4gICAgc3dpdGNoIChwZWVyLmdldFN0YXR1cygpKSB7XG4gICAgICBjYXNlIFdlYlJ0Y1BlZXIuSVNfQ09OTkVDVEVEOlxuICAgICAgICByZXR1cm4gTkFGLmFkYXB0ZXJzLklTX0NPTk5FQ1RFRDtcblxuICAgICAgY2FzZSBXZWJSdGNQZWVyLkNPTk5FQ1RJTkc6XG4gICAgICAgIHJldHVybiBOQUYuYWRhcHRlcnMuQ09OTkVDVElORztcblxuICAgICAgY2FzZSBXZWJSdGNQZWVyLk5PVF9DT05ORUNURUQ6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gTkFGLmFkYXB0ZXJzLk5PVF9DT05ORUNURUQ7XG4gICAgfVxuICB9XG5cbiAgZ2V0TWVkaWFTdHJlYW0oY2xpZW50SWQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJJbnRlcmZhY2UgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZDogZ2V0TWVkaWFTdHJlYW1cIik7XG4gIH1cblxuICAvKlxuICAgKiBQcml2YXRlc1xuICAgKi9cblxuICBpbml0RmlyZWJhc2UoY2FsbGJhY2spIHtcbiAgICB0aGlzLmZpcmViYXNlQXBwID0gdGhpcy5maXJlYmFzZS5pbml0aWFsaXplQXBwKFxuICAgICAge1xuICAgICAgICBhcGlLZXk6IHRoaXMuYXBpS2V5LFxuICAgICAgICBhdXRoRG9tYWluOiB0aGlzLmF1dGhEb21haW4sXG4gICAgICAgIGRhdGFiYXNlVVJMOiB0aGlzLmRhdGFiYXNlVVJMXG4gICAgICB9LFxuICAgICAgdGhpcy5hcHBJZFxuICAgICk7XG5cbiAgICB0aGlzLmF1dGgodGhpcy5hdXRoVHlwZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgYXV0aCh0eXBlLCBjYWxsYmFjaykge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcIm5vbmVcIjpcbiAgICAgICAgdGhpcy5hdXRoTm9uZShjYWxsYmFjayk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiYW5vbnltb3VzXCI6XG4gICAgICAgIHRoaXMuYXV0aEFub255bW91cyhjYWxsYmFjayk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBUT0RPOiBzdXBwb3J0IG90aGVyIGF1dGggdHlwZVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgTkFGLmxvZy5sb2coXCJGaXJlYmFzZVdlYlJ0Y0ludGVyZmFjZS5hdXRoOiBVbmtub3duIGF1dGhUeXBlIFwiICsgdHlwZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGF1dGhOb25lKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gYXN5bmNocm9ub3VzbHkgaW52b2tlcyBvcGVuIGxpc3RlbmVycyBmb3IgdGhlIGNvbXBhdGliaWxpdHkgd2l0aCBvdGhlciBhdXRoIHR5cGVzLlxuICAgIC8vIFRPRE86IGdlbmVyYXRlIG5vdCBqdXN0IHJhbmRvbSBidXQgYWxzbyB1bmlxdWUgaWRcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICBjYWxsYmFjayhzZWxmLnJhbmRvbVN0cmluZygpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGF1dGhBbm9ueW1vdXMoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGZpcmViYXNlQXBwID0gdGhpcy5maXJlYmFzZUFwcDtcblxuICAgIGZpcmViYXNlQXBwXG4gICAgICAuYXV0aCgpXG4gICAgICAuc2lnbkluQW5vbnltb3VzbHkoKVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIE5BRi5sb2cuZXJyb3IoXCJGaXJlYmFzZVdlYlJ0Y0ludGVyZmFjZS5hdXRoQW5vbnltb3VzOiBcIiArIGVycm9yKTtcbiAgICAgICAgc2VsZi5jb25uZWN0RmFpbHVyZShudWxsLCBlcnJvcik7XG4gICAgICB9KTtcblxuICAgIGZpcmViYXNlQXBwLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoZnVuY3Rpb24odXNlcikge1xuICAgICAgaWYgKHVzZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2FsbGJhY2sodXNlci51aWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLypcbiAgICogcmVhbHRpbWUgZGF0YWJhc2UgbGF5b3V0XG4gICAqXG4gICAqIC9yb290UGF0aC9hcHBJZC9yb29tSWQvXG4gICAqICAgLSAvdXNlcklkL1xuICAgKiAgICAgLSB0aW1lc3RhbXA6IGpvaW5pbmcgdGhlIHJvb20gdGltZXN0YW1wXG4gICAqICAgICAtIHNpZ25hbDogdXNlZCB0byBzZW5kIHNpZ25hbFxuICAgKiAgICAgLSBkYXRhOiB1c2VkIHRvIHNlbmQgZ3VhcmFudGVlZCBkYXRhXG4gICAqICAgLSAvdGltZXN0YW1wLzogd29ya2luZyBwYXRoIHRvIGdldCB0aW1lc3RhbXBcbiAgICogICAgIC0gdXNlcklkOlxuICAgKi9cblxuICBnZXRSb290UGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5yb290UGF0aDtcbiAgfVxuXG4gIGdldEFwcFBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Um9vdFBhdGgoKSArIFwiL1wiICsgdGhpcy5hcHBJZDtcbiAgfVxuXG4gIGdldFJvb21QYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmdldEFwcFBhdGgoKSArIFwiL1wiICsgdGhpcy5yb29tSWQ7XG4gIH1cblxuICBnZXRVc2VyUGF0aChpZCkge1xuICAgIHJldHVybiB0aGlzLmdldFJvb21QYXRoKCkgKyBcIi9cIiArIGlkO1xuICB9XG5cbiAgZ2V0U2lnbmFsUGF0aChpZCkge1xuICAgIHJldHVybiB0aGlzLmdldFVzZXJQYXRoKGlkKSArIFwiL3NpZ25hbFwiO1xuICB9XG5cbiAgZ2V0RGF0YVBhdGgoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRVc2VyUGF0aChpZCkgKyBcIi9kYXRhXCI7XG4gIH1cblxuICBnZXRUaW1lc3RhbXBHZW5lcmF0aW9uUGF0aChpZCkge1xuICAgIHJldHVybiB0aGlzLmdldFJvb21QYXRoKCkgKyBcIi90aW1lc3RhbXAvXCIgKyBpZDtcbiAgfVxuXG4gIHJhbmRvbVN0cmluZygpIHtcbiAgICB2YXIgc3RyaW5nTGVuZ3RoID0gMTY7XG4gICAgdmFyIGNoYXJzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hUWmFiY2RlZmdoaWtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XCI7XG4gICAgdmFyIHN0cmluZyA9IFwiXCI7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZ0xlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKTtcbiAgICAgIHN0cmluZyArPSBjaGFycy5zdWJzdHJpbmcocmFuZG9tTnVtYmVyLCByYW5kb21OdW1iZXIgKyAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgZ2V0VGltZXN0YW1wKGNhbGxiYWNrKSB7XG4gICAgdmFyIGZpcmViYXNlQXBwID0gdGhpcy5maXJlYmFzZUFwcDtcbiAgICB2YXIgcmVmID0gZmlyZWJhc2VBcHBcbiAgICAgIC5kYXRhYmFzZSgpXG4gICAgICAucmVmKHRoaXMuZ2V0VGltZXN0YW1wR2VuZXJhdGlvblBhdGgodGhpcy5sb2NhbElkKSk7XG4gICAgcmVmLnNldCh0aGlzLmZpcmViYXNlLmRhdGFiYXNlLlNlcnZlclZhbHVlLlRJTUVTVEFNUCk7XG4gICAgcmVmLm9uY2UoXCJ2YWx1ZVwiLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICB2YXIgdGltZXN0YW1wID0gZGF0YS52YWwoKTtcbiAgICAgIHJlZi5yZW1vdmUoKTtcbiAgICAgIGNhbGxiYWNrKHRpbWVzdGFtcCk7XG4gICAgfSk7XG4gICAgcmVmLm9uRGlzY29ubmVjdCgpLnJlbW92ZSgpO1xuICB9XG5cbiAgdXBkYXRlVGltZU9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJlYmFzZUFwcFxuICAgICAgLmRhdGFiYXNlKClcbiAgICAgIC5yZWYoXCIvLmluZm8vc2VydmVyVGltZU9mZnNldFwiKVxuICAgICAgLm9uY2UoXCJ2YWx1ZVwiKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHZhciB0aW1lT2Zmc2V0ID0gZGF0YS52YWwoKTtcblxuICAgICAgICB0aGlzLnNlcnZlclRpbWVSZXF1ZXN0cysrO1xuXG4gICAgICAgIGlmICh0aGlzLnNlcnZlclRpbWVSZXF1ZXN0cyA8PSAxMCkge1xuICAgICAgICAgIHRoaXMudGltZU9mZnNldHMucHVzaCh0aW1lT2Zmc2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRpbWVPZmZzZXRzW3RoaXMuc2VydmVyVGltZVJlcXVlc3RzICUgMTBdID0gdGltZU9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXZnVGltZU9mZnNldCA9XG4gICAgICAgICAgdGhpcy50aW1lT2Zmc2V0cy5yZWR1Y2UoKGFjYywgb2Zmc2V0KSA9PiAoYWNjICs9IG9mZnNldCksIDApIC9cbiAgICAgICAgICB0aGlzLnRpbWVPZmZzZXRzLmxlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJUaW1lUmVxdWVzdHMgPiAxMCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVUaW1lT2Zmc2V0KCksIDUgKiA2MCAqIDEwMDApOyAvLyBTeW5jIGNsb2NrIGV2ZXJ5IDUgbWludXRlcy5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVPZmZzZXQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBnZXRTZXJ2ZXJUaW1lKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHRoaXMuYXZnVGltZU9mZnNldDtcbiAgfVxufVxuXG5OQUYuYWRhcHRlcnMucmVnaXN0ZXIoXCJmaXJlYmFzZVwiLCBGaXJlYmFzZVdlYlJ0Y0FkYXB0ZXIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpcmViYXNlV2ViUnRjQWRhcHRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=
