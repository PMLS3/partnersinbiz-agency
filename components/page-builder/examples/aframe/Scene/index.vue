<template>
  <a-scene
    inspector=""
    keyboard-shortcuts=""
    screenshot=""
    vr-mode-ui=""
    device-orientation-permission-ui=""
    fog="far: 124; density: 0"
    id="main-scene"
    ><a-assets
      ><img id="starsky" src="/_nuxt/assets/images/panorama/park.jpeg"/>
      <img
        id="flowers"
        src="https://cdn.glitch.com/96ab1f6e-16b9-43c1-9df3-fbe9b24a7490%2Fflower%20from%20Mel.JPG?1549930217255"
        crossorigin="anonymous"/>
      <a-asset-item
        id="skullmodel"
        src="https://cdn.glitch.com/f2ee9d74-9726-4bed-9c30-2d49d6391dee%2Ftriceratops.glb?1547240293607"
        response-type="arraybuffer"
      ></a-asset-item>
      <a-asset-item
        id="truss"
        src="https://cdn.glitch.com/94360a9d-1c06-4670-ad8d-4317c4a8d7cf%2Ftruss.glb?v=1602063215600"
        response-type="arraybuffer"
      ></a-asset-item>
      <a-asset-item
        id="waiting_room_chairs"
        src="https://cdn.glitch.com/94360a9d-1c06-4670-ad8d-4317c4a8d7cf%2Fwaiting_room_chairs.glb?v=1602063243632"
        response-type="arraybuffer"
      ></a-asset-item>
      <a-asset-item
        id="tables_and_chairs"
        src="https://cdn.glitch.com/94360a9d-1c06-4670-ad8d-4317c4a8d7cf%2Ftable_and_chairs.glb?v=1602063271834"
        response-type="arraybuffer"
      ></a-asset-item>
      <a-asset-item
        id="ofc_falafel_booth"
        src="https://cdn.glitch.com/94360a9d-1c06-4670-ad8d-4317c4a8d7cf%2Focf_falafel_booth.glb?v=1602063325818"
        response-type="arraybuffer"
      ></a-asset-item>
      <a-asset-item
        id="poly_bar_table_and_booths"
        src="https://cdn.glitch.com/94360a9d-1c06-4670-ad8d-4317c4a8d7cf%2Fpoly_bar_table_and_booths.glb?v=1602063410364"
        response-type="arraybuffer"
      ></a-asset-item>
      <a-asset-item
        id="malmo_chair"
        src="https://cdn.glitch.com/94360a9d-1c06-4670-ad8d-4317c4a8d7cf%2Fmalmo_chair.glb?v=1602063423299"
        response-type="arraybuffer"
      ></a-asset-item>
      <a-asset-item
        id="amphi"
        src="https://cdn.glitch.com/94360a9d-1c06-4670-ad8d-4317c4a8d7cf%2Famphitheatre.glb?v=1602096384602"
        response-type="arraybuffer"
      ></a-asset-item>
      <audio
        id="song"
        src="https://cdn.glitch.com/96ab1f6e-16b9-43c1-9df3-fbe9b24a7490%2FLeft%20and%20Leaving.mp3?1549919550870"
        preload="auto"
        crossorigin="anonymous"
      ></audio>
      <video
        id="videoclip"
        autoplay=""
        loop="loop"
        src="https://cdn.glitch.com/96ab1f6e-16b9-43c1-9df3-fbe9b24a7490%2FTimelapse%20Video.mp4?1549921266764"
        crossorigin="anonymous"
        playsinline=""
        webkit-playsinline=""
      ></video>
      <video
        id="spherevidclip"
        autoplay=""
        loop="loop"
        src="https://cdn.glitch.com/96ab1f6e-16b9-43c1-9df3-fbe9b24a7490%2F360%20Timelapse.mp4?1549922819582"
        crossorigin="anonymous"
        playsinline=""
        webkit-playsinline=""
      ></video
      ><img
        id="woodfloor"
        src="https://cdn.glitch.com/c388f728-37b7-4af9-af03-1ee7430663e7%2F4727356277_66fb5f938f_o.jpg?1544178281422"
        crossorigin="anonymous"/><img
        id="wall"
        src="https://cdn.glitch.com/f2ee9d74-9726-4bed-9c30-2d49d6391dee%2F4340689010_68c3b1bbb7_o%20(2).jpg?1547154870021"
        crossorigin="anonymous"/><img
        id="picasso"
        src="https://cdn.glitch.com/f2ee9d74-9726-4bed-9c30-2d49d6391dee%2FPablo_Picasso_-_Womanwith_a_Mandolin_-_Ermitage%20(1).jpg?1547166417213"
        crossorigin="anonymous"/><img
        id="bordeauxtheater"
        src="https://cdn.glitch.com/f2ee9d74-9726-4bed-9c30-2d49d6391dee%2FOp%C3%A9ra_National_de_Bordeaux%20(1).jpg?1547235572572"
        crossorigin="anonymous"
    /></a-assets>
    <a-entity
      id="camera"
      position="15.217802103402443 11.006747395355463 -2.7834462486828873"
      camera="active: false"
      rotation="-33.689918353692384 111.61217849148434 0"
      look-controls="reverseMouseDrag: true; reverseTouchDrag: true"
      wasd-controls="fly: true"
      data-aframe-inspector-original-camera=""
      ><a-entity
        raycaster="direction: -0.966601709412063 -0.04108145661695874 0.25296926549268167; origin: 48.17200381935591 32.11342146099731 -29.03737799010843; useWorldCoordinates: true"
        cursor="rayOrigin: mouse"
      ></a-entity></a-entity
    ><a-entity
      id="camera-2"
      position="40.119125523347385 32.34039187848438 17.758235576480626"
      camera="active: false"
      rotation="-33.689918353692384 111.61217849148434 0"
      look-controls="reverseTouchDrag: true; reverseMouseDrag: true"
      wasd-controls="fly: true"
      data-aframe-inspector-original-camera=""
      ><a-entity raycaster="" cursor=""></a-entity></a-entity
    ><a-entity
      id="camera-3"
      position="108.56601179343278 13.530469351518645 -5.080450918148551"
      camera=""
      rotation="-33.689918353692384 111.61217849148434 0"
      look-controls="reverseTouchDrag: true; reverseMouseDrag: true"
      wasd-controls="fly: true"
      data-aframe-inspector-original-camera=""
      ><a-entity raycaster="" cursor=""></a-entity
    ></a-entity>
    <a-entity
      laser-controls="hand: left"
      raycaster="objects: .hittable; far: 0.2"
      line="color: #000000"
      daydream-controls="hand: left"
      gearvr-controls="hand: left"
      magicleap-controls="hand: left"
      oculus-go-controls="hand: left"
      oculus-touch-controls=""
      vive-controls=""
      vive-focus-controls="hand: left"
      windows-motion-controls="hand: left"
      generic-tracked-controller-controls="hand: left"
      class="controller"
    ></a-entity>
    <a-entity
      laser-controls=""
      raycaster="objects: .hittable; far: 0.2"
      line="color: #000000"
      daydream-controls="hand: right"
      gearvr-controls="hand: right"
      magicleap-controls="hand: right"
      oculus-go-controls="hand: right"
      oculus-touch-controls="hand: right"
      vive-controls="hand: right"
      vive-focus-controls="hand: right"
      windows-motion-controls=""
      generic-tracked-controller-controls="hand: right"
      class="controller"
    ></a-entity>
    <a-entity id="architecture" visible="" class="homeworld"
      ><a-plane
        id="floor"
        rotation="-90 90 0"
        position="0 0.01 0"
        width="30"
        height="30"
        src="#woodfloor"
        repeat="4 4"
        geometry=""
        material=""
      ></a-plane>
      <a-plane
        position="0 5 -15"
        width="30"
        height="10"
        src="#wall"
        repeat="2 1"
        material="side: double"
        geometry=""
        id="first-wall"
        visible=""
      ></a-plane>
      <a-plane
        position="-2.5 5 15"
        rotation="0 180 0"
        width="25"
        height="10"
        src="#wall"
        repeat="2 1"
        material="side: double"
        geometry=""
        id="back-wall"
        scale=""
      ></a-plane>
      <a-plane
        position="-15 5 0"
        rotation="0 90 0"
        width="30"
        height="10"
        src="#wall"
        repeat="2 1"
        material="side: double"
        geometry=""
        id="left-wall"
      ></a-plane>
      <a-plane
        position="15 5 0"
        rotation="0 -90 0"
        width="30"
        height="10"
        src="#wall"
        repeat="2 1"
        material="side: double"
        geometry=""
        id="right-wall"
        visible=""
      ></a-plane>
      <a-plane
        id="ceiling"
        position="0 10 0"
        scale=""
        width="30"
        height="30"
        rotation="90 0 0"
        material="metalness: 1; roughness: 0; transparent: true; opacity: 0.7; color: #faaf52; side: double"
        geometry=""
        visible="false"
      ></a-plane></a-entity
    ><a-entity
      id="architecture-2"
      visible=""
      position="18.13767 0 17.81191"
      class="homeworld"
      ><a-plane
        id="floor"
        rotation="-90 90 0"
        position="0 0.2 0"
        width="30"
        height="30"
        src="#woodfloor"
        repeat="4 4"
        geometry=""
        material=""
      ></a-plane>
      <a-plane
        position="0 5 -15"
        width="30"
        height="10"
        src="#wall"
        repeat="2 1"
        material="side: double"
        geometry=""
        id="first-wall"
        visible=""
        scale="0.2 1 1"
      ></a-plane>
      <a-plane
        position="0 5 15"
        rotation="0 180 0"
        width="25"
        height="10"
        src="#wall"
        repeat="2 1"
        geometry=""
        material="side: double"
        id="back-wall"
        scale=""
      ></a-plane>
      <a-plane
        position="-15 5 0"
        rotation="0 -90 0"
        width="30"
        height="10"
        src="#wall"
        repeat="2 1"
        material="side: double"
        geometry=""
        id="left-wall"
      ></a-plane>
      <a-plane
        position="15 5 0"
        rotation="0 -90 0"
        width="30"
        height="10"
        src="#wall"
        repeat="2 1"
        material="side: double"
        geometry=""
        id="right-wall"
        visible=""
      ></a-plane>
      <a-plane
        id="ceiling"
        position="0 10 0"
        scale=""
        width="30"
        height="30"
        rotation="90 0 0"
        material="side: double"
        geometry=""
        visible="false"
      ></a-plane
    ></a-entity>
    <a-entity
      id="picassodisplay"
      position="2.11729 11.40601 6.50653"
      rotation="0 270 0"
      class="homeworld"
      ><a-plane
        id="picassoframe"
        color="#191817"
        width="3"
        height="4"
        material=""
        geometry=""
      ></a-plane>
      <a-plane
        id="picassopainting"
        src="#picasso"
        position="0 -0.03771 0.1"
        width="2.5"
        height="3.5"
        material=""
        geometry=""
      ></a-plane>
      <a-plane
        id="picassocaption"
        position="3.5 -1 0.01"
        height=".6"
        width="auto"
        color="#191817"
        text="value: Pablo Picasso: Woman With a Mandolin. 1909; width: 3; align: center"
        geometry="width: 3"
        material=""
      ></a-plane
    ></a-entity>
    <a-gltf-model
      position="3.10565 0.16153 2.83216"
      rotation="0 180 0"
      src="#truss"
      scale="0.003 0.003 0.003"
      gltf-model="https://cdn.glitch.com/94360a9d-1c06-4670-ad8d-4317c4a8d7cf%2Ftruss.glb?v=1602063215600"
      id="truss"
    ></a-gltf-model>
    <a-gltf-model
      position="-0.09764 1.84179 -12.38879"
      rotation="1 0 -10"
      src="#table_and_chairs"
      id="table_and_chairs"
      scale="0.1 0.1 0.1"
      gltf-model="#table_and_chairs"
    ></a-gltf-model>
    <a-gltf-model
      position="-9.12951 0.30309 -7.76066"
      rotation=""
      src="#poly_bar_table_and_booths"
      id="poly_bar_table_and_booths"
      scale="0.1 0.1 0.1"
      gltf-model="https://cdn.glitch.com/94360a9d-1c06-4670-ad8d-4317c4a8d7cf%2Fpoly_bar_table_and_booths.glb?v=1602063410364"
      visible="false"
    ></a-gltf-model>
    <a-gltf-model
      position="-4.41324 0.1 -11.27212"
      rotation=""
      src="#malmo_chair"
      id="malmo_chair"
      scale="0.003 0.003 0.003"
      gltf-model="https://cdn.glitch.com/94360a9d-1c06-4670-ad8d-4317c4a8d7cf%2Fmalmo_chair.glb?v=1602063423299"
    ></a-gltf-model>
    <a-entity
      position="24.69592 0 -28.16782"
      rotation=""
      src="#amphi"
      id="amphi"
      scale="5 5 5"
      gltf-model="https://cdn.glitch.com/94360a9d-1c06-4670-ad8d-4317c4a8d7cf%2Famphitheatre.glb?v=1602096384602"
    ></a-entity>
    <a-entity
      id="photospheredisplay"
      position="-27.81926 1.17639 -15.43813"
      scale="2 1.7 1.7"
      class="homeworld"
      ><a-box
        color="black"
        rotation="0 35 0"
        width="1"
        height="2"
        depth=".5"
        material=""
        geometry=""
      ></a-box>
      <a-sphere
        position="0 2.06801 0.04439"
        radius=".7"
        src="#bordeauxtheater"
        sphereexpand=""
        animation="property: rotation; to: 0 360 0; easing: easeInOutSine; dur: 30000; loop: NaN; elasticity: 0"
        geometry=""
        material=""
      ></a-sphere>
      <a-plane
        id="photospherecaption"
        position="0.5 0.5 0.5"
        rotation="-25 35 0"
        height=".6"
        width="auto"
        color="#191817"
        text="value: This photosphere from France was taken by Michael Buze; width: 2; wrapCount: 30; align: center"
        geometry="width: 2"
        material=""
      ></a-plane
    ></a-entity>
    <a-entity
      id="musicpanel"
      position="0.91216 11.47036 40.59761"
      rotation="0 180 0"
      sound="src: https://cdn.glitch.com/96ab1f6e-16b9-43c1-9df3-fbe9b24a7490%2FLeft%20and%20Leaving.mp3?1549919550870"
      ><a-plane
        width="2.5"
        height="3.5"
        position="-0.07202 0.0945 -0.43118"
        shader="flat"
        src="#flowers"
        side="double"
        geometry=""
        material=""
      ></a-plane>
      <a-plane
        position="0 -0.5 0.01"
        width="2"
        height=".5"
        transparent="true"
        opacity=".9"
        color="#191817"
        text="value: Artist - Gabriel Baker \n Song - Left and Leaving; width: 4; align: center"
        geometry=""
        material=""
      ></a-plane>
      <a-plane
        id="playbox"
        depth=".01"
        scale="0.3 0.3 0.3"
        position="-0.673 -1.22 0.01"
        shader="flat"
        width="2"
        height="2"
        material="color: #191817"
        transparent="true"
        opacity=".9"
        songplayer=""
        geometry=""
        ><a-triangle
          id="playicon"
          color="white"
          depth=".01"
          scale=""
          rotation="0 0 -90"
          position="0.1 -0.02 0.06"
          shader="flat"
          width="2"
          height="2"
          vertex-a="0 .3 0"
          material=""
          geometry=""
        ></a-triangle
      ></a-plane>
      <a-plane
        id="stopbox"
        scale="0.3 0.3 0.3"
        position="0 -1.22 0.01"
        shader="flat"
        width="2"
        height="2"
        material="color: #191817"
        transparent="true"
        opacity=".9"
        songstopper=""
        geometry=""
        ><a-plane
          id="stopicon"
          color="white"
          scale=""
          position="0 0 0.06"
          shader="flat"
          width="1"
          height="1"
          material=""
          geometry=""
        ></a-plane
      ></a-plane>
      <a-plane
        id="pausebox"
        scale="0.3 0.3 0.3"
        position="0.673 -1.22 0.01"
        shader="flat"
        width="2"
        height="2"
        songpause=""
        material="color: #191817"
        transparent="true"
        opacity=".9"
        geometry=""
        ><a-plane
          id="pauseiconleft"
          color="white"
          depth=".1"
          scale=""
          position="-0.4 0 0.06"
          shader="flat"
          width=".5"
          height="1"
          material=""
          geometry=""
        ></a-plane>
        <a-plane
          id="pauseiconright"
          color="white"
          depth=".1"
          scale=""
          position="0.4 0 0.06"
          shader="flat"
          width=".5"
          height="1"
          material=""
          geometry=""
        ></a-plane></a-plane
    ></a-entity>
    <a-entity
      id="videospheredisplay"
      position="-28 2.10964 -20"
      scale="1.7 1.7 1.7"
      ><a-box
        color="black"
        rotation="0 35 0"
        width="1"
        height="2"
        depth=".5"
        material=""
        geometry=""
        class="homeworld"
      ></a-box>
      <a-videosphere
        id="videosphereentity"
        position="0 1.8 0"
        radius=".7"
        src="#spherevidclip"
        videosphereexpand=""
        geometry=""
        material=""
      ></a-videosphere>
      <a-plane
        id="videospherecaption"
        position="0.5 0.5 0.5"
        rotation="-25 35 0"
        height=".6"
        width="auto"
        color="#191817"
        text="value: This is a short, equirectangular videosphere; width: 2; wrapCount: 30; align: center"
        geometry="width: 2"
        material=""
        class="homeworld"
      ></a-plane
    ></a-entity>
    <a-video
      src="#videoclip"
      position="-14.93909 3.32281 -3.85907"
      rotation="0 90 0"
      width="5"
      height="5"
      material=""
      geometry=""
      id="video-one"
      scale="2 1 1"
      class="homeworld"
      ><a-plane
        id="vidplaybox"
        depth=".01"
        scale="0.3 0.3 0.3"
        position="-0.35 -2 0.01"
        shader="flat"
        width="2"
        height="2"
        material="color: #191817"
        transparent="true"
        opacity=".9"
        videoplayer=""
        geometry=""
        ><a-triangle
          id="vidplayicon"
          color="white"
          depth=".01"
          scale=""
          rotation="0 0 -90"
          position="0.1 -0.02 0.06"
          shader="flat"
          width="2"
          height="2"
          vertex-a="0 .3 0"
          material=""
          geometry=""
        ></a-triangle
      ></a-plane>
      <a-plane
        id="vidpausebox"
        scale="0.3 0.3 0.3"
        position="0.35 -2 0.01"
        shader="flat"
        width="2"
        height="2"
        material="color: #191817"
        transparent="true"
        opacity=".9"
        videopause=""
        geometry=""
        ><a-plane
          id="vidpauseiconleft"
          color="white"
          depth=".1"
          scale=""
          position="-0.4 0 0.06"
          shader="flat"
          width=".5"
          height="1"
          material=""
          geometry=""
        ></a-plane>
        <a-plane
          id="vidpauseiconright"
          color="white"
          depth=".1"
          scale=""
          position="0.4 0 0.06"
          shader="flat"
          width=".5"
          height="1"
          material=""
          geometry=""
        ></a-plane></a-plane></a-video
    ><a-video
      src="#videoclip"
      position="-25.02387 11.4794 25.88444"
      rotation="0 90 0"
      width="5"
      height="5"
      material=""
      geometry=""
      id="video-one-3"
      scale="2 1 1"
      class="homeworld"
      ><a-plane
        id="vidplaybox"
        depth=".01"
        scale=""
        position=""
        shader="flat"
        width="2"
        height="2"
        material=""
        transparent="true"
        opacity=".9"
        videoplayer=""
        geometry=""
        ><a-triangle
          id="vidplayicon"
          color="white"
          depth=".01"
          scale=""
          rotation=""
          position=""
          shader="flat"
          width="2"
          height="2"
          vertex-a="0 .3 0"
          material=""
          geometry=""
        ></a-triangle
      ></a-plane>
      <a-plane
        id="vidpausebox"
        scale=""
        position=""
        shader="flat"
        width="2"
        height="2"
        material=""
        transparent="true"
        opacity=".9"
        videopause=""
        geometry=""
        ><a-plane
          id="vidpauseiconleft"
          color="white"
          depth=".1"
          scale=""
          position=""
          shader="flat"
          width=".5"
          height="1"
          material=""
          geometry=""
        ></a-plane>
        <a-plane
          id="vidpauseiconright"
          color="white"
          depth=".1"
          scale=""
          position=""
          shader="flat"
          width=".5"
          height="1"
          material=""
          geometry=""
        ></a-plane></a-plane></a-video
    ><a-video
      src="#videoclip"
      position="-9.62101 3 26.94524"
      rotation="0 180 0"
      width="5"
      height="5"
      material=""
      geometry=""
      id="video-one-2"
      class="homeworld"
      ><a-plane
        id="vidplaybox"
        depth=".01"
        scale=""
        position=""
        shader="flat"
        width="2"
        height="2"
        material=""
        transparent="true"
        opacity=".9"
        videoplayer=""
        geometry=""
        ><a-triangle
          id="vidplayicon"
          color="white"
          depth=".01"
          scale=""
          rotation=""
          position=""
          shader="flat"
          width="2"
          height="2"
          vertex-a="0 .3 0"
          material=""
          geometry=""
        ></a-triangle
      ></a-plane>
      <a-plane
        id="vidpausebox"
        scale=""
        position=""
        shader="flat"
        width="2"
        height="2"
        material=""
        transparent="true"
        opacity=".9"
        videopause=""
        geometry=""
        ><a-plane
          id="vidpauseiconleft"
          color="white"
          depth=".1"
          scale=""
          position=""
          shader="flat"
          width=".5"
          height="1"
          material=""
          geometry=""
        ></a-plane>
        <a-plane
          id="vidpauseiconright"
          color="white"
          depth=".1"
          scale=""
          position=""
          shader="flat"
          width=".5"
          height="1"
          material=""
          geometry=""
        ></a-plane></a-plane></a-video
    ><a-video
      src="#videoclip"
      position="-2.58989 6.88298 2.67049"
      rotation="0 -179.5964856727322 0"
      width="5"
      height="5"
      material=""
      geometry=""
      id="video-outside"
      scale="0.43 0.3 1.48185"
      class="homeworld"
      ><a-plane
        id="vidplaybox"
        depth=".01"
        scale=""
        position="0 0.54061 0"
        shader="flat"
        width="2"
        height="2"
        material=""
        transparent="true"
        opacity=".9"
        videoplayer=""
        geometry=""
        ><a-triangle
          id="vidplayicon"
          color="white"
          depth=".01"
          scale=""
          rotation=""
          position=""
          shader="flat"
          width="2"
          height="2"
          vertex-a="0 .3 0"
          material=""
          geometry=""
        ></a-triangle
      ></a-plane>
      <a-plane
        id="vidpausebox"
        scale=""
        position=""
        shader="flat"
        width="2"
        height="2"
        material=""
        transparent="true"
        opacity=".9"
        videopause=""
        geometry=""
        ><a-plane
          id="vidpauseiconleft"
          color="white"
          depth=".1"
          scale=""
          position=""
          shader="flat"
          width=".5"
          height="1"
          material=""
          geometry=""
        ></a-plane>
        <a-plane
          id="vidpauseiconright"
          color="white"
          depth=".1"
          scale=""
          position=""
          shader="flat"
          width=".5"
          height="1"
          material=""
          geometry=""
        ></a-plane></a-plane
    ></a-video>
    <a-plane
      id="vidplaybox"
      depth=".01"
      scale=""
      position=""
      shader="flat"
      width="2"
      height="2"
      material=""
      transparent="true"
      opacity=".9"
      videoplayer=""
      geometry=""
      ><a-triangle
        id="vidplayicon"
        color="white"
        depth=".01"
        scale=""
        rotation=""
        position=""
        shader="flat"
        width="2"
        height="2"
        vertex-a="0 .3 0"
        material=""
        geometry=""
      ></a-triangle
    ></a-plane>
    <a-plane
      id="vidpausebox"
      scale=""
      position=""
      shader="flat"
      width="2"
      height="2"
      material=""
      transparent="true"
      opacity=".9"
      videopause=""
      geometry=""
      ><a-plane
        id="vidpauseiconleft"
        color="white"
        depth=".1"
        scale=""
        position=""
        shader="flat"
        width=".5"
        height="1"
        material=""
        geometry=""
      ></a-plane>
      <a-plane
        id="vidpauseiconright"
        color="white"
        depth=".1"
        scale=""
        position=""
        shader="flat"
        width=".5"
        height="1"
        material=""
        geometry=""
      ></a-plane
    ></a-plane>
    <a-grid
      position="2.97261 -1.55389 2.27295"
      geometry=""
      material=""
      visible="false"
    ></a-grid>
    <a-circle
      id="homebutton"
      position="0 0.1 0"
      rotation="-90 0 0"
      backhome=""
      material=""
      geometry=""
    ></a-circle>
    <a-entity
      environment="preset: starry; groundColor: #445; grid: cross"
    ></a-entity>
    <div class="a-loader-title" style="display: none;">
      wide-network
    </div>
    <div class="a-loader-title" style="display: none;">
      wide-network
    </div>
    <div class="a-loader-title" style="display: none;">wide-network</div>
    <a-entity></a-entity>
    <div class="a-loader-title" style="display: none;">
      wide-network
    </div>
    <div class="a-loader-title" style="display: none;">
      wide-network
    </div>
    <div class="a-loader-title" style="display: none;">wide-network</div>
    <div class="a-loader-title" style="display: none;">
      wide-network
    </div>
    <div class="a-loader-title" style="display: none;">
      wide-network
    </div>
    <div class="a-loader-title" style="display: none;">
      wide-network
    </div>
    <div class="a-loader-title" style="display: none;">wide-network</div>
    <a-entity light="type: hemisphere; castShadow: true"></a-entity
  ></a-scene>
