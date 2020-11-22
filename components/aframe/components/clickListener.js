AFRAME.registerComponent("click-listener", {
  init: function() {
    this.el.addEventListener("click", function(e) {
      let loc = e.detail.intersection;
      console.log("loc", loc);
      console.log(e.target);
      //   e.target.setAttribute("scale", { x: 2, y: 2, z: 2 });
    });
    this.el.addEventListener("mouseenter", function(e) {
      let loc = e.detail.intersection;
      console.log("loc", loc);
      console.log(e.target);
      //   e.target.setAttribute("scale", { x: 1.5, y: 1.5, z: 1.5 });
    });
    this.el.addEventListener("mouseleave", function(e) {
      console.log(e.target);
      //   e.target.setAttribute("scale", { x: 1, y: 1, z: 1 });
    });
  }
});
