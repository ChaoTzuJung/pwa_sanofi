import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import modules from './modules';

Vue.use(Vuex);

Vuex.Store.prototype.hasModule = function (module) {
  /* eslint-disable no-underscore-dangle */
  return this._modules.root._children[module] !== undefined;
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules,
});
