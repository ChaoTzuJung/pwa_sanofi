import Vue from 'vue';
import Vuex from 'vuex';
import patientModule from './patient';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    patient: patientModule(),
  },
});
