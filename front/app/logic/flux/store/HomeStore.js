import ActionTypes from '../constant/HomeConstant';
import AppDispatcher from '../AppDispatcher';
import BaseStore from '../base/BaseStore';

class HomeStore extends BaseStore {
  constructor() {
    super('home');
    this.test = false;
  }

  getYourTestFlux() {
    return this.test;
  }

  testYourFlux(data) {
    this.test = data;
    this.emitChange();
  }

}

const HomeStoreInstance = new HomeStore();

HomeStoreInstance.dispatchToken = AppDispatcher.register((action) => {
  switch(action.type) {
    case ActionTypes.TEST_FLUX:
      HomeStoreInstance.testYourFlux(action.data);
      break;

    default :
      return;
  }
});

export default HomeStoreInstance;