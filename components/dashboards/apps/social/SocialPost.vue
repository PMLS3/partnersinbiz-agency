<!-- =========================================================================================

  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vs-card>
    <FormsTypesSocialPost @send-data="sendData" />
  </vs-card>
</template>

<script>
export default {
  components: {},
  props: {
    entity: { type: String, default: 'person' },
    handle: { type: String, default: '' },
    branch: { type: String, default: '' },
    twtConfig: { type: Object },
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    sendData(data) {
      console.log('sendData', data)
      //     post_now: false,
      //   save_to_drafts: false,
      //   schedule: false,
      //   for_all: false,
      //   for_branch: false,
      //   to_instagram: false,
      //   to_twitter: false,
      //   to_facebook: false,
      console.log('result', data.post_now)
      if (data.post_now) {
        console.log('post now')
        this.postNow(data)
      }

      if (data.save_to_drafts) {
        this.saveToDrafts(data)
      }

      if (data.schedule) {
        this.schedule(data)
      }
    },
    postNow(data) {
      if (data.to_twitter) {
        console.log('here')
        this.postNowTwitter(data)
      }

      if (data.to_facebook) {
        this.postNowFacebook(data)
      }

      if (data.to_instagram) {
        this.postNowInstagram(data)
      }
    },
    postNowTwitter(data) {
      let vm = this
      //   let message = this.message
      //   if (this.images) {
      //     for (let i = 0; i < this.images.length; i++) {
      //       message = message + ' ' + this.images[i] + ' '
      //     }
      //   }
      let url = data.posts[0].imgs[0]
      console.log(url)
      let config = this.twtConfig
      let message = 'here'

      console.log('Data: ' + config)
      console.log(config)

      // this.convertImgToBase64(url, function (base64Img) {
      //   console.log(base64Img)
      // })

      this.$axios
        .$post('/api/twitter/media_upload', {
          config: config,
          message: message,
          url: url,
        })
        .then(
          (response) => {
            vm.successUpload('TWEETED')
          },
          (error) => {
            console.log(error)
            vm.unsuccessUpload(error)
          }
        )
    },
    convertImgToBase64(url, callback, outputFormat) {
      console.log('URL', url)
      if (process.client) {
        var canvas = document.createElement('CANVAS')
        var ctx = canvas.getContext('2d')
        var img = new Image()
        // img.crossOrigin = 'Anonymous'
        img.onload = function () {
          canvas.height = img.height
          canvas.width = img.width
          ctx.drawImage(img, 0, 0)
          var dataURL = canvas.toDataURL(outputFormat || 'image/png')
          callback.call(this, dataURL)
          // Clean up
          canvas = null
        }
        img.src = url
      }
    },

    postNowFacebook(data) {},
    postNowInstagram(data) {},
    saveToDrafts(data) {},
    schedule(data) {},
    success(msg) {
      this.$vs.notify({
        color: 'success',
        title: `${msg.title}`,
        text: `${msg.text}`,
      })
    },
    unsuccessfull(err) {
      this.$vs.notify({
        color: 'danger',
        title: 'Oops',
        text: `${err}`,
      })
    },
  },
}
</script>

<style lang="scss"></style>
