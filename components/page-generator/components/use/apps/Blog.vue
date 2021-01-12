<template>
  <div>
    <vs-row class="px-3" vs-w="12">
      <vs-col vs-type="flex" class="px-3 mt-10" vs-w="9" vs-sm="9" vs-xs="12">
        <vs-row class="mb-5 " vs-w="12">
          <vs-col
            vs-w="4"
            vs-sm="6"
            vs-xs="12"
            class="px-2 py-2 colDiv"
            v-for="blog in blogs"
            :key="blog.id"
          >
            <vs-card style="background: rgba(255, 255, 255, 0.3)">
              <!-- <nuxt-link
                :to="{ name: `blogs-single`, params: { id: blog.id } }"
              > -->
              <img
                :src="blog.image"
                :alt="blog.title"
                class="responsive"
                style="height: auto; width: 100%;  border-radius: 15%"
              />
              <vs-chip color="primary" class="chip">{{
                blog.category
              }}</vs-chip>

              <h3>{{ blog.title }}</h3>
              <small>{{ blog.date }}</small>
              <h6 color="primary">{{ blog.author_name }}</h6>
              <br />
              <span v-html="blog.html.substring(0, 30) + '...'"></span>
              <br />
              <!-- </nuxt-link> -->
              <!-- <nuxt-link
                :to="{ name: `blogs-single`, params: { id: blog.id } }"
              > -->
              <vs-button
                size="small"
                style="width: 100%; margin: 4px"
                type="border"
                color="primary"
                @click="readMore(blog)"
                >READ MORE</vs-button
              >
              <!-- </nuxt-link> -->
            </vs-card>
          </vs-col>
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
          <!-- <sign-up /> -->

          <vs-divider
            icon-pack="feather"
            icon="icon-check"
            position="center"
            color="rgb(29, 222, 194)"
          ></vs-divider>
          <h4>Latest Blogs</h4>
          <div>
            <vs-row class="mt-6">
              <vs-col vs-w="6" v-if="blogs.length > 0">
                <router-link
                  :to="{ name: `blogs-single`, params: { id: blogs[0].id } }"
                >
                  <img
                    :src="blogs[0].image || `@assets/images/pages/grass.jpg`"
                    :alt="blogs[0].title"
                    class="responsive"
                    style="width: 90%; max-height: 130px"
                  />
                  <small>{{ blogs[0].title.substring(0, 20) + '...' }}</small>
                  <br />
                  <small>{{ blogs[0].date }}</small>
                </router-link>
              </vs-col>

              <vs-col vs-w="6" v-if="blogs.length > 1">
                <router-link
                  :to="{ name: `blogs-single`, params: { id: blogs[1].id } }"
                >
                  <img
                    :src="blogs[1].image || `@assets/images/pages/grass.jpg`"
                    :alt="blogs[1].title"
                    class="responsive"
                    style="width: 90%; max-height: 130px"
                  />
                  <small>{{ blogs[1].title.substring(0, 20) + '...' }}</small>
                  <br />
                  <small>{{ blogs[1].date }}</small>
                </router-link>
              </vs-col>
            </vs-row>

            <vs-row class="px-3 mt-6" v-if="blogs.length > 2">
              <vs-col vs-w="6" v-if="blogs.length > 2">
                <router-link
                  :to="{ name: `blogs-single`, params: { id: blogs[2].id } }"
                >
                  <img
                    :src="blogs[2].image || `@assets/images/pages/grass.jpg`"
                    :alt="blogs[2].title"
                    class="responsive"
                    style="width: 90%; max-height: 130px"
                  />
                  <small>{{ blogs[2].title.substring(0, 20) + '...' }}</small>
                  <br />
                  <small>{{ blogs[2].date }}</small>
                </router-link>
              </vs-col>
              <vs-col vs-w="6" v-if="blogs.length > 3">
                <router-link
                  :to="{ name: `blogs-single`, params: { id: blogs[3].id } }"
                >
                  <img
                    :src="blogs[3].image || `@assets/images/pages/grass.jpg`"
                    :alt="blogs[3].title"
                    class="responsive"
                    style="width: 90%; max-height: 130px"
                  />
                  <small>{{ blogs[3].title.substring(0, 20) + '...' }}</small>
                  <br />
                  <small>{{ blogs[3].date }}</small>
                </router-link>
              </vs-col>
            </vs-row>
            <vs-divider
              icon-pack="feather"
              icon="icon-check"
              position="center"
              color="rgb(29, 222, 194)"
            ></vs-divider>
            <h4>Categories</h4>
            <div v-for="cat in Categories" :key="cat.id">
              <small>{{ cat.category }}</small>
            </div>

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
    <vs-popup fullscreen :title="single_blog.title" :active.sync="popupActivo4">
      <div>
        <vs-row>
          <vs-col
            vs-type="flex"
            vs-justify="center"
            vs-align="center"
            vs-sm="6"
            vs-xs="12"
          >
            <vx-card>
              <div slot="no-body">
                <img
                  :src="single_blog.image"
                  alt="content-img"
                  class="responsive card-img-top"
                  style="width: 100%"
                />
              </div>
              <div ref="content">
                <h3>{{ single_blog.title }}</h3>
                <vs-divider></vs-divider>

                <div v-html="single_blog.html"></div>
              </div>

              <vs-divider></vs-divider>
              <div class="flex flex-wrap justify-between">
                <vs-button
                  class="mt-4 shadow-lg"
                  color="primary"
                  @click="ViewAll"
                  >View All</vs-button
                >
                <vs-button
                  class="mt-4 shadow-lg"
                  type="border"
                  color="primary"
                  @click="download(single_blog)"
                  >Download</vs-button
                >
              </div>
            </vx-card>
          </vs-col>
        </vs-row>
      </div>
    </vs-popup>
  </div>
