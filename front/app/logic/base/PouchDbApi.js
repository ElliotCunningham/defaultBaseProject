import PouchDb from 'pouchdb';

class PouchDbApi {
  constructor(identifier) {
    console.log('pouchdb lunch witch', identifier);
    this.identifier = identifier;
    this.init = false;
    this.pouchBdd = false;
    this._init();
  }

  _init() {
    this.pouchBdd = new PouchDb(this.identifier);
    this.init = true;
    console.log('bdd ready', this.pouchBdd);
  }

  destroyDataBase() {
    return this.pouchBdd.destroy().then(() => {
      console.log('destruction de la base', this.identifier, 'OK');
    }).catch((err) => {
      console.log('error destroy', this.identifier, err);
      throw new Error(err);
    });
  }

  createDoc(doc) {
    return this.pouchBdd.put(doc);
  }

  getDocById(id) {
    return this.pouchBdd.get(id);
  }

  updateDoc(doc) {
    return this.pouchBdd.put(doc);
  }

  createDocWithoutId(docWithoutId) {
    return this.pouchBdd.post(docWithoutId);
  }

  removeDoc(doc) {
    return this.pouchBdd.remove(doc);
  }

  bulkInsertDoc(docs) {
    return this.pouchBdd.bulkDocs(docs); // this function run with and without _id;
  }

  bulkDeleteDoc(docs) {
    const docsDeleted = docs.map((doc) => {
      doc._deleted = true;
      return doc;
    });

    return this.pouchBdd.bulkDocs(docsDeleted);
  }

  fetchAllDocs(option = false) {
    const options = (option) ?option :{ include_docs: true, attachments: true };

    return this.pouchBdd.allDoc(options);
  }

  _startChangeListenner(callBack) {
    const option = { since: 'now', live: true,include_docs: true };
    this.pouchBdd.change(option)
      .on('change', callBack)
      .on('complete', () => { console.log(this.identifier, 'end listen change'); })
      .on('error', (err) => {
        console.log('error in', this.identifier, err);
        throw new Error(err);
      });
  }

}

export default PouchDbApi;