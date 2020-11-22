AFRAME.registerComponent("teleport", {
  init: function() {
    let camera = document.getElementById("camera");

    var data = this.data;
    let canSubmit = true;
    let moveSet = evt => {
      console.log("data", data);
      if (canSubmit) {
        let loc = evt.detail.intersection;

        let x = loc.point.x;
        let y = loc.point.y + 3.6;
        let z = loc.point.z;

        console.log("pos", x, y, z);

        camera.setAttribute("animation", "to", `${x} ${y} ${z}`);

        canSubmit = false;
        setTimeout(() => (canSubmit = true), 1000);
      }
    };

    this.el.addEventListener("mousedown", moveSet);
    this.el.addEventListener("touchstart", moveSet);
  }
});
