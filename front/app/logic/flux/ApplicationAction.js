import ApplicationActionType from './ApplicationActionType';
import ApplicationDispatcher from './ApplicationDispatcher';

import LocalStorageApi from '../LocalStorageApi';
import HttpApi from '../HttpApi';

class ApplicationAction {
	constructor() {
		this.getAllDataBaseInBdd();
	}

	getAllDataBaseInBdd() {
		const dataConnexion = LocalStorageApi.getDataInLocalStorage('conectionInfo', true);
		HttpApi.getAllDataBase(dataConnexion)
			.then((res) => {
				ApplicationDispatcher.dispatch({
					type: ApplicationActionType.SET_BASE_IN_STORE,
					data: res.data
				});
			})
			.catch((err) => {
				console.log('error get DataBase in SQL serveur', err);
			});
	}

	selectADataBase(dataBase) {
		ApplicationDispatcher.dispatch({
			type: ApplicationActionType.SET_CURRENT_BDD_IN_STORE,
			data: dataBase
		});
		const dataConnexion = LocalStorageApi.getDataInLocalStorage('conectionInfo', true);
		HttpApi.selectADataBase(dataConnexion, dataBase)
			.then((res) => {
				this.getAllDataInAllTablesBdd(res.data, dataBase);
				ApplicationDispatcher.dispatch({
					type: ApplicationActionType.SET_DATA_FROM_DATABASE_IN_STORE,
					data: res.data
				});
			})
			.catch((err) => {
				console.log('error get data in base', err);
			});
	}

	getAllDataInAllTablesBdd(res,dataBase) {
		const dataConnexion = LocalStorageApi.getDataInLocalStorage('conectionInfo', true);
		HttpApi.getAllDataInAllTablesBdd(dataConnexion, dataBase, res)
			.then((res) => {
				console.log('resultat all data', res);
			})
			.cacth((err) => {
				console.log('error get all data in all tables', err);
			});
	}


}

export default new ApplicationAction();