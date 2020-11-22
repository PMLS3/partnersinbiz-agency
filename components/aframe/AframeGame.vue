<template>
  <div class="relative w-screen h-screen">
    <SideChat :active="side_chat.active" />

    <a-scene cursor="rayOrigin: mouse" raycaster="objects: .clickable">
      <a-assets>
        <!-- load in characters -->
        <a-asset-item
          :id="char.character"
          :src="char.url"
          v-for="(char, index) in characters"
          :key="index"
        ></a-asset-item>

        <!-- Games Assets -->
        <a-asset-item
          id="ground"
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FMaldive%20Island%20only%20floor.glb?v=1604387763124"
        ></a-asset-item>
        <a-asset-item
          id="tent"
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FTent.glb?v=1604348134477"
        ></a-asset-item>

        <a-asset-item
          id="phoenix"
          response-type="arraybuffer"
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fphoenix.glb?v=1604307799588"
        ></a-asset-item>

        <a-asset-item
          id="palmT"
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fpalm1.glb?v=1604033480144"
        ></a-asset-item>
        <a-asset-item
          id="palm1"
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FpalmT.glb?v=1604033998689"
        ></a-asset-item>

        <img
          id="bordeauxtheater"
          src="https://cdn.glitch.com/f2ee9d74-9726-4bed-9c30-2d49d6391dee%2FOp%C3%A9ra_National_de_Bordeaux%20(1).jpg?1547235572572"
        />

        <img id="playerAvatar" :src="player.avatar" />
      </a-assets>
      <!-- <a-box
        position="-1 0.5 -3"
        rotation="0 45 0"
        shadow
        material="src: #webcam"
      ></a-box> -->

      <!-- Players -->
      <a-entity
        v-for="player in players"
        :key="player.id"
        :id="player.id"
        gltf-model="#Remy"
        :position="player.position"
        :rotation="player.rotation"
        scale="0.4 0.4 0.4"
        :animation-mixer="`clip: ${player.animation}`"
      ></a-entity>
      <!-- Island Base -->
      <a-entity
        gltf-model="#ground"
        id="floor"
        position="0 0.01 0"
        rotation="0 90 0"
      ></a-entity>

      <!-- Extra Palm Trees -->
      <a-entity
        gltf-model="palm1"
        id="palm"
        position="103.65511 3.48103 -16"
        scale=""
      ></a-entity>

      <a-entity
        gltf-model="#palmT"
        id="palm1"
        position="56 11.5 -104.04728"
        scale="4 4 4"
      ></a-entity>

      <a-entity
        gltf-model="#palmT"
        id="palm2"
        position="18.97169 11.5 -103.04728"
        scale="4.4 4.4 4.4"
        rotation="0 90 0"
      ></a-entity>
      <a-entity
        gltf-model="#palmT"
        id="palm3"
        position="-4.97169 11.5 -104.5"
        scale="4 4 4"
        rotation="0 180 0"
      ></a-entity>

      <a-entity
        gltf-model="#palmT"
        id="palm4"
        position="-42.97169 11.5 -104.04728"
        scale="4.2 4.2 4.2"
      ></a-entity>

      <a-entity
        gltf-model="#palmT"
        id="palm5"
        position="-70.97169 11.5 -103.04728"
        scale="3.8 3.8 3.8"
        rotation="0 105 0"
      ></a-entity>
      <a-entity
        gltf-model="#palmT"
        id="palm6"
        position="-4.97169 11.5 -104.5"
        scale="4 4 4 "
        rotation="0 205 0"
      ></a-entity>

      <a-entity
        gltf-model="#palmT"
        id="palm7"
        scale="4 4 4 "
        position="70.21286 11.5 -30.42248"
      ></a-entity>

      <a-entity
        id="island"
        gltf-model="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2FMaldive%20Island%20no%20ocean%20no%20tents%20no%20floor.glb?v=1604387757783"
        position="0 0.01 0"
        rotation="0 90 0"
      ></a-entity>
      <a-entity
        id="tent-front-left"
        gltf-model="#tent"
        position="-30.26383 0 -36.29182"
        rotation="0 90 0"
      ></a-entity>

      <a-entity
        id="tent-mid-left"
        gltf-model="#tent"
        position="-17.90763 0 -45.77011"
        rotation="0 90 0"
      ></a-entity>

      <a-entity
        id="tent-back-left"
        gltf-model="#tent"
        position="-8.91725 0 -56.89725"
        rotation="0 90 0"
      ></a-entity>

      <a-entity
        id="tent-front-right"
        gltf-model="#tent"
        position="32.73734 0 -36.29182"
        rotation="0 90 0"
      ></a-entity>

      <a-entity
        id="tent-mid-right"
        gltf-model="#tent"
        position="21.09222 0 -45.77011"
        rotation="0 90 0"
      ></a-entity>

      <a-entity
        id="tent-back-right"
        gltf-model="#tent"
        position="10.02697 0 -56.84897"
        rotation="0 90 0"
      ></a-entity>
      <a-entity
        position="0 12 -40"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear;"
      >
        <a-entity
          id="phoenix-bird"
          gltf-model="#phoenix"
          position="30 0 0"
          scale="0.02 0.02 0.02"
          rotation=" 0 65 0"
          animation-mixer
        ></a-entity>
      </a-entity>
      <a-entity light="" position="0 1.7 1.34" id="light"></a-entity>
      <a-entity
        geometry="primitive: circle; radius: 7.6"
        material="side: double; color: #89cffa"
        position="-51.52631 1.66062 -68.11057"
        id="pool-water"
        rotation="90 0 0"
        scale=""
      ></a-entity>
      <a-ocean
        color="#49659F"
        width="500"
        depth="500"
        density="5"
        position="0 -0.1 0 "
        speed="4"
        ocean=""
        id="ocean"
      ></a-ocean>
      <a-entity light="type: ambient; intensity: 0.25;"></a-entity>
      <a-entity
        light="type: directional;
                   castShadow: true;
                   intensity: 1;
                  "
        position="-41.97169 11.5 -140.5"
      ></a-entity>
      <a-sky
        color="#6EBAA7"
        src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fseaisland.jpg?v=1604306439573"
      ></a-sky>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="0 0.5 0"
        teleport
        visible=""
        material="color: #964B00"
        scale="35 0 141"
        id="collision-world"
      ></a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="-39.79431 1.66062 -70.39625"
        class="collision"
        visible="false"
        material="color: #964B00"
        scale="4.41 0. 37.25"
        id="collision-pool"
      ></a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="-30.26383 0.5 -36.29182"
        class="collision"
        visible="false"
        material="color: #964B00"
        scale="0.73272 0.00001 6.47842"
        id="collision-house-left-front"
      ></a-entity>

      <a-entity
        geometry="width: 10; height: 0.11"
        position="-17.90763 0.5 -45.77011"
        class="collision"
        visible="false"
        material="color: #964B00"
        scale="0.73 0.00001 6.5"
        id="collision-house-mid-left-front"
      ></a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="-8.91725 0.5 -56.89725"
        class="collision"
        visible="false"
        material="color: #964B00"
        scale="0.73 0.00001 6.5"
        id="collision-house-back-left-front"
      ></a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="32.73734 0.5 -36.29182"
        class="collision"
        visible="false"
        material="color: #964B00"
        scale="0.73272 0.00001 6.47842"
        id="collision-house-rigth-front"
      ></a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="21.09222 0.5 -45.77011"
        class="collision"
        visible="false"
        material="color: #964B00"
        scale="0.73 0.00001 6.5"
        id="collision-house-mid-right"
      ></a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="10.02697 0.5 -56.84897"
        class="collision"
        visible="false"
        material="color: #964B00"
        scale="0.73 0.00001 6.5"
        id="collision-house-back-right"
      ></a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="23.66567 0.5 -71.66376"
        class="collision"
        visible="false"
        material="color: #964B00"
        scale="2.50433 0.00001 11.04274"
        id="collision-mid-house"
      ></a-entity>
      <a-entity
        geometry="width: 10; height: 0.11"
        position="-0.16943 0.5 -86.53222"
        class="collision"
        visible="false"
        material="color: #964B00"
        scale="2.4943 0.00001 15.20399"
        id="collision-bar-house"
      ></a-entity>

      <!-- ******************************************************************
		IMPORTANT: This code has to be placed at the bottom of the HTML markup
				   because of A-Frame's order-dependent rendering.
		******************************************************************* -->
      <!-- CAMERA RIG -->
      <!-- camera rig -->
      <!-- <a-entity
        id="cameraRig"
        camera-listener
        cursor-teleport="cameraRig: #cameraRig; cameraHead: #head; collisionEntities: .collision; ignoreEntities: .clickable"
      >
        <a-entity
          id="head"
          position="0 2.2 0"
          camera
         look-controls
          wasd-controls
        >
          <a-sphere
            event-set__enter="_event: mouseenter; color: #026fc9"
            event-set__leave="_event: mouseleave; color: #4CC3D9"
            position="0 -1 -2.5"
            radius=".1"
            src="#bordeauxtheater"
            anonymous
            animation="property: rotation; to: 0 360 0; easing: easeInOutSine; dur: 30000; loop: true; elasticity: 0"
          ></a-sphere>

          <a-sphere
            position="-0.3 -1 -2.5"
            radius=".1"
            src="#bordeauxtheater"
            anonymous
            animation="property: rotation; to: 0 360 0; easing: easeInOutSine; dur: 30000; loop: true; elasticity: 0"
            @click="sphereClick()"
          ></a-sphere>

          <a-sphere
            position="0.3 -1 -2.5"
            radius=".1"
            src="#bordeauxtheater"
            anonymous
            animation="property: rotation; to: 0 360 0; easing: easeInOutSine; dur: 30000; loop: true; elasticity: 0"
          ></a-sphere>
          
          <a-entity
            id="character"
            gltf-model="#Remy"
            position="0 -1.6 0"
            rotation="0 180 0"
            scale="0.4 0.4 0.4"
            :animation-mixer="`clip: ${action}`"
          ></a-entity>
          <a-cursor raycaster="objects: .clickable, cursor="rayOrigin: mouse""></a-cursor>
        </a-entity>
      </a-entity> -->
      <!-- camera rig -->

      <a-entity
        id="camera"
        position="0 1.6 0"
        camera
        look-controls
        wasd-controls
      >
        <a-sphere
          event-set__enter="_event: mouseenter; color: #026fc9"
          event-set__leave="_event: mouseleave; color: "
          position="-0.55 -1 -1.5"
          radius=".1"
          rotation="-35 0 0"
          anonymous
        ></a-sphere>

        <a-sphere
          event-set__enter="_event: mouseenter; color: #026fc9"
          event-set__leave="_event: mouseleave; color: "
          position="-0.2 -1 -1.5"
          radius=".1"
          anonymous
          src="#playerAvatar"
          material="color: white"
          id="message-button"
          animation="property: rotation; to: 0 360 0; easing: easeInOutSine; dur: 30000; loop: true; elasticity: 0"
        ></a-sphere>
        <a-sphere
          event-set__enter="_event: mouseenter; color: #026fc9"
          event-set__leave="_event: mouseleave; color: "
          position="0.2 -1 -1.5"
          radius=".1"
          src="#bordeauxtheater"
          id="speed-button"
          animation="property: rotation; to: 0 360 0; easing: easeInOutSine; dur: 30000; loop: true; elasticity: 0"
        ></a-sphere>

        <a-sphere
          event-set__enter="_event: mouseenter; color: #026fc9"
          event-set__leave="_event: mouseleave; color: "
          position="0.55 -1 -1.5"
          radius=".1"
          rotation="-8.6 -100 42.4"
          src="https://cdn.glitch.com/4bdb3f56-b261-46a4-8bf3-8c065554a3ff%2Fundraw_message_sent_1030.png?v=1604419622674"
          material=""
          geometry=""
          test
          id="message-button"
          animation="property: rotation; to: 0 360 0; easing: easeInOutSine; dur: 30000; loop: true; elasticity: 0"
        ></a-sphere>
        <!-- <a-entity cursor="rayOrigin: mouse"></a-entity> -->
      </a-entity>
      <a-entity
        id="mouseCursor"
        class="controller"
        cursor="rayOrigin: mouse"
      ></a-entity>
      <!-- <a-entity
        id="hand"
       
      ></a-entity> -->
      <!-- <a-entity
        id="mouseCursor"
        class="controller"
        laser-controls="hand: left"
        raycaster="objects: .hittable; far: 0.2"
        line="color: #000000"
        cursor="rayOrigin: mouse"
      ></a-entity>
      <a-entity
        id="hand"
        class="controller"
        laser-controls="hand: right"
        raycaster="objects: .hittable; far: 0.2"
        line="color: #000000"
      ></a-entity> -->
      <!-- <a-entity
        id="cameraRig"
        position="0 0 0"
        cursor-teleport="cameraRig: #cameraRig; cameraHead: #head; collisionEntities: .collision; ignoreEntities: .clickable"
      >
        <a-camera
          id="camera"
          position="0 1.6 0"
          camera-listener
          extended-wasd-controls="flyEnabled: true; inputType: joystick;"
          :wasd-controls="`acceleration: ${speedState}`"
        >
          <a-entity
            id="character"
            gltf-model="#Remy"
            position="0 -1.6 -2"
            rotation="0 180 0"
            scale="0.4 0.4 0.4"
            :animation-mixer="`clip: ${action}`"
          ></a-entity>
          <a-cursor raycaster="objects: .clickable"></a-cursor>
        </a-camera>
      </a-entity> -->
      <!-- ************************************************************** -->
    </a-scene>
  </div>
