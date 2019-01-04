import * as Types from "../constants/actionTypes";

const initialState = {
  count: 0
};

function handleCount(state = initialState, action = {}) {
  switch (action.type) {
    case Types.TYPE_INCREASE:
      return { ...state, count: state.count++ };

    case Types.TYPE_DECREASE:
      return { ...state, count: state.count-- };

    default:
      return state;
  }
}

export default handleCount;
