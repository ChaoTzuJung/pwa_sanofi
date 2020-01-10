import Vue from 'vue';
import Vuex from 'vuex';
import calculatorModule from './calculator';
import patientModule from './patient';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    calculator: calculatorModule(),
    patient: patientModule(),
  },
});
