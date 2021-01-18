<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------
TODO: make items clickable 
========================================================================================== -->

<template>
  <div>
    <div>
      <div
        parent="body"
        default-index="1"
        color="primary"
        class="add-new-data-sidebar items-no-padding"
        spacer
        v-for="myPhoto in items"
        :key="myPhoto.id"
      >
        <div class="flex items-center justify-between px-6 mt-3">
          <h4 class="mt-12" color="primary">{{ myPhoto.title }}</h4>
          <feather-icon
            icon="XIcon"
            @click="goBack"
            class="mt-8 cursor-pointer"
          ></feather-icon>
        </div>
        <vs-divider class="mb-0"></vs-divider>
        <div class="flex items-center justify-between px-6 mt-2">
          <span>{{ myPhoto.description }}</span>
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

        <vs-card actionable class="px-6" v-if="preview">
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
              <vs-button
                color="primary"
                type="gradient"
                @click="newApp(myPhoto)"
                >Submit</vs-button
              >
              <vs-button color="danger" type="gradient" @click="goBack"
                >Cancel</vs-button
              >
            </vs-row>
          </div>
        </vs-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppsEvents',
  props: {
    item_id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      items: [],
    }
  },
  computed: {
    item_unique() {
      return this.item_id ? this.item_id : this.$route.params.id
    },
  },
  created() {
    let vm = this
    let ref = this.$fireStore
      .collection('apps')
      .doc('EventsSingle')
      .collection('app')
      .where('id', '==', this.item_unique)

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          let doc = change.doc
          let data = doc.data()
          let datas = {
            start: `${doc.data().date_start} ${doc.data().time_start}`,
            end: `${doc.data().date_end} ${doc.data().time_end}`,
            title: doc.data().title,
            icon: 'shopping_cart', // Custom attribute.
            content: doc.data().desc,
            contentFull: doc.data().description,
          }
          data.id = doc.id
          vm.items.push(datas)
        }
      })
    })
  },
}
</script>

<style></style>
