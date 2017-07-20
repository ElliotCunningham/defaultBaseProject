import ActionTypes from '../constant/UsersConstant';
import AppDispatcher from '../AppDispatcher';

import UsersHttpApi from '../../api/http/UsersHttpApi';


class UsersActionCreators {
  constructor() {
  }

  connectUser(user) {
    return new Promise((resolve, reject) => {
      console.log('info connexion', user);

      AppDispatcher.dispatch({
        type: ActionTypes.SET_CURRENT_USER,
        data: user
      });

      resolve(user);
    });
  }

  fetchAndInitUsers() {
    UsersHttpApi.getAllUsers()
      .then((res) => {
        const users = res.data;
        AppDispatcher.dispatch({
          type: ActionTypes.SET_USERS_IN_STORE,
          data: users
        });
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err);
      });
  }

}

export default new UsersActionCreators();