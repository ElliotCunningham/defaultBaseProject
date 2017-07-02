import NanoApi from './api/NanoApi';

class userBddApi extends NanoApi {
  constructor() {
    super('users');
    console.log('connect to users Api');
  }

  getAllUsers() {
    return this.getAllDocs();
  }

}

export default new userBddApi();

