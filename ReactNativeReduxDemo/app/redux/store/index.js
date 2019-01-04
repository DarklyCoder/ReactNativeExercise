import { createStore } from "redux";
import reducer from "../reducers";

function configureStore(initialState) {
  return createStore(reducer);
}

export default configureStore;
