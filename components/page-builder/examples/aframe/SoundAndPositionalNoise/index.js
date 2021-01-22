AFRAME.registerComponent('play', {
    init: function () {
        var myEl = document.querySelector('#yellow');
        this.el.addEventListener('click', function () {
            myEl.components.sound.playSound();
        });
    }
});
AFRAME.registerComponent('stop', {
    init: function () {
        var myEl = document.querySelector('#yellow');
        this.el.addEventListener('click', function () {
            myEl.components.sound.stopSound();
        });
    }
});