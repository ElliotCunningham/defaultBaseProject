import Nano from 'nano';

import { __COUCH_URL__, __ADMIN_LOGIN__, __ADMIN_PASS__ } from '../../config/couchdb';

class NanoApi {
  constructor(bddName) {
    this.bdd = bddName;
    this.url = this._defineUrl();
    this.nano = false;
  }

  _defineUrl() {
    const url = `http://${__ADMIN_LOGIN__}:${__ADMIN_PASS__}@${__COUCH_URL__}/`;
    console.log('url for request =>', url);
    return url;
  }

  _initNanoApi() {
    this.nano = new Nano(this.url).use(this.bdd);
  }

  getAllDocs() {
    this._initNanoApi();
    return new Promise((resolve, reject) => {
      this.nano.list({include_docs: true}, (err, docs) => {
        if (err) return reject(err);
        return resolve(docs);
      });
    });
  }

}

export default NanoApi;