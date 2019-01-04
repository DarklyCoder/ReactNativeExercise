import { combineReducers } from "redux";

import countReducer from "./countReducer";

//合并多个reducer
const rootReducer = combineReducers({
  countReducer
});

export default rootReducer;
