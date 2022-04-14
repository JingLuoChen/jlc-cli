<template>
    <div class="mico-button">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
    name: 'mico-button'
})

</script>
<style scoped>
.mico-button {
    display: inline-block;
    padding: 3px 6px;
    background: #000;
    color: #fff;
}
</style>
