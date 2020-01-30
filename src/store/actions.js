const actions = {
  updateLoading({ commit }, status) {
    commit('LOADING', status);
  },
  toggleComfirm({ commit }, { type }) {
    return new Promise((resolve) => {
      commit('OPEN_DIALOG', { type });
      resolve();
    });
  },
};

export default actions;
