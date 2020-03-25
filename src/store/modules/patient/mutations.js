export default {
  UPDATE_WEIGHT(state, {
    category, type, weight,
  }) {
    state[category][type].weight = weight;
  },
  UPDATE_REPS(state, {
    category, type, reps,
  }) {
    state[category][type].reps = reps;
  },
  UPDATE_SETS(state, {
    category, type, sets,
  }) {
    state[category][type].sets = sets;
  },
  UPDATE_MOVEMENT(state, {
    category, movement, type,
  }) {
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
