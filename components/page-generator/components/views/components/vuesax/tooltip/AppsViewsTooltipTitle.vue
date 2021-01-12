<!-- =========================================================================================
    File Name: ToolptipTitle.vue
    Description: Create tooltip with title
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Title" code-toggler>

        <p>If necessary, you can add a title to the tooltip with the property <code>title</code></p>

        <div class="demo-alignment">
            <vx-tooltip
                title="Are you sure?"
                color="warning"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet.">

                <vs-button color="warning" type="flat">Title Tooltip</vs-button>
            </vx-tooltip>
        </div>


    </vx-card>
</template>
