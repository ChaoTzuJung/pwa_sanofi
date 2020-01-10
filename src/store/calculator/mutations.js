export default {
  OPEN_SYMPTOMS_MODAL(state, { symptom, status }) {
    console.log('symptom', symptom);
    state.isModalOpen = status;
  },
};
