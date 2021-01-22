<template>
  <div>
    <a-scene>
      <a-entity
        sharedspace="audio: true; provider: http://localhost:3000"
        avatars
      >
        <a-box position="0 0 -3" color="#ff00ff"></a-box>
      </a-entity>
    </a-scene>
    <template>
      <a-sphere radius="0.1"></a-sphere>
    </template>
  </div>
</template>

<script>
require('./index.js')
export default {
  name: 'shared-spaces',
  mounted() {
    var scene = document.querySelector('a-scene')

    ;(function start() {
      if (!scene.hasLoaded) {
        scene.addEventListener('loaded', start)
        return
      }

      var prefix = window.location.host.split('.')[0] + '-'
      var currentUrl = new URL(window.location)
      var roomName = currentUrl.search.substr(1)

      if (!roomName) {
        roomName = prefix + Date.now()
        currentUrl.search = roomName
        history.pushState({}, '', currentUrl.href)
      }

      var room = document.querySelector('[sharedspace]')
      room.addEventListener('avataradded', function onAdded(evt) {
        var avatar = evt.detail.avatar
        if (!avatar.hasLoaded) {
          avatar.addEventListener('loaded', onAdded.bind(null, evt))
          return
        }

        var avatarY = avatar.getAttribute('position').y
        avatar.object3D.lookAt(new THREE.Vector3(0, avatarY, 0))

        var radToDeg = THREE.Math.radToDeg
        var rotation = avatar.object3D.rotation
        rotation.y += Math.PI

        avatar.setAttribute('rotation', {
          x: radToDeg(rotation.x),
          y: radToDeg(rotation.y),
          z: radToDeg(rotation.z)
        })
      })
      room.setAttribute('sharedspace', { room: roomName, hold: false })
    })()
  }
}
</script>

<style></style>
