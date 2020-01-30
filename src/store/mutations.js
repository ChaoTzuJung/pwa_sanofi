export default {
  LOADING(state, status) {
    state.isLoading = status;
  },
  OPEN_DIALOG(state, { type }) {
    state.dialogType = type;
    state.isDialogOpen = true;
  },
  CLOSE_DIALOG(state) {
    state.isDialogOpen = false;
  },
};
