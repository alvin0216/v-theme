import Vue from 'vue';
import ElementUI from 'element-ui';
import './styles/main.scss';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: (h) => h(App),
});
