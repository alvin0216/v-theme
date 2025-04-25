<template>
  <div id="app">
    <header>
      <el-button type="primary" @click="toggle">Toggle</el-button>
    </header>
    <div class="container">
      <Example />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Example: () => import('./examples/Loading.vue'),
  },
  methods: {
    toggle() {
      document.querySelector('html').classList.toggle('dark');
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}
header {
  width: 100vw;
  position: fixed;
  z-index: 10;
  .el-button {
    width: 100%;
  }
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.el-row {
  margin-bottom: 24px;
}
</style>
