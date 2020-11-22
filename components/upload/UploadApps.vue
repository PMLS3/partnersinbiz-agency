<template>
  <div class="flex flex-row ">
    <vs-button icon="amp_stories"></vs-button>
    <vs-button icon="storage"></vs-button>

    <vs-button
      class="ml-1"
      icon="add_circle_outline"
      @click="popupActivo = true"
    ></vs-button>

    <vs-popup
      class="holamundo"
      :title="item.title"
      :active.sync="popupActivo"
      style="z-index:300; margin-top: 5%; "
    >
      <div class="px-6 pb-12">
        <UiMiscAccessControl v-if="control" />
        <FormGenerator :schema="schema" v-model="formData" />
        <vs-button @click="addForm" class="mt-8">Submit</vs-button>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import moment from "moment";
import { ref, useContext, computed, onMounted } from "@nuxtjs/composition-api";

export default {
  name: "apps-cat",
  props: {
    item: {
      type: Object,
      required: true
    },
    schema: {
      type: Array,
      required: true
    },

    control: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    let vm = this;
    const { store, route, $fireStore } = useContext();

    let popupActivo = ref(false);
    let formData = ref({});

    let business = computed(() => store.state.business.active_business);
    let user = computed(() => store.state.auth.main_user);
    let reseller = computed(() => store.state.business.reseller_id);
    let sub_reseller = computed(() => store.state.business.sub_sellers);
    let categories = computed(() => store.state.app.categories);
    let color = computed(() => {
      let color;
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].title == vm.formData.category) {
          color = this.categories[i].color;
        }
      }
      return color;
    });

    function addForm() {
      console.log("WHAT", $vs);
      console.log("ITEM", props.item);
      console.log("itme", props.item.item);
      console.log("itme", props.item.type);

      console.log("itme", formData);

      if (props.item.type == "Category") {
        let form = formData.value;
        form.i_type = props.item.item;
        form.date = moment().format("DD-MM-YYYY");
        form.disp_name = user.value.disp_name;
        form.u_uid = user.value.uid;
        form.b_uid = business.value.b_uid;
        form.reseller = [reseller.value, ...sub_reseller.value];
        $fireStore
          .collection(props.item.item)
          .add(form)
          .then(() => {
            successUpload();
          })
          .catch(err => {
            unsuccessUpload(err);
          });
      } else if (props.item.item == "Images") {
        for (let i = 0; i < formData.value.url.length; i++) {
          let form = { url: formData.url[i] };
          form.title = formData.value.title;
          form.desc = formData.value.desc;
          form.i_type = props.item.item;
          form.date = moment().format("DD-MM-YYYY");
          form.disp_name = user.value.disp_name;
          form.u_uid = user.value.uid;
          form.b_uid = business.value.b_uid;
          form.reseller = [reseller.value, ...sub_reseller.value];
          form.id = route.params.id;
          $fireStore

            .collection(props.item.item)
            .add(form)
            .then(() => {
              vm.successUpload();
            })
            .catch(err => {
              vm.unsuccessUpload(err);
            });
        }
      } else if (props.item.item == "MusicSingle") {
        console.log("form", formData.value);
        for (let i = 0; i < formData.url.length; i++) {
          let form = formData.value;
          form.url = formData.value.url[i];
          form.url.type = "music";
          form.title = formData.value.title;
          form.desc = formData.value.desc;
          form.i_type = props.item.item;
          form.date = moment().format("DD-MM-YYYY");
          form.disp_name = user.value.disp_name;
          form.u_uid = user.value.uid;
          form.b_uid = business.value.b_uid;
          form.reseller = [reseller.value, ...sub_reseller.value];
          form.id = route.params.id;
          $fireStore

            .collection(item.item)
            .add(form)
            .then(() => {
              successUpload();
            })
            .catch(err => {
              unsuccessUpload(err);
            });
        }
      } else if (
        props.item.type == "BlogSingle" ||
        item.type == "EventsSingle"
      ) {
        let form = formData.value;
        form.color = color.value;
        form.i_type = props.item.item;
        form.date = moment().format("DD-MM-YYYY");
        form.disp_name = user.value.disp_name;
        form.u_uid = user.value.uid;
        form.b_uid = business.value.b_uid;
        form.reseller = [reseller.value, ...sub_reseller.value];
        form.id = $route.params.id;
        $fireStore

          .collection(props.item.item)
          .add(form)
          .then(() => {
            successUpload();
          })
          .catch(err => {
            unsuccessUpload(err);
          });
      } else if (props.item.type == "Single") {
        let form = formData.value;
        form.i_type = props.item.item;
        form.date = moment().format("DD-MM-YYYY");
        form.disp_name = user.value.disp_name;
        form.u_uid = user.value.uid;
        form.b_uid = business.value.b_uid;
        form.reseller = [reseller.value, ...sub_reseller.value];
        form.id = $route.params.id;
        $fireStore
          .collection("apps")
          .doc("apps")
          .collection(props.item.item)
          .add(form)
          .then(() => {
            successUpload();
          })
          .catch(err => {
            unsuccessUpload(err);
          });
      }
    }
    function successUpload() {
      $vs.notify({
        color: "success",
        title: `${this.item.item} added`,
        text: "Whoop whoop, been uploaded"
      });
    }
    function successDelete() {
      $vs.notify({
        color: "success",
        title: `${this.item.item} Deleted`,
        text: "Successful deletion"
      });
    }
    function unsuccessUpload(er) {
      $vs.notify({
        color: "danger",
        title: "Oh no",
        text: `Error ${er}`
      });
    }
    return { popupActivo, formData, addForm };
  }
};
</script>
