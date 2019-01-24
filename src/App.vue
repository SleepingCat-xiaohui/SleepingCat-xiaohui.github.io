<template>
  <div class="app">
    <h1>Hello World</h1>
    <index />
  </div>
</template>

<script>
export default {
  components: {
    Index: import('./pages/index/index.vue'),
  },
  data () {
    return {}
  },
}
</script>

<style lang="scss">
.app {
  display: flex;

  h1 {
    color: blue;
  }
}
</style>
