<!-- =========================================================================================
    File Name: EmailSidebar.vue
    Description: Email Application Sidebar(Filter) (Inbox)
    ----------------------------------------------------------------------------------------
 
========================================================================================== -->

<template>
  <div class="h-full email__email-sidebar">
    <div class="clearfix m-6">
      <vs-button
        class="w-full bg-primary-gradient"
        icon-pack="feather"
        icon="icon-edit"
        @click="activePrompt = true"
        >Compose</vs-button
      >
    </div>

    <!-- compose email -->
    <vs-prompt
      class="email-compose"
      title="New Message"
      accept-text="Send"
      @cancel="clearFields"
      @accept="sendMail"
      @close="clearFields"
      :is-valid="validateForm"
      :active.sync="activePrompt"
    >
      <component
        :is="scrollbarTag"
        class="p-4 scroll-area"
        :settings="settings"
        :key="$vs.rtl"
      >
        <form @submit.prevent>
          <vs-input
            name="mailTo"
            label-placeholder="To"
            v-model="mailTo"
            class="w-full mb-6"
            color="success"
          />
          <vs-input
            name="mailSubject"
            label-placeholder="Subject"
            v-model="mailSubject"
            class="w-full mb-6"
          />
          <vs-input
            name="mailCC"
            label-placeholder="CC"
            v-model="mailCC"
            class="w-full mb-6"
          />
          <vs-input
            name="mailBCC"
            label-placeholder="BCC"
            v-model="mailBCC"
            class="w-full mb-6"
          />
          <quill-editor v-model="mailMessage" :options="editorOption" />
          <vs-upload
            multiple
            text="Attachments"
            :show-upload-button="false"
            class="compose-mail-attachment"
          />
        </form>
      </component>
    </vs-prompt>

    <component
      :is="scrollbarTag"
      class="email-filter-scroll-area"
      :settings="settings"
      :key="$vs.rtl"
    >
      <div class="flex flex-col px-6 pb-2">
        <!-- inbox -->
        <div
          tag="span"
          @click="updateFilter('inbox')"
          class="flex items-center justify-between cursor-pointer"
          :class="{ 'text-primary': mailFilter == 'inbox' }"
        >
          <div class="flex items-center mb-2">
            <feather-icon
              icon="MailIcon"
              :svgClasses="[
                { 'text-primary stroke-current': mailFilter == 'inbox' },
                'h-6 w-6',
              ]"
            ></feather-icon>
            <span class="ml-3 text-lg">Inbox</span>
          </div>
          <template v-if="emailMeta.unreadMails">
            <vs-chip
              class="number"
              color="primary"
              v-if="emailMeta.unreadMails.folder.inbox.length > 0"
              >{{ emailMeta.unreadMails.folder.inbox.length }}</vs-chip
            >
          </template>
        </div>

        <!-- sent -->
        <div
          tag="span"
          @click="updateFilter('sent')"
          class="flex items-center mt-4 mb-2 cursor-pointer"
          :class="{ 'text-primary': mailFilter == 'sent' }"
        >
          <feather-icon
            icon="SendIcon"
            :svgClasses="[
              { 'text-primary stroke-current': mailFilter == 'sent' },
              'h-6 w-6',
            ]"
          ></feather-icon>
          <span class="ml-3 text-lg">Sent</span>
        </div>

        <!-- draft -->
        <div
          tag="span"
          @click="updateFilter('draft')"
          class="flex items-center justify-between mt-4 cursor-pointer"
          :class="{ 'text-primary': mailFilter == 'draft' }"
        >
          <div class="flex items-center mb-2">
            <feather-icon
              icon="Edit2Icon"
              :svgClasses="[
                { 'text-primary stroke-current': mailFilter == 'draft' },
                'h-6 w-6',
              ]"
            ></feather-icon>
            <span class="ml-3 text-lg">Draft</span>
          </div>
          <template v-if="emailMeta.draftMails">
            <vs-chip
              class="number"
              color="warning"
              v-if="emailMeta.draftMails.length > 0"
              >{{ emailMeta.draftMails.length }}</vs-chip
            >
          </template>
        </div>

        <!-- starred -->
        <div
          tag="span"
          @click="updateFilter('starred')"
          class="flex items-center mt-4 mb-2 cursor-pointer"
          :class="{ 'text-primary': mailFilter == 'starred' }"
        >
          <feather-icon
            icon="StarIcon"
            :svgClasses="[
              { 'text-primary stroke-current': mailFilter == 'starred' },
              'h-6 w-6',
            ]"
          ></feather-icon>
          <span class="ml-3 text-lg">Starred</span>
        </div>

        <!-- spam -->
        <div
          tag="span"
          @click="updateFilter('spam')"
          class="flex items-center justify-between mt-4 cursor-pointer"
          :class="{ 'text-primary': mailFilter == 'spam' }"
        >
          <div class="flex items-center mb-2">
            <feather-icon
              icon="InfoIcon"
              :svgClasses="[
                { 'text-primary stroke-current': mailFilter == 'spam' },
                'h-6 w-6',
              ]"
            ></feather-icon>
            <span class="ml-3 text-lg">Spam</span>
          </div>
          <template v-if="emailMeta.unreadMails">
            <vs-chip
              class="number"
              color="danger"
              v-if="emailMeta.unreadMails.folder.spam.length > 0"
              >{{ emailMeta.unreadMails.folder.spam.length }}</vs-chip
            >
          </template>
        </div>

        <!-- trash -->
        <div
          tag="span"
          @click="updateFilter('trash')"
          class="flex items-center mt-4 mb-2 cursor-pointer"
          :class="{ 'text-primary': mailFilter == 'trash' }"
        >
          <feather-icon
            icon="TrashIcon"
            :svgClasses="[
              { 'text-primary stroke-current': mailFilter == 'trash' },
              'h-6 w-6',
            ]"
          ></feather-icon>
          <span class="ml-3 text-lg">Trash</span>
        </div>
      </div>
      <vs-divider></vs-divider>
      <div class="px-6 py-4 email__labels">
        <h5 class="mb-8">Labels</h5>
        <div class="email__lables-list">
          <div
            tag="span"
            class="flex items-center mb-4 cursor-pointer email__label"
            v-for="(tag, index) in emailTags"
            :key="index"
            @click="updateFilter(tag.value)"
          >
            <div
              class="w-3 h-3 ml-1 mr-4 rounded-full"
              :class="'border-2 border-solid border-' + tag.color"
            ></div>
            <span
              class="text-lg"
              :class="{ 'text-primary': mailFilter == tag.value }"
              >{{ tag.text }}</span
            >
          </div>
        </div>
      </div>
    </component>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'

