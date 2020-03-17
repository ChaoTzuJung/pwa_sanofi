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
  CHANGE_DIRECTION(state, { direction }) {
    state.direction = direction;
  },
  SET_NETWORK_STATUS(state, { status }) {
    state.online = status;
  },
};
