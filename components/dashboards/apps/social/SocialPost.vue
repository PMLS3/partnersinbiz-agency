<!-- =========================================================================================

  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vs-card>
    <FormsTypesSocialPost
      @send-data="sendData"
      :posts="posts"
      :entity="entity"
      :branch="branch"
      :twtConfig="twtConfig"
      :fbConfig="fbConfig"
      :instaConfig="instaConfig"
    />
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
    fbConfig: { type: Object },
    instaConfig: { type: Object },
    posts: { required: false, type: Array, default: () => [] },
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
    schedule(data) {
      console.log('data', data)
      let vm = this

      // const obj = {
      //   title: this.title,
      //   startDate: date,
      //   endDate: date,
      //   time: time,
      //   scheduled_date: setDay,
      //   scheduled_hour: setHour,
      //   scheduled_minutes: minutes,
      //   tweets: this.tweets,
      //   label: this.labelLocal,
      //   url: this.url,
      //   u_uid: this.user.uid,
      //   b_uid: this.business.b_uid,
      //   config: this.config,
      //   type: 'Tweet',
      //   status: 'scheduled',
      // }
      //  if (this.config) {
      //  this.$fireStore
      //     .collection('tweets')
      //     .add(obj)
      //     .then(function () {
      //       obj.classes = `event-${vm.labelColor(vm.labelLocal)}`
      //       vm.$store.dispatch('calendar/addEvent', obj)
      //       vm.successUpload()
      //     })
      //     .catch(function (error) {
      //       console.error('Error writing document: ', error)
      //       vm.unsuccessUpload(error)
      //     })
      // } else {
      //   let error = 'Please enter your configuration file'
      //   vm.unsuccessUpload(error)
      // }
    },
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