export default {
  props: {
    emailTags: {
      type: Array,
      required: true,
    },
    mailFilter: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      activePrompt: false,
      mailTo: '',
      mailSubject: '',
      mailCC: '',
      mailBCC: '',
      mailMessage: '',
      editorOption: {
        modules: {
          toolbar: [
            [
              'bold',
              'italic',
              'underline',
              'strike',
              'link',
              'blockquote',
              'code-block',
            ],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ font: [] }],
          ],
        },
        placeholder: 'Message',
      },
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.3,
      },
    }
  },
  computed: {
    validateForm() {
      // return !this.errors.any() && this.mailTo !== ''
      return true
    },
    baseUrl() {
      const path = this.$route.path
      return path.slice(0, path.lastIndexOf('/'))
    },
    emailMeta() {
      return this.$store.state.email.meta
    },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag
    },
  },
  methods: {
    updateFilter(filter) {
      this.$store.commit('email/UPDATE_MAIL_FILTER', filter) // Update Mail Filter
      this.$store.dispatch('email/fetchEmails', { filter: filter }) // Fetch Emails From API
    },
    clearFields() {
      this.$nextTick(() => {
        this.mailTo = ''
        this.mailSubject = ''
        this.mailCC = ''
        this.mailBCC = ''
        this.mailMessage = ''
      })
    },
    sendMail() {
      let payload = {
        mailTo: this.mailTo,
        mailSubject: this.mailSubject,
        mailCC: this.mailCC,
        mailBCC: this.mailBCC,
        mailMessage: this.mailMessage,
      }
      console.log(payload)

      this.activePrompt = false
      this.clearFields()
    },
  },
  components: {
    quillEditor,
  },
}
</script>
