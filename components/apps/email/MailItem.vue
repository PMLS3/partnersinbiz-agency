<!-- =========================================================================================
    File Name: MailItem.vue
    Description: Mail Item - Displays mail item
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div
    class="px-2 py-6 mail__mail-item sm:px-4"
    :class="{ 'mail__opened-mail': !mail.unread }"
  >
    <!-- MAIL ROW 1 : META -->
    <div class="flex w-full">
      <vs-avatar
        class="flex-shrink-0 mr-3 border-2 border-white border-solid sender__avatar"
        :src="mail.img"
        size="40px"
      ></vs-avatar>

      <div class="flex items-start justify-between w-full">
        <div class="mail__details">
          <h5 class="mb-1" :class="{ 'font-semibold': mail.unread }">
            {{ mail.sender_name }}
          </h5>
          <span v-if="mail.subject">{{ mail.subject }}</span>
          <span v-else>(no subject)</span>
        </div>

        <div class="flex items-center mail-item__meta">
          <div class="items-center hidden email__labels sm:flex">
            <div
              class="w-2 h-2 mr-2 rounded-full"
              :class="'bg-' + labelColor(label)"
              v-for="(label, index) in mail.labels"
              :key="index"
            ></div>
          </div>
          <span>{{ mail.time | date }}</span>
        </div>
      </div>
    </div>
    <!-- /MAIL ROW 1 -->

    <!-- MAIL ROW 2 : MSG & ACTIONS -->
    <div class="flex w-full">
      <div class="flex items-center ml-1">
        <vs-checkbox
          v-model="isSelectedMail"
          @click.stop
          class="ml-0 mr-1 vs-checkbox-small"
        ></vs-checkbox>
        <feather-icon
          icon="StarIcon"
          class="cursor-pointer"
          :svgClasses="[
            { 'text-warning fill-current stroke-current': mail.isStarred },
            'w-5',
            'h-5',
          ]"
          @click.stop="toggleIsStarred"
        ></feather-icon>
      </div>
      <div class="ml-3 truncate mail__message">
        <span>{{ mail.message | filter_tags }}</span>
      </div>
    </div>
    <!-- /MAIL ROW 2 -->
  </div>
</template>

<script>
export default {
  props: {
    mail: {
      type: Object,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isSelectedMail: this.isSelected,
    }
  },
  watch: {
    isSelected(value) {
      this.isSelectedMail = value
    },
    isSelectedMail(val) {
      val
        ? this.$emit('addToSelected', this.mail.id)
        : this.$emit('removeSelected', this.mail.id)
    },
  },
  computed: {
    labelColor() {
      return (label) => {
        const tags = this.$store.state.email.mailTags
        return tags.find((tag) => {
          return tag.value === label
        }).color
      }
    },
  },
  methods: {
    toggleIsStarred() {
      const payload = { mailId: this.mail.id, value: !this.mail.isStarred }
      this.$store.dispatch('email/toggleIsMailStarred', payload)
    },
  },
}
</script>
