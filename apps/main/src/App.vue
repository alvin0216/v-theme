<template>
  <div id="app">
    <el-button type="primary" @click="toggle">Toggle</el-button>
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
