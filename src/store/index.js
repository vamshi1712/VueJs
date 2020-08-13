import Vue from 'vue';
import Vuex from 'vuex';

import RobotsModule from './modules/robots';
import UsersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robots: RobotsModule,
    users: UsersModule,
  },
});
