import ActionTypes from '../constant/UsersConstant';
import AppDispatcher from '../AppDispatcher';

import UsersHttpApi from '../../api/http/UsersHttpApi';
import UsersBddApi from '../../api/bdd/UsersBddApi';


class UsersActionCreators {
  constructor() {
  this.init = false
  }

  initUsersBdd() {
    if (!this.init) {
      UsersBddApi.initUsersBddApi(this.UsersBddChange);
      this.init = true;
    }
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
        const users = res.data.map((doc) => {
          delete doc._rev;
          return doc;
        });
        UsersBddApi.bulkInsertDocuments(users)
          .then((res) => {
            console.log('res bulk', res);
            const usersFinal = users.map((user) => {
              res.map((doc) => {
                if (doc.id === user._id) { user._rev = doc.rev }
              });
              return user;
            });
            console.log('after map', usersFinal);
          })
          .catch((err) => {
            console.log('error bulk insert users', err);
            throw new Errror(err);
          });
      })
      .catch((err) => {
        console.log(err);
        throw new Error(err);
      });
  }

  UsersBddChange(change) {
    console.log('Users Bdd has changed', change);
  }

}

export default new UsersActionCreators();