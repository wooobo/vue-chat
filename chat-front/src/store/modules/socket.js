import Constant from '../../Constant';

const state = {
  msgDatas: [],
};

// getters
const getters = {
};

// actions
const actions = {
};

// mutations
const mutations = {
  [Constant.PUSH_MSG_DATA]: ($state, $payload) => {
    $state.msgDatas.push($payload);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
