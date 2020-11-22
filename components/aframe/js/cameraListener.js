let store;
let socket;
let user;
let vm;
let x;
let z;
AFRAME.registerComponent("camera-listener", {
  tick: function() {
    var cameraEl = this.el.sceneEl.camera.el;
    var pos = cameraEl.getAttribute("position");
    var rotation = cameraEl.getAttribute("rotation");
    var elCil = document.getElementById("myCil");

    if (elCil) {
      elCil.setAttribute("position", pos);
      elCil.setAttribute("rotation", rotation);
    }

    let payload = {
      pos: pos,
      rotation: rotation
    };
    if (payload) {
      setTimeout(function() {
        setPoints(payload);
      }, 300);
    }
  }
});
export function setStore(data, datas) {
  store = data;
  vm = datas;
}
export function setSocket(data) {
  socket = data;
}
export function setUser(data) {
  user = data;
}
function setPoints(data) {
  if (x == data.pos.x) {
    store.commit("aframe/SET_ANIMATION", "idle");
  } else {
    store.commit("aframe/SET_ANIMATION", "run");
  }
  x = data.pos.x;
  z = data.pos.z;
  let pos = {
    x: data.pos.x,
    y: data.pos.y,
    z: data.pos.z
  };

  if (user) {
    vm.myMovement = {
      location: pos,
      rotation: data.rotation,
      id: user.userNumber,
      room: user.room
    };

    let num = user.userNumber.toString();

    vm.movementAvatar();
    store.commit("aframe/SET_LOCATION", data);
  }
}
