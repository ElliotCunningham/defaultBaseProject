import ActionTypes from '../constant/HomeConstant';
import AppDispatcher from '../AppDispatcher';


class ApplicationAction {
  constructor() {
  }

  testYourFlux() {
    AppDispatcher.dispatch({
      type: ActionTypes.TEST_FLUX,
      data: true
    });
  }

}

export default new ApplicationAction();