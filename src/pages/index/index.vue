<template>
  <div>
    123
    <test />
  </div>
</template>

<script>
export default {
  components: {
    Test: () => import('./test.vue'),
  },
}
</script>

<style lang="scss">
</style>
