<!-- =========================================================================================
    File Name: ToolptipPosition.vue
    Description: Change the position of tooltip
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Position" code-toggler>

        <p>You can change the position at which the tooltip appears with the property <code>position</code></p>

        <div class="demo-alignment">
            <vx-tooltip text="Tooltip position Top" position="top">
                <vs-button type="gradient">Top</vs-button>
            </vx-tooltip>
            <vx-tooltip text="Tooltip position Bottom" position="bottom">
                <vs-button type="gradient">Bottom</vs-button>
            </vx-tooltip>
            <vx-tooltip text="Tooltip position Left" position="left">
                <vs-button type="gradient">Left</vs-button>
            </vx-tooltip>
            <vx-tooltip text="Tooltip position Right" position="right">
                <vs-button type="gradient">Right</vs-button>
            </vx-tooltip>
        </div>


    </vx-card>
</template>
