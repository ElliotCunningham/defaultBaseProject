import EventEmitter from 'eventemitter3';

class BaseStore extends EventEmitter {
  constructor(identifier) {
    super(identifier);
  }

  addChangeListener(callback) {
     this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

  emitChange() {
    this.emit('change');
  }

}

export default BaseStore;