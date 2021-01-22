<template>
  <div>
    Ready to receive image!
    <img id="image" :src="imageData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageData: '',
      socket: null,
      stream: null
    }
  },
  mounted() {
    let { stream, socket } = this.$nuxtSocket({
      channel: '/stream',
      socketStream: '~~sampleImage'
    })
    if (process.client) {
      const filename = 'profile.jpg'
      let imageBytes = new Uint8Array()

      console.log('socke', socket)
      socket.emit('hello', { data: 123 }, resp => {
        console.log('hello resp rxd!', resp)
      })
      stream
        .on('data', d => {
          imageBytes = [...imageBytes, ...d]
        })
        .on('end', () => {
          const imgStr = btoa(String.fromCharCode(...imageBytes))
          this.imageData = `data:image/jpg;base64, ${imgStr}`
        })
    }
  }
}
</script>
