import ActionTypes from '../constant/UsersConstant';
import AppDispatcher from '../AppDispatcher';
import BaseStore from '../base/BaseStore';

class UsersStore extends BaseStore {
  constructor() {
    super('users');
    this.users = [];
    this.currentUser = false;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getAllUsers() {
    return this.users;
  }

  setCurrentUserInStore(user) {
    this.currentUser = user;
    this.emitChange();
  }

  setUsersInStore(users) {
    console.log('in store', users);
    users.map((user) => { this.users.push(user); });
    this.emitChange();
  }

}

const UsersStoreInstance = new UsersStore();

UsersStoreInstance.dispatchToken = AppDispatcher.register((action) => {
  switch(action.type) {
    case ActionTypes.SET_CURRENT_USER:
      UsersStoreInstance.setCurrentUserInStore(action.data);
      break;

    case ActionTypes.SET_USERS_IN_STORE:
      UsersStoreInstance.setUsersInStore(action.data);
      break;

    // case ActionTypes.TEST_FLUX:
    //   UsersStoreInstance.testYourFlux(action.data);
    //   break;

    default :
      return;
  }
});

export default UsersStoreInstance;