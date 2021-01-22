<template>
  <div class="grid h-screen grid-cols-1 md:grid-cols-2">
    <div class="max-w-md m-auto">
      <vx-card title="Features to be released">
        <UiTimeline :data="timelineFeatures" />
      </vx-card>
    </div>
    <div class="max-w-md m-auto">
      <vx-card title="Bug Fixes Timeline ">
        <UiTimeline :data="timelineBugs" />
      </vx-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timelineFeatures: [
        {
          color: 'primary',
          icon: 'PlusIcon',
          title: 'Support Center',
          desc: 'Run your support tickets from one place',
          time: '29 Jan 2021',
        },
        // {
        //   color: 'warning',
        //   icon: 'MailIcon',
        //   title: 'Email Newsletter',
        //   desc: 'Cupcake gummi bears soufflé caramels candy',
        //   time: '15 Days Ago',
        // },
        {
          color: 'danger',
          icon: 'UsersIcon',
          title: 'Human Resources',
          desc: 'Manage leave, payslips and more of employees',
          time: '2 Feb 2021',
        },
        // {
        //   color: 'success',
        //   icon: 'LayoutIcon',
        //   title: 'Launch Website',
        //   desc:
        //     'Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.',
        //   time: '25 days ago',
        // },
        {
          color: 'primary',
          icon: 'TvIcon',
          title: 'Market Place',
          desc:
            'Want to expand into other avenues? Get a plug and play business',
          time: '7 Feb 2021',
        },
      ],
      timelineBugs: [
        {
          color: 'success',
          icon: 'LayoutIcon',
          title: 'No Bugs',
          desc: 'No Bugs currently reported',
          time: '25 days ago',
        },
      ],
    }
  },
}
</script>
