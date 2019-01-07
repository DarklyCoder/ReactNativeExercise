import * as Types from "../constants/actionTypes";

const initialState = {
  count: 0
};

function handleCount(state = initialState, action = {}) {
  switch (action.type) {
    case Types.TYPE_INCREASE:
      state.count++;
      return { ...state };

    case Types.TYPE_DECREASE:
      state.count--;
      return { ...state };

    default:
      return state;
  }
}

export default handleCount;
