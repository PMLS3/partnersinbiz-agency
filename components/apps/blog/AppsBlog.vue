<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <div>
    <vs-row class="px-3 mt-12" vs-w="12">
      <vs-col vs-type="flex" class="px-3 mt-10" vs-w="9" vs-sm="9" vs-xs="12">
        <vs-row class="mb-5" vs-w="12" v-if="blogMain">
          <vs-col
            vs-w="4"
            vs-sm="6"
            vs-xs="12"
            class="px-2 py-2 colDiv"
            v-for="item in items"
            :key="item.id"
          >
            <vs-card style="background: rgba(255, 255, 255, 0.3)">
              <img
                :src="item.img[0]"
                :alt="item.title"
                class="responsive"
                style="height: auto; width: 100%; border-radius: 15%"
              />
              <vs-chip color="primary" class="chip">{{
                item.category
              }}</vs-chip>

              <h3>{{ item.title }}</h3>
              <small>{{ item.date }}</small>
              <h6 color="primary">{{ item.author }}</h6>
              <br />
              <span
                v-if="item.desc"
                v-html="item.desc.substring(0, 30) + '...'"
              ></span>
              <br />

              <vs-button
                size="small"
                style="width: 100%; margin: 4px"
                type="border"
                color="primary"
                @click="ReadMore(item)"
                >READ MORE</vs-button
              >
            </vs-card>
          </vs-col>
        </vs-row>
        <vs-row v-else>
          <vx-card class="m-6">
            <div slot="no-body">
              <img
                :src="blog.img[0]"
                alt="content-img"
                class="responsive card-img-top"
                style="width: 100%"
              />
            </div>
            <div ref="content">
              <h3>{{ blog.title }}</h3>
              <vs-divider></vs-divider>

              <div v-html="blog.desc"></div>
            </div>

            <vs-divider></vs-divider>
            <div class="flex flex-wrap justify-between">
              <vs-button
                class="mt-4 shadow-lg"
                color="primary"
                @click="viewAll()"
                >View All</vs-button
              >
              <vs-button
                class="mt-4 shadow-lg"
                type="border"
                color="primary"
                @click="download(blog)"
                >Download</vs-button
              >
            </div>
          </vx-card>
        </vs-row>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="top"
        vs-w="3"
        vs-sm="3"
        vs-xs="12"
      >
        <div class="px-3 py-3">
          <vs-divider
            icon-pack="feather"
            icon="icon-check"
            position="center"
            color="rgb(29, 222, 194)"
          ></vs-divider>
          <h4>Latest Blogs</h4>
          <div>
            <vs-row class="mt-6">
              <vs-col vs-w="6" v-if="items.length > 0">
                <img
                  :src="items[0].img[0] || `@assets/images/pages/grass.jpg`"
                  :alt="items[0].title"
                  class="responsive"
                  style="width: 90%; max-height: 130px"
                  @click="ReadMore(items[0])"
                />
                <small v-if="items[0].desc">{{
                  items[0].title.substring(0, 20) + '...'
                }}</small>
                <br />
                <small>{{ items[0].date }}</small>
              </vs-col>

              <vs-col vs-w="6" v-if="items.length > 1">
                <img
                  :src="items[1].img[0] || `@assets/images/pages/grass.jpg`"
                  :alt="items[1].title"
                  class="responsive"
                  style="width: 90%; max-height: 130px"
                  @click="ReadMore(items[1])"
                />
                <small v-if="items[0].desc">{{
                  items[1].title.substring(0, 20) + '...'
                }}</small>
                <br />
                <small>{{ items[1].date }}</small>
              </vs-col>
            </vs-row>

            <vs-row class="px-3 mt-6" v-if="items.length > 2">
              <vs-col vs-w="6" v-if="items.length > 2">
                <img
                  :src="items[2].img[0] || `@assets/images/pages/grass.jpg`"
                  :alt="items[2].title"
                  class="responsive"
                  style="width: 90%; max-height: 130px"
                  @click="ReadMore(items[2])"
                />
                <small v-if="items[2].desc">{{
                  items[2].title.substring(0, 20) + '...'
                }}</small>
                <br />
                <small>{{ items[2].date }}</small>
              </vs-col>
              <vs-col vs-w="6" v-if="items.length > 3">
                <img
                  :src="items[3].img[0] || `@assets/images/pages/grass.jpg`"
                  :alt="items[3].title"
                  class="responsive"
                  style="width: 90%; max-height: 130px"
                  @click="ReadMore(items[3])"
                />
                <small v-if="items[3].desc">{{
                  items[3].desc.substring(0, 20) + '...'
                }}</small>
                <br />
                <small>{{ items[3].date }}</small>
              </vs-col>
            </vs-row>
            <vs-divider
              icon-pack="feather"
              icon="icon-check"
              position="center"
              color="rgb(29, 222, 194)"
            ></vs-divider>
            <h4>Categories</h4>
            <vs-chip
              transparent
              :color="cat.color"
              v-for="(cat, index) in categories"
              :key="index"
            >
              {{ cat.title }}
            </vs-chip>

            <vs-divider
              icon-pack="feather"
              icon="icon-check"
              position="center"
              color="rgb(29, 222, 194)"
            ></vs-divider>
            <h4>Authors</h4>
          </div>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
export default {
  name: 'AppsBlog',
  props: {
    item_id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      items: [],
      blogMain: true,
      blog: {},
    }
  },
  computed: {
    item_unique() {
      return this.item_id ? this.item_id : this.$route.params.id
    },
    categories() {
      return this.$store.state.app.categories
    },
    business() {
      return this.$store.state.business.active_business
    },
    main_user() {
      return this.$store.state.auth.main_user
    },
  },
  methods: {
    ReadMore(item) {
      let vm = this
      this.blog = item
      setTimeout(function () {
        vm.blogMain = false
      }, 500)
    },
    viewAll() {
      let vm = this
      setTimeout(function () {
        vm.blogMain = true
      }, 500)
    },
    download(blog) {
      console.log('blo', blog)
      if (process.client) {
        let pdfName = blog.title
        var doc = new jsPDF()
        // doc.text(blog.html, 10, 10);
        // doc.save(pdfName + '.pdf');

        /** WITH CSS */
        var canvasElement = document.createElement('canvas')
        html2canvas(this.$refs.content, { canvas: canvasElement }).then(
          function (canvas) {
            const img = canvas.toDataURL('image/jpeg', 0.8)
            doc.addImage(img, 'JPEG', 20, 20)
            doc.save(pdfName + '.pdf')
          }
        )
      }
    },
    getCategories(id) {
      let vm = this
      let catRef = this.$fireStore
        .collection('apps')
        .doc('EventsSingle')
        .collection('category')
        .where('b_uid', '==', id)

      catRef.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            let doc = change.doc
            let data = doc.data()
            data.id = doc.id
            vm.categories.push({
              id: doc.id,
              title: doc.data().title,
              color: doc.data().color,
            })
          }
        })
      })
      vm.$store.commit('app/CATEGORIES_SET', vm.categories)
    },
  },
  created() {
    let vm = this
    let id = ''
    let ref = this.$fireStore
      .collection('apps')
      .doc('BlogSingle')
      .collection('app')
      .where('id', '==', this.item_unique)

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          let doc = change.doc
          let data = doc.data()
          id = doc.data().b_uid
          data.id = doc.id
          vm.items.push(data)
        }
      })
    })
    // .then(() => {
    setTimeout(() => {
      vm.getCategories(id)
    }, 500)
    // })
  },
}
</script>
