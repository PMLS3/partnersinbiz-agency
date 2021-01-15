<template>
  <div>
    <div v-for="(item, index) in form" :key="index">
      <div class="flex float-right mt-4">
        <vs-button
          icon="upgrade"
          type="line"
          v-if="index != 0"
          @click="move(index, index - 1)"
        ></vs-button>
        <vs-button
          icon="vertical_align_bottom"
          type="line"
          v-if="index != form.length - 1"
          @click="move(index, index + 1)"
        ></vs-button>
      </div>
      <vs-input
        name="event-name"
        class="w-full mt-4"
        label-placeholder="Title"
        v-model="form[index].title"
      ></vs-input>

      <quill-editor
        class="mt-4 min-h-350"
        v-model="form[index].content"
      ></quill-editor>
      <vs-tooltip
        text="After how many days should this mail be sent after user has been added?"
        position="left"
        class="mt-4 ml-4"
        v-if="campaign_type == 'Sequence'"
      >
        <vs-input-number
          size="mini"
          class="w-24 mt-4 ml-6"
          v-model="form[index].days"
          label="Days:"
        />
      </vs-tooltip>

      <vs-tooltip
        text="After how many days should this mail be sent after user has been added?"
        position="left"
        class="mt-4 ml-4"
        v-else
      >
        <datepicker
          placeholder="Select Date"
          v-model="form[index].date"
        ></datepicker>
      </vs-tooltip>
      <!-- <small>After how many days of signup</small> -->
      <!-- <vs-input-number size="mini" class="mt-4" v-model="form[index].days"/> <small>After how many days</small> -->
    </div>

    <vs-tooltip
      text="Add to the sequence"
      position="left"
      class="float-right mt-4"
    >
      <vs-button
        color="success"
        type="filled"
        icon="library_add"
        @click="addAnother"
      ></vs-button>
    </vs-tooltip>

    <vs-button @click="submitEmails" class="mt-8 mb-8"
      >Submit Sequence</vs-button
    >
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import moment from 'moment'
export default {
  props: {
    campaign_type: { type: String, default: 'Sequence' },
  },
  components: {
    quillEditor,
    Datepicker: () => (process.client ? import('vuejs-datepicker') : null),
  },
  data() {
    return {
      form: [
        {
          content: ``,
          title: '',
          days: 0,
          date: '',
        },
      ],
    }
  },
  computed: {
    route_id() {
      return this.$store.state.app.route_id
    },
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
    entity() {
      if (this.branch == 'Company') {
        return 'business'
      } else {
        return 'branch'
      }
    },
    branch() {
      return this.$store.state.app.selected_branch
    },
  },
  create() {
    if (this.camaign_data) {
      this.form = this.campaign_emails
    }
  },
  methods: {
    move(old_index, new_index) {
      console.log('move', old_index, new_index)
      let arr = this.form
      while (old_index < 0) {
        old_index += arr.length
      }
      while (new_index < 0) {
        new_index += arr.length
      }
      if (new_index >= arr.length) {
        var k = new_index - arr.length
        while (k-- + 1) {
          arr.push(undefined)
        }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0])
      console.log('arr', arr)
    },
    addAnother() {
      let day = parseInt(this.form[this.form.length - 1].days) + 1
      this.form.push({
        content: ``,
        title: '',
        days: day,
        date: '',
      })
    },
    submitEmails() {
      let vm = this
      for (let i = 0; i < this.form.length; i++) {
        let payload = {}
        console.log('form', this.form[i])
        if (this.campaign_type == 'Sequence') {
          payload = {
            sequence_nr: i,
            content: this.form[i].content,
            title: this.form[i].title,
            date: parseInt(this.form[i].days),
          }
        } else {
          payload = {
            sequence_nr: i,
            content: this.form[i].content,
            title: this.form[i].title,
            date: moment(this.form[i].date).format('YYYY-MM-DD'),
          }
        }

        payload.branch = this.branch
        payload.uid = this.user.uid
        payload.b_uid = this.business.b_uid
        payload.type = this.campaign_type
        payload.active = true
        payload.queued = 0
        payload.sent = 0
        payload.delivered = 0
        payload.opened = 0
        payload.clicked = 0
        payload.response = 0
        payload.bounced = 0
        payload.opt_out = 0

        console.log('payload', payload)
        this.$fireStore
          .collection('apps')
          .doc('Email-Campaigns')
          .collection('app')
          .doc(this.route_id)
          .collection('emails')
          .add(payload)
          .then(() => {
            vm.success()
          })
          .catch((err) => {
            vm.failure(err)
          })
      }
      setTimeout(() => {
        $nuxt.$emit('successEmit')
      }, 1000)
    },
    success() {
      this.$vs.notify({
        title: 'Success',
        text: 'Loaded your mail',
        color: 'green',
      })
    },
    failure(err) {
      this.$vs.notify({
        title: 'Oops',
        text: `${err}`,
        color: 'red',
      })
    },
  },
}
</script>
