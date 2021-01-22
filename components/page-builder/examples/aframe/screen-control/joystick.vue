<template>
  <div>
    <div class="mainUI" id="uiDiv" oncontextmenu="return false;">
      <!-- top-left -->
      <div
        class="regionUI skyColor"
        style="top: 10px; left: 10px;"
        oncontextmenu="return false;"
      ></div>

      <!-- top-right -->
      <div class="regionUI" style="top: 10px; right: 10px;"></div>

      <!-- bottom-left -->
      <div class="regionUI" style="bottom: 10px; left: 10px;">
        <div class="buttonUI" style="width: 128px; opacity:0.80;">
          <img src="@/assets/images/joystick-base.png" />
          <div id="stick1" style="position: absolute; left:32px; top:32px;">
            <img src="@/assets/images/joystick-red.png" />
          </div>
        </div>
      </div>

      <!-- bottom-right -->
      <div class="regionUI baseColor" style="bottom: 10px; right: 10px;"></div>
    </div>

    <!-- 
	disable press "F" to enter fullscreen mode
	disable WASD controls attached to default camera
 -->
    <a-scene
      environment="preset: arches; shadow: true;"
      keyboard-shortcuts="enterVR: false;"
      vr-mode-ui="enabled: false;"
      screen-controls
    >
      <!-- adding in look controls; automatically sets turnEnabled/lookEnabled to false  -->
      <a-box position="0 0 3" color="#ff00ff"></a-box>
      <a-entity
        id="camera"
        camera
        look-controls
        position="0 1.6 0"
        extended-wasd-controls="flyEnabled: true; inputType: joystick;"
      >
      </a-entity>
    </a-scene>
  </div>
</template>

<script>
// if (process.client) {
// require('@/js/aframe/aframe-environment-component.min.js')
// require('@/js/aframe/joystick.js')
import { Joystick } from '@/js/aframe/joystick.js'
require('@/js/aframe/extended-wasd-controls.js')

// require('@/js/aframe/screen-controls.js')

// }

// AFRAME.registerComponent('screen-controls',
// 	{
// 		init: function ()
// 		{
//     		this.component = document.getElementById("camera").components["extended-wasd-controls"];
//     		this.joystick1 = new Joystick("stick1", 64, 8);
//     		console.log("controls initialized");
//   		},

//   		tick: function(time, deltaTime)
//   		{
//   			// console.log( joystick1.value )
//   			// console.log( this.component.movePercent )
//   			this.component.movePercent.x =  this.joystick1.value.x;
//   			this.component.movePercent.z = -this.joystick1.value.y;

//   		}
// 	});
export default {
  name: 'joystick',
  mounted() {
    if (process.client) {
      AFRAME.registerComponent('screen-controls', {
        init: function() {
          this.component = document.getElementById('camera').components[
            'extended-wasd-controls'
          ]
          this.joystick1 = new Joystick('stick1', 64, 8)
          console.log('controls initialized')
        },

        tick: function(time, deltaTime) {
          // console.log( joystick1.value )
          // console.log( this.component.movePercent )
          this.component.movePercent.x = this.joystick1.value.x
          this.component.movePercent.z = -this.joystick1.value.y
        }
      })
    }
  }
}
</script>

<style>
body {
  /* disable long press in iOS? */
  -webkit-touch-callout: none;
}

.mainUI {
  border: 0px solid pink;
  position: fixed;
  top: 0px;
  width: 99%;
  height: 99%;
  z-index: 1;
  pointer-events: none; /* allow click-through in transparent areas */
}

.regionUI {
  border: 0px solid yellow;
  position: absolute;
  display: flex;
  flex-direction: row;
  pointer-events: none;
}

.buttonUI {
  border: 0px solid lime;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: auto;
  filter: drop-shadow(0px 0px 20px white);
}

.skyColor {
  filter: hue-rotate(240deg) saturate(100%) brightness(100%)
    drop-shadow(0px 0px 20px white);
}

.baseColor {
  filter: hue-rotate(24deg) saturate(68%) brightness(100%)
    drop-shadow(0px 0px 20px white);
}

.grayColor {
  filter: hue-rotate(0deg) saturate(0%) brightness(100%)
    drop-shadow(0px 0px 20px white);
}
</style>
