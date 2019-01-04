import * as Types from "../constants/actionTypes";

export function increase() {
  return { type: Types.TYPE_INCREASE };
}

export function decrease() {
  return { type: Types.TYPE_DECREASE };
}
