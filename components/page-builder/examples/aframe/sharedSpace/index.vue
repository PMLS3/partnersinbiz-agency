<template>
  <div>
    <a-scene>
      <a-assets>
        <a-mixin
          id="user"
          visible="false"
          look-controls
          wasd-controls
          share="position, rotation"
        ></a-mixin>
      </a-assets>
      <a-entity sharedspace="hold: true; audio: true" avatars="onmyself: user">
        <a-entity environment="preset: forest"></a-entity>
      </a-entity>
    </a-scene>
    <section>
      <a-entity>
        <a-sphere radius="0.1" color="#ffffff"></a-sphere>
        <a-sphere
          position="0.05 0.03 -0.08"
          radius="0.02"
          segments-width="8"
          segments-height="8"
          color="#000000"
        ></a-sphere>
        <a-sphere
          position="-0.05 0.03 -0.08"
          radius="0.02"
          segments-width="8"
          segments-height="8"
          color="#000000"
        ></a-sphere>
        <a-sphere
          class="themable"
          position="0 -0.07 -0.1"
          scale="1 1 0.5"
          segments-width="4"
          segments-height="4"
          radius="0.02"
          color="#11fd3e"
        ></a-sphere>
        <a-cone
          class="themable"
          position="0.03 -0.07 -0.1"
          rotation="0 0 90"
          scale="1 1 0.5"
          segments-radial="8"
          segments-height="1"
          height="0.03"
          radius-bottom="0.03"
          color="#1cff3c"
        ></a-cone>
        <a-cone
          class="themable"
          position="-0.03 -0.07 -0.1"
          rotation="0 0 -90"
          scale="1 1 0.5"
          segments-radial="8"
          segments-height="1"
          height="0.03"
          radius-bottom="0.03"
          color="#1cff3c"
        ></a-cone>
      </a-entity>
    </section>
  </div>
</template>

<script>
export default {
  name: 'shared-space',
  head: {
    scripts: [
      { src: './aframe.min.js' },
      {
        src: './aframe-shared-space.js'
      },
      {
        src: './aframe-enviroment.js'
      }
    ]
  },
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
        roomName = prefix + 'Date.now()'
        currentUrl.search = roomName
        history.pushState({}, '', currentUrl.href)
      }

      var room = document.querySelector('[sharedspace]')
      room.addEventListener('avataradded', function onAdded(evt) {
        var presets = [
          'contact',
          'egypt',
          'checkerboard',
          'forest',
          'goaland',
          'yavapai',
          'goldmine',
          'threetowers',
          'poison',
          'arches',
          'tron',
          'japan',
          'dream',
          'volcano',
          'starry',
          'osiris'
        ]
        var environment = document.querySelector('[environment]')

        function setEnvironment(preset) {
          environment.setAttribute('environment', { preset: preset })
        }

        function getNextPreset() {
          var currentPreset = environment.getAttribute('environment').preset
          var index = presets.indexOf(currentPreset)
          return presets[(index + 1) % presets.length]
        }
        window.addEventListener('keydown', function(evt) {
          if (evt.keyCode === 32 /* spacebar */) {
            var preset = getNextPreset()
            setEnvironment(preset)
            room.components.sharedspace.send('*', {
              type: 'environment',
              preset: preset
            })
          }
        })

        room.addEventListener('participantmessage', function(evt) {
          if (evt.detail.message.type === 'environment') {
            var preset = evt.detail.message.preset
            setEnvironment(preset)
          }
        })

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