</template>
<script>
// import signUp from '@/components/sign-up/index.vue'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
export default {
  props: ['schema', 'index', 'mainIndex'],
  //   components: { signUp },
  data() {
    return {
      selected: [],

      users: [],
      newapps: [],
      blogs: [],
      Categories: [],
      name: '',
      email: '',
      itemsPerPage: 4,
      popupActivo4: false,
      single_blog: {},
      isMounted: false,
      addNewDataSidebar: false,
      addNewDataSidebarGroup: false
    }
  },
  computed: {
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    },
    activeUserInfo() {
      return this.$store.state.user.app_active_user
    }
  },
  watch: {
    blogs: function() {
      this.$store.dispatch('blog/blogsCreate', this.blogs)
    },
    Categories: function() {
      this.$store.dispatch('blog/categoriesCreate', this.Categories)
    }
  },
  methods: {
    readMore(blog) {
      this.single_blog = blog
      this.popupActivo4 = true
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
          function(canvas) {
            const img = canvas.toDataURL('image/jpeg', 0.8)
            doc.addImage(img, 'JPEG', 20, 20)
            doc.save(pdfName + '.pdf')
          }
        )
      }
    }
  },

  created() {
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    var yyyy = today.getFullYear()
    let thitoday = dd + ' ' + mm + ' ' + yyyy

    console.log('today', thitoday)

    this.isMounted = true

    let blogRetrieve

    blogRetrieve = this.$fireStore
      .collection('apps')
      .doc('apps')
      .collection(this.activeBusinessInfo.b_uid)
      .doc(this.schema.title)
      .collection(this.schema.title)
      .doc(this.schema.id)
      .collection('added')

    blogRetrieve.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let doc = change.doc
        this.blogs.push({
          id: doc.id,
          title: doc.data().title,
          date: doc.data().publish_date,
          author: doc.data().author,
          author_name: doc.data().author,
          image: doc.data().image[0],
          category: doc.data().cat,
          html: doc.data().desc
        })
      })
    })
    // let newCategory
    //   if(this.is_blank){
    //     console.log('route', routeID)
    //        this.$store.dispatch("route/blankRoute", routeID)

    //   newCategory = this.$fireStore
    //       .collection(this.resellerName)
    //       .doc('apps')
    //       .collection(this.companyDetails.id)
    //        .doc("blank_page")
    //         .collection(routeID)
    //       .doc(this.$route.params.id)
    //       .collection("category");
    //   }else{
    //   newCategory = this.$fireStore
    //       .collection(this.resellerName)
    //       .doc('apps')
    //       .collection(this.companyDetails.id)
    //       .doc(this.$route.params.id)
    //       .collection("category");
    //   }

    //     newCategory.onSnapshot(snapshot => {
    //       snapshot.docChanges().forEach(change => {
    //         let doc = change.doc;
    //         this.Categories.push({
    //           id: doc.id,
    //           component: doc.data().component,
    //           componentname: doc.data().componentname,
    //           category: doc.data().category
    //         });
    //       });
    //     });
  }
}
</script>

<style lang="scss">
.colDiv {
  position: relative;
}
.chip {
  position: absolute;
  top: 0;
  left: 0;
}
#data-list-thumb-view {
  .vs-con-table {
    .vs-table--header {
      display: flex;
      flex-wrap: wrap-reverse;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search {
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          & + i {
            left: 1rem;
          }

          &:focus + i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr {
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
        td {
          padding: 10px;
          &:first-child {
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
          }
          &:last-child {
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
          }
          &.img-container {
            // width: 1rem;
            // background: #fff;

            span {
              display: flex;
              justify-content: center;
            }

            .product-img {
              height: 110px;
            }
          }
        }
        td.td-check {
          padding: 20px !important;
        }
      }
    }

    .vs-table--thead {
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text {
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check {
        padding: 0 15px !important;
      }
      tr {
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
