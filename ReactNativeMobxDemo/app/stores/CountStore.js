import { observable, action } from "mobx";

class CountStore {
  @observable count = 0;

  @action _increase = () => {
    ++this.count;
  };

  @action _decrease = () => {
    --this.count;
  };
}

export default new CountStore();
