// var bus = new Vue()
// import {mutations, state} from '@/store/aframe'
// export function myStore(data){
// console.log('data', data)
// store = data
// }
let store
let socket
let user
let vm
AFRAME.registerComponent('camera-listener', {
  tick: function() {
    var cameraEl = this.el.sceneEl.camera.el
    var pos = cameraEl.getAttribute('position')
    var rotation = cameraEl.getAttribute('rotation')
    var elCil = document.getElementById('myCil')

    elCil.setAttribute('position', pos)
    elCil.setAttribute('rotation', rotation)

    setPoints(pos)
  }
})
export function setStore(data, datas) {
  store = data
  vm = datas
}
export function setSocket(data) {
  socket = data
}
export function setUser(data) {
  user = data
}
function setPoints(data) {
  console.log('setpoints', data)
  vm.myMovement = {
    location: data,
    id: user.userNumber,
    room: user.room
  }
  vm.movementAvatar(vm.myMovement)
  store.commit('aframe/SET_LOCATION', data)
}
