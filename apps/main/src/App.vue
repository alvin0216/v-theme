<template>
  <div id="app">
    <header>
      <div class="aaa">aaa</div>
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
body {
  margin: 0;
}
header {
  width: 100vw;
  position: fixed;
  z-index: 10;
}
header .el-button {
  width: 100%;
}

h2 {
  color: var(--color-text-regular);
}
html.dark {
  background-color: #141414;
}
.aaa {
  color: var(--aaa);
}
</style>
