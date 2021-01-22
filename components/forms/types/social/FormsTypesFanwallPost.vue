<template>
  <div class="w-full h-full">
    <vs-input
      name="event-name"
      class="w-full mb-4"
      label-placeholder="Post Title"
      v-model="title"
    ></vs-input>

    <div :key="index" v-for="(twt, index) in postss">
      <vs-textarea
        class="w-full"
        label="Post"
        v-model="postss[index].textarea"
      />

      <vs-tooltip text="Add a Image" position="left">
        <UploadImage
          class="mt-4 mb-4"
          @input="input"
          @indexChange="change(index)"
        />
      </vs-tooltip>
      <div v-for="(img, i) in postss[index].imgs" :key="i">
        <img :src="img" class="h-24" />
      </div>
    </div>

    <!-- <vs-tooltip text="Add a sub Post" position="left" class="float-right">
      <vs-button
        color="success"
        type="filled"
        icon="library_add"
        @click="addAnother"
      ></vs-button>
    </vs-tooltip> -->

    <vs-button @click="preview">Submit Posts</vs-button>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    posts: { required: false, type: Array, default: () => [] },
  },

  data() {
    return {
      id: 0,
      title: '',
      postss: [
        {
          textarea: '',
          imgs: [],
        },
      ],
      textarea: '',
      counterDanger: false,
      datetime: null,

      url: '',
      blue: 'blue',
      green: 'green',
      gray: 'gray',
      can_post: true,
    }
  },

  created() {
    console.log('post', this.posts)
    if (this.posts.length > 0) {
      this.postss = this.posts
      console.log('postss', this.postss)
    }
  },
  methods: {
    change(index) {
      console.log(index)
      this.id = index
    },
    addAnother() {
      this.postss.push({
        textarea: '',
        imgs: [],
      })
    },

    preview() {
      let vm = this

      const obj = {
        title: this.title,
        posts: this.postss,
        url: this.url,
      }
      if (this.can_post) {
        $nuxt.$emit('send-data', obj)
        this.can_post = false
        setTimeout(() => {
          this.can_post = true
        }, 2000)
      }
    },

    input(data) {
      this.postss[this.id].imgs = data
    },
  },
}
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>
