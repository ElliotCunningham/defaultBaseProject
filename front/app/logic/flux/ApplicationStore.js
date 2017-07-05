import EventEmitter from 'eventemitter3';

import ActionTypes from './ApplicationActionType';
import ApplicationDispatcher from './ApplicationDispatcher';

class ApplicationStore extends EventEmitter {
	constructor() {
		super();
		this.currentBdd = false;
		this.dataBaseAvaible = [];
		this.currentTablesBdd = [];
	}

	addChangeListener(callback) {
	   this.on('change', callback);
	}

	getCurrentBdd() {
		return this.currentBdd;
	}

	getTableInDataBase() {
		return this.currentTablesBdd;
	}

	getDataBaseAvaible() {
		return this.dataBaseAvaible;
	}

	setDataBaseInStore(data) {
		this.dataBaseAvaible = data;
		this.emit('change');
	}

	setCurrentBddInStore(data) {
		this.currentBdd = data;
		this.emit('change');
	}

	setDataTableInStore(data) {
		this.currentTablesBdd = data;
		this.emit('change');
	}
}

const ApplicationStoreInstance = new ApplicationStore();

ApplicationStoreInstance.dispatchToken = ApplicationDispatcher.register((action) => {
	switch(action.type) {
		case ActionTypes.SET_BASE_IN_STORE:
			ApplicationStoreInstance.setDataBaseInStore(action.data);
			break;

		case ActionTypes.SET_DATA_FROM_DATABASE_IN_STORE:
			ApplicationStoreInstance.setDataTableInStore(action.data);
			break;

		case ActionTypes.SET_CURRENT_BDD_IN_STORE:
			ApplicationStoreInstance.setCurrentBddInStore(action.data);
			break;

		default :
			return;
	}
});

export default ApplicationStoreInstance;