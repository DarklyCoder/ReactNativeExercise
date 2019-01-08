import * as Types from "../constants/actionTypes";

const initialState = {
  count: 0
};

function handleCount(state = initialState, action = {}) {
  const { count } = state;

  switch (action.type) {
    case Types.TYPE_INCREASE:
      return { ...state, count: count + 1 };

    case Types.TYPE_DECREASE:
      return { ...state, count: count - 1 };

    default:
      return state;
  }
}

export default handleCount;
