<!-- =========================================================================================
    File Name: PaginationDefault.vue
    Description: Rendering of default pagination
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>

        <p>The pagination component consists of several elements, all of which are optional. So with no extra class, your pagination links will look as follow</p>

        <div class="my-5">
            <vs-pagination :total="40" v-model="currentx"></vs-pagination>
        </div>

       

    </vx-card>
</template>

<script>
export default {
  data: () => ({
    currentx: 14
  })
}
</script>
