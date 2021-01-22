<template>
  <div class="flex h-screen">
    <div class="max-w-md m-auto">
      <vx-card title="Features to be released">
        <UiTimeline :data="timelineData" />
      </vx-card>
    </div>
    <div class="max-w-md m-auto">
      <vx-card title="Bug Fixes Timeline">
        <UiTimeline :data="timelineData" />
      </vx-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timelineData: [
        {
          color: 'primary',
          icon: 'PlusIcon',
          title: 'Client Meeting',
          desc: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple',
          time: '25 mins Ago',
        },
        {
          color: 'warning',
          icon: 'MailIcon',
          title: 'Email Newsletter',
          desc: 'Cupcake gummi bears soufflé caramels candy',
          time: '15 Days Ago',
        },
        {
          color: 'danger',
          icon: 'UsersIcon',
          title: 'Plan Webinar',
          desc: 'Candy ice cream cake. Halvah gummi bears',
          time: '20 days ago',
        },
        {
          color: 'success',
          icon: 'LayoutIcon',
          title: 'Launch Website',
          desc:
            'Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.',
          time: '25 days ago',
        },
        {
          color: 'primary',
          icon: 'TvIcon',
          title: 'Marketing',
          desc: 'Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.',
          time: '28 days ago',
        },
      ],
    }
  },
}
</script>

<style></style>
