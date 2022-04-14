<template>
  <div>组件示例</div>
  <div>{{ count }}</div>
  <mico-button type="primary" @click="handleClick">button</mico-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      this.count ++
    }
  }

})
</script>
