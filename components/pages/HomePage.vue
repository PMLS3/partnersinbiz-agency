<template>
  <div class="relative w-full h-screen">
    <div class="absolute z-50 items-center w-full h-full">
      <h1 class="w-full text-center text-white bold">You have two options:</h1>
      <h1 class="w-full text-center text-white bold">
        You can either click the red button and forget that you ever visited our
        website
      </h1>
      <h1 class="w-full text-center text-white bold">or</h1>
      <h1 class="w-full text-center text-white bold">
        You can click the blue button and setup a free consultation and grow
        your business behind your wildest dreams
      </h1>
      <div class="grid grid-cols-2">
        <div class="text-center">
          <button
            class="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          >
            FORGET
          </button>
        </div>
        <div class="text-center">
          <button
            class="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          >
            Grow
          </button>
        </div>
      </div>
      <div class="w-1/2 bg-blue-600 opacity-25">
        <h5 class="w-full text-center text-white opacity-100 bold">
          We help entrepreneurs / freelancers / business owners scale and get
          more clients by building incredible marketing systems
        </h5>
        <h5 class="w-full text-center text-white bold">
          By challenging tradional systems, We've been able to work in the
          beauty, fitness, health, remodeling and digital service industries.
        </h5>
        <h5 class="w-full text-center text-white bold">
          Each industry requires its own thorough market research. This means
          that each industry has different systems in place to ensure maximum
          results
        </h5>
      </div>
      <div class="w-1/2 bg-blue-600 opacity-25">
        <h5 class="w-full text-center text-white opacity-100 bold">
          We help entrepreneurs / freelancers / business owners scale and get
          more clients by building incredible marketing systems
        </h5>
        <h5 class="w-full text-center text-white bold">
          By challenging tradional systems, We've been able to work in the
          beauty, fitness, health, remodeling and digital service industries.
        </h5>
        <h5 class="w-full text-center text-white bold">
          Each industry requires its own thorough market research. This means
          that each industry has different systems in place to ensure maximum
          results
        </h5>
      </div>
    </div>
    <canvas width="500" height="200" id="canv" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  mounted() {
    // Get the canvas node and the drawing context
    const canvas = document.getElementById('canv')
    const ctx = canvas.getContext('2d')

    // set the width and height of the canvas
    const w = (canvas.width = document.body.offsetWidth)
    const h = (canvas.height = document.body.offsetHeight)

    // draw a black rectangle of width and height same as that of the canvas
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, w, h)
    const cols = Math.floor(w / 20) + 1
    const ypos = Array(cols).fill(0)

    function matrix() {
      // Draw a semitransparent black rectangle on top of previous drawing
      ctx.fillStyle = '#0001'
      ctx.fillRect(0, 0, w, h)

      // Set color to green and font to 15pt monospace in the drawing context
      ctx.fillStyle = '#0f0'
      ctx.font = '15pt monospace'

      // for each column put a random character at the end
      ypos.forEach((y, ind) => {
        // generate a random character
        const text = String.fromCharCode(Math.random() * 128)

        // x coordinate of the column, y coordinate is already given
        const x = ind * 20
        // render the character at (x, y)
        ctx.fillText(text, x, y)

        // randomly reset the end of the column if it's at least 100px high
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0
        // otherwise just move the y coordinate for the column 20px down,
        else ypos[ind] = y + 20
      })
    }

    // render the animation at 20 FPS.
    setInterval(matrix, 50)
  },
  methods: {
    aframeWorld() {
      window.open('/AframeWorld', '_blank')
    }
  }
}
</script>

<style></style>
