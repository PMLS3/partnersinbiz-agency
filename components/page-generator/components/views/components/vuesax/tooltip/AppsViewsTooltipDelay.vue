<!-- =========================================================================================
    File Name: ToolptipDelay.vue
    Description: Add delay to tooltip using delay prop
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Delay" code-toggler>

        <p>You can change the delay in appearing the tooltip with the property <code>delay</code></p>

        <div class="demo-alignment">
            <vx-tooltip text="Tooltip default delay">
                <vs-button>Delay default</vs-button>
            </vx-tooltip>
            <vx-tooltip delay=".5s" text="Tooltip delay 0.5s">
                <vs-button>Delay 0.5s</vs-button>
            </vx-tooltip>
            <vx-tooltip delay="2s" text="Tooltip delay 2s">
                <vs-button>Delay 2s</vs-button>
            </vx-tooltip>
        </div>


    </vx-card>
</template>
