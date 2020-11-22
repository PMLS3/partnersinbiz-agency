!(function(e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var s = t();
    for (var n in s) ("object" == typeof exports ? exports : e)[n] = s[n];
  }
})(this, function() {
  return (function(e) {
    var t = {};
    function s(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, s), (o.l = !0), o.exports;
    }
    return (
      (s.m = e),
      (s.c = t),
      (s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (s.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (s.t = function(e, t) {
        if ((1 & t && (e = s(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (s.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            s.d(
              n,
              o,
              function(t) {
                return e[t];
              }.bind(null, o)
            );
        return n;
      }),
      (s.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return s.d(t, "a", t), t;
      }),
      (s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (s.p = ""),
      s((s.s = 0))
    );
  })([
    function(e, t) {
      if ("undefined" == typeof AFRAME)
        throw new Error(
          "Component attempted to register before AFRAME was available."
        );
      AFRAME.registerComponent("cursor-teleport", {
        schema: {
          cameraHead: { type: "string", default: "" },
          cameraRig: { type: "string", default: "" },
          collisionEntities: { type: "string", default: "" },
          ignoreEntities: { type: "string", default: "" },
          landingMaxAngle: { default: "45", min: 0, max: 360 },
          landingNormal: { type: "vec3", default: "0 1 0" }
        },
        init: function() {
          (self = this),
            (self.mobile = AFRAME.utils.device.isMobile()),
            (self.scene = this.el.sceneEl),
            (self.canvas = self.scene.renderer.domElement),
            document
              .querySelector(this.data.cameraHead)
              .object3D.traverse(function(e) {
                e instanceof THREE.Camera && (self.cam = e);
              }),
            (self.camPos = new THREE.Vector3()),
            (self.camRig = document.querySelector(
              this.data.cameraRig
            ).object3D),
            (self.camPos = self.camRig.position),
            (self.rayCaster = new THREE.Raycaster()),
            (self.referenceNormal = new THREE.Vector3()),
            (self.rayCastObjects = []),
            self.referenceNormal.copy(this.data.landingNormal);
          var e = new THREE.RingGeometry(0.25, 0.3, 32, 1);
          e.rotateX(-Math.PI / 2), e.translate(0, 0.02, 0);
          var t = new THREE.MeshBasicMaterial();
          function s(e, t) {
            var s = e.getBoundingClientRect();
            return null != t.clientX
              ? { x: t.clientX - s.left, y: t.clientY - s.top }
              : null != t.touches[0]
              ? {
                  x: t.touches[0].clientX - s.left,
                  y: t.touches[0].clientY - s.top
                }
              : void 0;
          }
          function n(e) {
            var t = s(self.canvas, e);
            (self.mouseX = t.x), (self.mouseY = t.y);
          }
          function o(e) {
            self.updateRaycastObjects();
            var t = s(self.canvas, e);
            (self.mouseX = t.x),
              (self.mouseY = t.y),
              (self.mouseXOrig = t.x),
              (self.mouseYOrig = t.y);
          }
          function a(e) {
            if (
              self.mouseX == self.mouseXOrig &&
              self.mouseY == self.mouseYOrig
            ) {
              var t = self.getTeleportPosition(self.mouseX, self.mouseY);
              t &&
                ((self.teleportIndicator.position.x = t.x),
                (self.teleportIndicator.position.y = t.y),
                (self.teleportIndicator.position.z = t.z),
                self.transition(t));
            }
          }
          (self.teleportIndicator = new THREE.Mesh(e, t)),
            self.scene.object3D.add(self.teleportIndicator),
            (self.transitioning = !1),
            (self.transitionProgress = 0),
            (self.transitionSpeed = 0.01),
            (self.transitionCamPosStart = new THREE.Vector3()),
            (self.transitionCamPosEnd = new THREE.Vector3()),
            (self.updateRaycastObjects = function() {
              if (
                ((self.rayCastObjects = []), "" != this.data.collisionEntities)
              ) {
                self.scene
                  .querySelectorAll(this.data.collisionEntities)
                  .forEach(e => {
                    e.object3D.traverse(function(e) {
                      e instanceof THREE.Mesh &&
                        ((e.userData.collision = !0),
                        self.rayCastObjects.push(e));
                    });
                  });
              } else {
                var e = new THREE.PlaneGeometry(50, 50, 1);
                e.rotateX(-Math.PI / 2);
                var t = new THREE.MeshNormalMaterial(),
                  s = new THREE.Mesh(e, t);
                (s.userData.collision = !0), self.rayCastObjects.push(s);
              }
              "" != this.data.ignoreEntities &&
                self.scene
                  .querySelectorAll(this.data.ignoreEntities)
                  .forEach(e => {
                    e.object3D.traverse(function(e) {
                      e instanceof THREE.Mesh && self.rayCastObjects.push(e);
                    });
                  });
            }),
            (self.getTeleportPosition = function(e, t) {
              if (0 != self.rayCastObjects.length) {
                if (
                  self.hasOwnProperty("cam") &&
                  self.hasOwnProperty("canvas")
                ) {
                  var s = self.cam,
                    n = self.canvas.getBoundingClientRect(),
                    o = new THREE.Vector2();
                  (o.x = (e / (n.right - n.left)) * 2 - 1),
                    (o.y = (-t / (n.bottom - n.top)) * 2 + 1),
                    self.rayCaster.setFromCamera(o, s);
                  var a = self.rayCaster.intersectObjects(self.rayCastObjects);
                  return (
                    !(
                      0 == a.length ||
                      !self.isValidNormalsAngle(a[0].face.normal)
                    ) &&
                    1 == a[0].object.userData.collision && a[0].point
                  );
                }
                return !1;
              }
              return !1;
            }),
            (self.isValidNormalsAngle = function(e) {
              var t = self.referenceNormal.angleTo(e);
              return THREE.Math.RAD2DEG * t <= this.data.landingMaxAngle;
            }),
            (self.transition = function(e) {
              (self.transitionProgress = 0),
                (self.transitionCamPosEnd.x = e.x),
                (self.transitionCamPosEnd.y = e.y),
                (self.transitionCamPosEnd.z = e.z),
                (self.transitionCamPosStart.x = self.camPos.x),
                (self.transitionCamPosStart.y = self.camPos.y),
                (self.transitionCamPosStart.z = self.camPos.z),
                (self.transitioning = !0);
            }),
            self.updateRaycastObjects(),
            self.canvas.addEventListener("mousedown", o, !1),
            self.canvas.addEventListener("mousemove", n, !1),
            self.canvas.addEventListener("mouseup", a, !1),
            self.canvas.addEventListener("touchstart", o, !1),
            self.canvas.addEventListener("touchmove", n, !1),
            self.canvas.addEventListener("touchend", a, !1),
            (self.easeInOutQuad = function(e) {
              return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
            });
        },
        tick: function() {
          if (!self.transitioning && !self.mobile) {
            var e = self.getTeleportPosition(self.mouseX, self.mouseY);
            !self.mobile &&
              e &&
              ((self.teleportIndicator.position.x = e.x),
              (self.teleportIndicator.position.y = e.y),
              (self.teleportIndicator.position.z = e.z));
          }
          self.transitioning &&
            ((self.transitionProgress += self.transitionSpeed),
            (self.camPos.x =
              self.transitionCamPosStart.x +
              (self.transitionCamPosEnd.x - self.transitionCamPosStart.x) *
                self.easeInOutQuad(self.transitionProgress)),
            (self.camPos.y =
              self.transitionCamPosStart.y +
              (self.transitionCamPosEnd.y - self.transitionCamPosStart.y) *
                self.easeInOutQuad(self.transitionProgress)),
            (self.camPos.z =
              self.transitionCamPosStart.z +
              (self.transitionCamPosEnd.z - self.transitionCamPosStart.z) *
                self.easeInOutQuad(self.transitionProgress)),
            self.transitionProgress >= 1 && (self.transitioning = !1));
        }
      });
    }
  ]);
});
