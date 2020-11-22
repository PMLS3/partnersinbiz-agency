import Peer from "peerjs";
AFRAME.registerComponent("a-webcam", {
  init: function() {
    console.log("AWEBCAM");
    let myPeer = new Peer(undefined);
    let myVideo = {};
    let myid = null;
    myPeer.on("open", id => {
      console.log("id", id);
      myid = id;
    });

    // myVideo.classList.add([
    //   "transition",
    //   "duration-500",
    //   "ease-in-out",
    //   "bg-blue-500",
    //   "hover:bg-red-500",
    //   "transform",
    //   "hover:-translate-y-1",
    //   "hover:scale-110",
    //   "moveable",
    //   "z-50",
    //   "rounded-full"
    // ]);
    console.log("myPeer", myPeer);

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(stream => {
        myVideo = document.querySelector("video");
        myVideo.muted = true;

        myVideo.srcObject = stream;
        myVideo.onloadedmetadata = () => {
          myVideo.play();
        };
        myPeer.on("call", call => {
          call.answer(stream);
          const video = document.createElement("video");
          call.on("stream", userVideoStream => {
            console.log("vide user", userVideoStream);
            // this.addVideoStream(video, userVideoStream)
          });
        });
      });

    let anonymousSet = () => {
      console.log("WHOOOO");
    };

    this.el.addEventListener("click", anonymousSet);
  }
});
