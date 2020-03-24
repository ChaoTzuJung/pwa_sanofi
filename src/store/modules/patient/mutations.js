export default {
  UPDATE_WEIGHT(state, {
    category, movement, type, weight,
  }) {
    state[category][type].weight = weight;
    state[category][type].movement = movement;
  },
  UPDATE_REPS(state, {
    category, movement, type, reps,
  }) {
    state[category][type].reps = reps;
    state[category][type].movement = movement;
  },
  UPDATE_SETS(state, {
    category, movement, type, sets,
  }) {
    state[category][type].sets = sets;
    state[category][type].movement = movement;
  },
  SAVE_BSA_PERCENT(state, payload) {
    state.BSA = payload;
  },
  SAVE_RESULT_DATA(state, data) {
    state.interpretation = data.interpretation;
    state.EASI = data.EASI;
    state.BSA = data.BSA;
    state.IGA = data.IGA;
  },
  SAVE_PATIENT_DATA(state, data) {
    state.patientName = data.name;
    state.age = data.age;
    state.gender = data.gender;
    state.reportDate = data.reportDate;
  },
};
