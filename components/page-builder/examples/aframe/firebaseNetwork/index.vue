<template>
  <a-scene
    networked-scene="
    room: firebase;
    debug: true;
    adapter: firebase;
  "
  >
    <a-assets>
      <img
        id="grid"
        src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png"
        crossorigin="anonymous"
      />
      <img
        id="sky"
        src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg"
        crossorigin="anonymous"
      />

      <template id="avatar-template">
        <a-entity class="avatar" networked-audio-source>
          <a-sphere
            class="head"
            color="#5985ff"
            scale="0.45 0.5 0.4"
            random-color
          ></a-sphere>
          <a-entity class="face" position="0 0.05 0">
            <a-sphere
              class="eye"
              color="#efefef"
              position="0.16 0.1 -0.35"
              scale="0.12 0.12 0.12"
            >
              <a-sphere
                class="pupil"
                color="#000"
                position="0 0 -1"
                scale="0.2 0.2 0.2"
              ></a-sphere>
            </a-sphere>
            <a-sphere
              class="eye"
              color="#efefef"
              position="-0.16 0.1 -0.35"
              scale="0.12 0.12 0.12"
            >
              <a-sphere
                class="pupil"
                color="#000"
                position="0 0 -1"
                scale="0.2 0.2 0.2"
              ></a-sphere>
            </a-sphere>
          </a-entity>
        </a-entity>
      </template>
    </a-assets>

    <a-entity
      id="player"
      networked="template:#avatar-template;attachTemplateToLocal:false;"
      camera
      position="0 1.3 0"
      wasd-controls
      look-controls
    >
    </a-entity>

    <a-entity
      position="0 0 0"
      geometry="primitive: plane; width: 10000; height: 10000;"
      rotation="-90 0 0"
      material="src: #grid; repeat: 10000 10000; transparent: true; metalness:0.6; roughness: 0.4; sphericalEnvMap: #sky;"
    ></a-entity>

    <a-entity
      light="color: #ccccff; intensity: 1; type: ambient;"
      visible=""
    ></a-entity>
    <a-entity
      light="color: #ffaaff; intensity: 1.5"
      position="5 5 5"
    ></a-entity>

    <a-sky src="#sky" rotation="0 -90 0"></a-sky>
    <a-entity id="particles" particle-system="preset: snow"></a-entity>
  </a-scene>
</template>

<script>
import firebase from 'firebase'
import { setVM } from './naf-firebase-adapter.js'
if (process.client) {
  require('./naf-firebase-adapter.js')
}
export default {
  name: 'firebase-network',
  head: {
    script: [
      {
        src: 'https://aframe.io/releases/1.0.4/aframe.min.js'
      },
      {
        src: 'https://unpkg.com/networked-aframe/dist/networked-aframe.min.js'
      },

      {
        src: 'https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js'
      },
      {
        src: 'https://www.gstatic.com/firebasejs/7.13.1/firebase-auth.js'
      },
      {
        src: 'https://www.gstatic.com/firebasejs/7.13.1/firebase-database.js'
      },
      {
        src:
          'https://unpkg.com/aframe-randomizer-components@^3.0.2/dist/aframe-randomizer-components.min.js'
      },
      {
        src:
          'https://unpkg.com/aframe-particle-system-component@1.1.3/dist/aframe-particle-system-component.min.js'
      }
    ]
  },
  created() {
    setVM(this, firebase)
    console.log('freibase3', firebase)
    console.log('config', this.$fire)
    // if (process.client) {
    //   window.firebaseConfig = {
    //     authType: 'none',
    //     apiKey: 'AIzaSyDgWjG8-BvI9crK5Yw2FURpVFOoZilE3_c',
    //     authDomain: 'test-6a8f9.firebaseapp.com',
    //     databaseURL: 'https://test-6a8f9.firebaseio.com',
    //     projectId: 'test-6a8f9',
    //     storageBucket: 'test-6a8f9.appspot.com',
    //     messagingSenderId: '917819406042',
    //     appId: '1:917819406042:web:72b3f9873bbaf9e05ad7e3',
    //     measurementId: 'G-7SRMTNSWYE'
    //   }
    // }
  },
  mounted() {
    // Define custom schema for syncing avatar color, set by random-color
    NAF.schemas.add({
      template: '#avatar-template',
      components: [
        'position',
        'rotation',
        {
          selector: '.head',
          component: 'material',
          property: 'color'
        }
      ]
    })
    // Called by Networked-Aframe when connected to server
    function onConnect() {
      NAF.log.write('onConnect', new Date())
      console.log('here')
    }

    // On mobile remove elements that are resource heavy
    var isMobile = AFRAME.utils.device.isMobile()
    if (isMobile) {
      var particles = document.getElementById('particles')
      particles.parentNode.removeChild(particles)
    }
  }
}
</script>

<style>
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}

@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>
