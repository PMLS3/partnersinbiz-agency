<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <!-- app root container -->
  <div>
    <!-- Stations -->
    <div class="padding"></div>
    <div id="station0" class="station">
      <div class="title">
        <div id="title0" class="subtitle"></div>
        <div id="live0" class="live">LIVE</div>
        <div id="playing0" class="playing">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </div>
    </div>
    <div id="station1" class="station">
      <div class="title">
        <div id="title1" class="subtitle"></div>
        <div id="live1" class="live">LIVE</div>
        <div id="playing1" class="playing">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </div>
    </div>
    <div id="station2" class="station">
      <div class="title">
        <div id="title2" class="subtitle"></div>
        <div id="live2" class="live">LIVE</div>
        <div id="playing2" class="playing">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </div>
    </div>
    <div id="station3" class="station">
      <div class="title">
        <div id="title3" class="subtitle"></div>
        <div id="live3" class="live">LIVE</div>
        <div id="playing3" class="playing">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </div>
    </div>
    <div id="station4" class="station">
      <div class="title">
        <div id="title4" class="subtitle"></div>
        <div id="live4" class="live">LIVE</div>
        <div id="playing4" class="playing">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </div>
    </div>
    <div class="padding"></div>
  </div>
</template>

<script>
// require('./radio.js')
export default {
  name: 'AppsRadio',
}
</script>

<style scoped>
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  outline: 0;
}

body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: #0b62b3;
  background: -moz-linear-gradient(-45deg, #0b62b3 0%, #7dff5f 100%);
  background: -webkit-linear-gradient(-45deg, #0b62b3 0%, #7dff5f 100%);
  background: linear-gradient(135deg, #0b62b3 0%, #7dff5f 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0b62b3', endColorstr='#7dff5f', GradientType=1);
  font-family: 'Helvetica Neue', 'Futura', 'Trebuchet MS', Arial;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

/* Stations */
.padding {
  width: 100%;
  height: 12.5%;
}
.station {
  position: relative;
  width: 100%;
  height: 15%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -webkit-box-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-left: 5%;
  cursor: pointer;
  box-sizing: border-box;
}
.station:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.title {
  font-size: 4vw;
  line-height: 4vw;
  font-weight: 300;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.33);
}
.subtitle {
  display: inline-block;
  vertical-align: middle;
}
.live {
  width: 8vw;
  height: 3vw;
  background-color: #cc1919;
  border-radius: 3px;
  font-weight: bold;
  color: #fff;
  font-size: 2.25vw;
  line-height: 3vw;
  display: inline-block;
  text-align: center;
  opacity: 0;
  text-shadow: none;
}

/* Playing Animation */
.playing {
  position: absolute;
  right: 5%;
  top: 50%;
  margin: -20px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  display: none;
}
.playing > div {
  background-color: #fff;
  height: 100%;
  width: 6px;
  display: inline-block;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  -webkit-animation: wavy 1s ease infinite forwards;
  animation: wavy 1s ease infinite forwards;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.33);
}
.playing .rect2 {
  -webkit-animation-delay: 0.25s;
  animation-delay: 0.25s;
}
.playing .rect3 {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.playing .rect4 {
  -webkit-animation-delay: 0.75s;
  animation-delay: 0.75s;
}
.playing .rect5 {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
@-webkit-keyframes wavy {
  0% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  50% {
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}
@keyframes wavy {
  0% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  50% {
    -webkit-transform: scaleY(0.6);
    transform: scaleY(0.6);
  }
  100% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}
</style>