</template>

<script>
if (process.client) {
  // require("./js/aframe-cursor-teleport-component.js");
  require("./components/teleport.js");
  // require("./components/test.js");
  // require("./components/messageOpen.js");
  // require("./dist/aframe-super-keyboard.min.js");
}
export default {
  props: {
    player: {
      type: Object,
      default: () => ({
        name: "Remi",
        type: "user",
        bot: "Remi"
      })
    },
    room: {
      type: Object,
      default: () => ({
        room: "HomeBase"
      })
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      action: "idle",
      movementReceived: {},
      userNumber: null,
      active: false,
      cylinders: [],
      color: "FF00FF",
      height: "1.6",
      active: false,
      disp_active: false,
      message: "",
      messages: [],
      chatMessage: "",
      newRoomName: "",
      joinedRoom: "",
      roomInfo: {},
      msgRxd: {},
      myAvatar: {},
      players: [],
      user: {},
      videoGrid: null,
      myVideo: null,
      myPeer: null,
      peers: {},
      stream: null,
      mode: "camera",
      joinedRoom: "",
      video: true,
      audio: true,
      classesToAdd: [
        "transition",
        "duration-500",
        "ease-in-out",
        "bg-blue-500",
        "hover:bg-red-500",
        "transform",
        "hover:-translate-y-1",
        "hover:scale-110",
        "moveable",
        "z-50",
        "rounded-full"
      ]
    };
  },
  watch: {
    players() {
      this.$store.commit("chat/UPDATE_CONTACTS", this.players);
    }
  },
  computed: {
    characters: function() {
      return this.$store.state.aframe.characters;
    },
    speedState() {
      return this.$store.state.aframe.speed;
    },
    side_chat() {
      return this.$store.state.app.side_chat;
    }
  },

  mounted() {
    this.socket = this.$nuxtSocket({ channel: "/aframe" });

    this.setPlayer();

    let vm = this;
    // let x;
    // let z;
    // // setStore(this.$store, this);
    // AFRAME.registerComponent("camera-listener", {
    //   tick: function() {
    //     var cameraEl = document.getElementById("camera");
    //     var pos = cameraEl.getAttribute("position");
    //     var rotation = cameraEl.getAttribute("rotation");
    //     var elCil = document.getElementById("myCil");
    //     var character = document.getElementById("character");

    //     if (elCil) {
    //       elCil.setAttribute("position", pos);
    //       elCil.setAttribute("rotation", rotation);
    //     }

    //     let payload = {
    //       pos: pos,
    //       rotation: rotation
    //     };

    //     if (x == payload.pos.x && z == payload.pos.z) {
    //       vm.$store.commit("aframe/SET_ANIMATION", "idle");
    //       character.setAttribute("animation-mixer", "clip: idle");
    //     } else {
    //       vm.$store.commit("aframe/SET_ANIMATION", "run");
    //       character.setAttribute("animation-mixer", "clip: run");
    //     }
    //     if (payload) {
    //       setTimeout(function() {
    //         setPoints(payload);
    //       }, 300);
    //     }
    //   }
    // });

    // function setPoints(data) {
    //   x = data.pos.x;
    //   z = data.pos.z;
    //   let pos = {
    //     x: data.pos.x,
    //     y: data.pos.y,
    //     z: data.pos.z
    //   };

    //   let rot = {
    //     x: data.rotation.x,
    //     y: data.rotation.y,
    //     z: data.rotation.z
    //   };

    //   // if (user) {
    //   vm.myMovement = {
    //     position: pos,
    //     rotation: rot,
    //     room: vm.room.room
    //   };

    //   let num = vm.player.uid.toString();

    //   vm.movementAvatar(vm.myMovement);
    //   vm.$store.commit("aframe/SET_LOCATION", data);
    //   // }
    // }

    // AFRAME.registerComponent("wobble-normal", {
    //   schema: {},
    //   tick: function(t) {
    //     this.el.components.material.material.normalMap.offset.x +=
    //       0.0001 * Math.sin(t / 10000);
    //     this.el.components.material.material.normalMap.offset.y +=
    //       0.0001 * Math.cos(t / 8000);
    //     this.el.components.material.material.normalScale.x =
    //       0.5 + 0.5 * Math.cos(t / 1000);
    //     this.el.components.material.material.normalScale.x =
    //       0.5 + 0.5 * Math.sin(t / 1200);
    //   }
    // });
    // AFRAME.registerPrimitive("a-ocean-plane", {
    //   defaultComponents: {
    //     geometry: {
    //       primitive: "plane",
    //       height: 10000,
    //       width: 10000
    //     },
    //     rotation: "-90 0 0",
    //     material: {
    //       shader: "super-standard",
    //       color: "#8ab39f",
    //       metalness: 1,
    //       roughness: 0.2,
    //       normalTextureRepeat: "50 50",
    //       normalTextureOffset: "0 0",
    //       normalScale: "0.5 0.5",
    //       opacity: 0.8
    //     },
    //     "wobble-normal": {}
    //   }
    // });
  },

  methods: {
    setPlayer() {
      if (this.player.uid) {
        this.userNumber = this.player.uid;
      } else {
        this.userNumber = Math.floor(Math.random() * 1000000);
      }

      this.user = {
        disp_name: this.player.disp_name,
        id: this.userNumber,
        position: "0 -1.6 -2",
        rotation: "0 180 0",
        color: this.color,
        character: this.player.character,
        url: this.player.url,
        animation: this.player.animation,
        height: this.height,
        rotation: "0 180 0"
      };
      // setUser({ room: this.room, userNumber: this.userNumber });
      this.joinDetails = { room: this.room.room, user: this.user };
      this.$store.commit("aframe/SET_AVATAR", this.joinDetails);
      this.$store.commit("multiUser/ROOM_SET", this.room);

      this.joinRoom(this.joinDetails);
      // this.startVideo();
    },

    updateMovement(data) {}
  }
};
</script>

<style></style>
