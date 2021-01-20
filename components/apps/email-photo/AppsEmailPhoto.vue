<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  TODO: submit to singles
  TODO: multi photos carousel
========================================================================================== -->

<template>
  <div>
    <div
      parent="body"
      default-index="1"
      color="primary"
      class="add-new-data-sidebar items-no-padding"
      spacer
      v-for="myPhoto in getPhotosDetails"
      :key="myPhoto.id"
    >
      <div class="flex items-center justify-between px-6 mt-3">
        <h4 class="mt-12" color="primary">{{ myPhoto.title }}</h4>
        <!-- <feather-icon
          icon="XIcon"
          @click="goBack"
          class="mt-8 cursor-pointer"
        ></feather-icon> -->
      </div>
      <vs-divider class="mb-0"></vs-divider>
      <div class="flex items-center justify-between px-6 mt-2">
        <span v-html="myPhoto.description">{{ myPhoto.description }}</span>
      </div>
      <div class="p-6">
        <!-- NAME -->
        <vs-input
          label="Title"
          name="appname"
          v-model="title"
          class="w-full mt-5"
        />
        <!-- DESCRIPTION -->
        <vs-textarea
          label="Tell us more"
          v-model="description"
          class="w-full mt-5"
        />

        <div id="app">
          <div class="w-full mt-5">
            <input label="File" type="file" multiple @change="onFileChange" />
          </div>
        </div>

        <br />
        <vs-divider color="primary" icon="check"></vs-divider>
        <br />
      </div>

      <vs-card actionable class="max-w-md px-6 mx-auto" v-if="preview">
        <div slot="header">
          <h3 color="primary">{{ title }}</h3>
        </div>
        <div slot="media" v-if="images">
          <div v-for="(image, index) in images" :key="index">
            <feather-icon
              icon="XIcon"
              @click="removeImage(index)"
              class="cursor-pointer"
            ></feather-icon>
            <img :src="image" />
          </div>
        </div>
        <div>
          <span>{{ description }}</span>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button @click="newApp(myPhoto)">Submit</vs-button>
            <vs-button color="danger" @click="goBack">Cancel</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

import firebase from 'firebase'

export default {
  props: {
    item_id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      myPhoto: {
        title: '',
        description: '',
      },
      getPhotosDetails: [],
      name: '',
      title: '',
      description: '',
      component: '',
      currentComponent: '',
      imageName: '',
      imageFile: '',
      imageUrls: '',
      preview: false,
      image: '',
      images: [],
      comp: [],
    }
  },
  watch: {
    title: function () {
      this.preview = true
    },
    description: function () {
      this.preview = true
    },
  },
  computed: {
    item_unique() {
      return this.item_id ? this.item_id : this.$route.params.id
    },
  },
  created() {
    let vm = this
    let getPhoto = this.$fireStore
      .collection('apps')
      .doc('EmailPhoto')
      .collection('app')
      .doc(this.item_unique)
      .get()
      .then((doc) => {
        const document = doc.data()
        // do something with document
        vm.getPhotosDetails.push({
          id: doc.id,
          description: doc.data().desc,
          name: doc.data().name,
          title: doc.data().title,
          downloadURL: doc.data().url[0],
          downloadUrl: doc.data().url[0],
        })
      })

    //   .where('id', '==', this.item_unique)

    // getPhoto.onSnapshot((snapshot) => {
    //   snapshot.docChanges().forEach((change) => {
    //     let doc = change.doc
    //     this.getPhotosDetails.push({
    //       id: doc.id,
    //       description: doc.data().desc,
    //       name: doc.data().name,
    //       title: doc.data().title,
    //       downloadURL: doc.data().url[0],
    //       downloadUrl: doc.data().url[0],
    //     })
    //   })
    // })
  },

  methods: {
    goBack() {
      this.$router.go(-1)
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) return

      this.createImage(files)
    },
    createImage(files) {
      var vm = this
      for (var index = 0; index < files.length; index++) {
        this.imageName = files[0].name
        var reader = new FileReader()
        var getImage = ''
        reader.onload = function (event) {
          const imageUrl = event.target.result
          getImage = event.target.result
          vm.images.push(imageUrl)
        }

        this.imageUrls = this.images
        this.imageFile = files[0]
        reader.readAsDataURL(files[index])
      }
    },
    removeImage(index) {
      this.images.splice(index, 1)
    },
    newApp(photoID) {
      var storageRef = firebase.storage().ref()

      var mountainsRef = storageRef.child(`images/${this.imageName}`)
      let mydescription = this.description
      let mytitle = this.title
      mountainsRef
        .put(this.imageFile)
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.imageUrls = downloadURL
            const bucketName = this.bucketName
            const filePath = this.imageName

            let myphotoID = photoID.title
            let routeID = this.routeID
            let mydb

            mydb = this.$fireStore
              .collection(this.companyDetails.reseller)
              .doc('apps')
              .collection(this.companyDetails.id)
              .doc(this.$route.params.id)
              .collection('features')
              .doc(photoID.id)
              .collection('submitted')

            mydb.add({
              downloadURL,
              downloadUrl:
                `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/images` +
                '%2F' +
                `${encodeURIComponent(filePath)}?alt=media`,
              uid: firebase.auth().currentUser.uid,
              emailPhototitle: myphotoID,
              customer_name: this.userDetails.name,
              customer_surname: this.userDetails.surname,
              customer_display_name: this.userDetails.displayName,
              title: mytitle,
              description: mydescription,
              created_date: moment().format('DD-MM-YYYY'),
              created_month: moment().format('MM-YYYY'),
              timestamp: Date.now(),
            })
          })
        })
        .then(() => {
          this.successUpload()
          this.images = []
          ;(this.title = ''), (this.description = '')
        })
      // this.successUpload()

      // this.$router.go(-1)
    },

    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded',
      })
    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  /deep/ .vs-sidebar--background {
    z-index: 52010;
  }

  /deep/ .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  height: calc(100% - 4.3rem);
}
</style>
