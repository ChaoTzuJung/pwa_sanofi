export default {
  LOADING(state, status) {
    state.isLoading = status;
  },
  OPEN_DIALOG(state, { type, status }) {
    state.dialogType = type;
    state.isDialogOpen = status;
  },
};
