AFRAME.registerComponent('networked-audio-source', {
  init: function () {
    this.cam = document.getElementById('cameraRig')
    this.sphere = this.el
    this.id = this.sphere.getAttribute('id')
    this.class = this.sphere.getAttribute('class')
    console.log('CLASS', this.class)
    this.cylinderPlayer = document.getElementById('cylinderPlayer')
    this.idSplit = this.el.id.split('-')
    this.avatar = document.getElementById('tar' + this.idSplit[1])
    this.sound = true
  },
  tick: function () {
    let avatarPos = this.avatar.object3D.position
    let camPos = this.cam.object3D.position
    let distance = camPos.distanceTo(avatarPos)
    let cylinderPlayer = this.cylinderPlayer

    if (distance < 5) {
      if (!this.sound) {
        this.sound = true
      }

      if (this.sphere.components) {
        if (this.sphere.components.sound) {
          this.sphere.components.sound.playSound()
        }
      }

      if (cylinderPlayer) {
        if (cylinderPlayer.components) {
          if (cylinderPlayer.components.sound) {
            cylinderPlayer.components.sound.stopSound()
          }
        }
      }
    } else {
      if (this.sound) {
        this.sound = false
      }

      if (cylinderPlayer) {
        if (cylinderPlayer.components) {
          if (cylinderPlayer.components.sound) {
            cylinderPlayer.components.sound.playSound()
          }
        }
      }

      if (this.sphere.components) {
        if (this.sphere.components.sound) {
          this.sphere.components.sound.stopSound()
        }
      }
    }
  },
})
