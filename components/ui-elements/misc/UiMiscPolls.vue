<!-- =========================================================================================
    File Name: UiMiscPolls.vue
    Description: Create dynamic polls
    ----------------------------------------------------------------------------------------
========================================================================================== -->
<template>
  <vx-card :title="title" class="mt-base">
    <ul class="polls-list">
      <li class="poll" v-for="poll in polls" :key="poll.id">
        <h6 class="poll-title">{{ poll.title }}</h6>
        <ul class="poll-options-result">
          <li
            class="poll-option mt-6"
            v-for="option in poll.options"
            :key="option.value"
          >
            <div class="flex">
              <vs-radio v-model="userPoll" :vs-value="option.value">{{
                option.text | capitalize
              }}</vs-radio>
              <span class="block ml-auto">{{ option.voted }}%</span>
            </div>
            <vs-progress :percent="option.voted"></vs-progress>
            <ul class="users-voted user-list mt-2">
              <li
                v-for="(user, userIndex) in option.usersVoted"
                :key="userIndex"
              >
                <vx-tooltip :text="user.name" position="bottom">
                  <vs-avatar
                    :src="user.avatar"
                    size="30px"
                    class="border-2 border-white border-solid -m-1"
                  ></vs-avatar>
                </vx-tooltip>
              </li>
            </ul>
          </li>
        </ul>
        <vs-button class="mt-5 w-full">Vote Now</vs-button>
      </li>
    </ul>
  </vx-card>
</template>
<script>
export default {
  name: "UiMiscPolls",
  props: {
    polls: {
      type: Array,
      default: []
    },
    title: { type: String, default: "Polls" }
  },
  data() {
    return {
      userPoll: ""
    };
  }
};
</script>
