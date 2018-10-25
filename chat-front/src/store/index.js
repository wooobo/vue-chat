import Vue from 'vue';
import Vuex from 'vuex';
import socket from './modules/socket';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    socket,
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
});
