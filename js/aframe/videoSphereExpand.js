AFRAME.registerComponent('videosphereexpand', {
  init: function () {
    let videosource = document.querySelector('#spherevidclip')
    let videosphere = document.querySelector('#videosphereentity')
    let homeworldelements = document.querySelectorAll('.homeworld')

    let videosphereloader = () => {
      videosource.play()
      videosphere.setAttribute('radius', '4200')
      homeworldelements.forEach((homeworldelement) => {
        homeworldelements.setAttribute('visible', false)
      })
    }
  },
})
