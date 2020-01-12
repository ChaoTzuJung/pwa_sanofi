export default {
  OPEN_SYMPTOMS_MODAL(state, { severity, status }) {
    state.currentSeverity = severity;
    state.isModalOpen = status;
  },
};