</template>

<script>
if (process.client) {
  require('@/js/aframe/sphereexpand.js')
  require('@/js/aframe/backhome')
  require('@/js/aframe/componentstarter')
  require('@/js/aframe/examplefunctions')
  require('@/js/aframe/audiocontrols')
  require('@/js/aframe/videocontrols')
  require('@/js/aframe/videosphereexpand')
  require('@/js/aframe/routePath')
  require('@/js/aframe/color-picker.component')
  // require("@/js/aframe/room-number.component");
}

export default {
  name: 'scene',
  head: {
    script: [
      { src: 'https://aframe.io/releases/1.0.4/aframe.min.js' },
      {
        src:
          'https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.0/dist/aframe-extras.min.js'
      },
      {
        src:
          'https://unpkg.com/aframe-animation-component@^5.1.2/dist/aframe-animation-component.min.js'
      }
    ]
  },
  computed: {
    room() {
      return this.$store.getters['route/room']
    }
  },
  created() {
    if ((this.room = '1234')) {
      let Setroom = Math.random()
        .toString(36)
        .substr(2, 5)
        .toUpperCase()
      // this.$store.dispatch("route/roomSet", Setroom);
    } else {
      console.log('room', this.room)
    }
  },
  methods: {},
  mounted() {
    let vm = this
  }
}
</script>

<style>
a-scene {
  height: 100vh;
  width: 100vw;
}
</style>
