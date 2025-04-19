<template>
  <div id="app">
    <header>
      <el-button type="primary" @click="toggle">Toggle</el-button>
    </header>
    <Example />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Example: () => import('./examples/index.vue'),
  },
  methods: {
    toggle() {
      document.querySelector('html').classList.toggle('dark');
    },
  },
};
</script>

<style lang="scss">
header .el-button {
  width: 100%;
}
</style>
