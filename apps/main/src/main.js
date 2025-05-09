import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';

import './styles/index.scss';

Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
