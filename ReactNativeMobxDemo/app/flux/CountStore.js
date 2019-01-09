import { observable, action } from "mobx";

class CountStore {
  @observable count = 0;

  @action _increase = () => {
    ++count;
  };

  @action _decrease = () => {
    --count;
  };
}

export default CountStore;
