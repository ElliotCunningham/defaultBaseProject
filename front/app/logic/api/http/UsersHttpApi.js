import AxiosApi from '../../base/AxiosApi';

class UsersHttpApi extends AxiosApi {
  constructor() {
    super('users');
  }

  getAllUsers() {
    const target = "/";
    return this.getRequest({}, target);
  }

}

export default new UsersHttpApi();