import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import './plugins/socketPlugin';
import Directives from './plugins/directives';
import router from './router';
import store from './store';

import './assets/_common.scss';

Vue.config.productionTip = false;
Vue.use(Directives);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
