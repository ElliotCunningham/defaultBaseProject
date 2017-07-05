class LocalStorage {
	constructore() {
		this.haveStorage = false
		this._initStorage();
	}

	_initStorage() {
		if (typeof window.localStorage !== 'undefined'){
			this.haveStorage = true;
		} else {
			this.haveStorage = false;
			console.log('désoler les informations de connexion ne pourront être sauvgarder, le naviguateur que vous utiliser n\'a pas de localStorage');
		}
	}

	saveDataInLocalStorage(name, data, callBackChange) {
		console.log(name, data);
		if (typeof data === 'object') {
			const objectString = JSON.stringify(data);
			window.localStorage.setItem(name, objectString);
			callBackChange;
		} else {
			window.localStorage.setItem(name, data);
			callBackChange;
		}
	}

	getDataInLocalStorage(name, isObject = false) {
		if (isObject) {
			const object = JSON.parse(window.localStorage.getItem(name));
			return object;
		} else {
			const data = window.localStorage.getItem(name);
			return data;
		}
	}

	updateDataInLocalStorage(name, data) {
		this.removeDataInlocalStorage(name);
		this.saveDataInLocalStorage(name, data);
	}

	removeDataInlocalStorage(name) {
		window.localStorage.removeItem(name);
	}

	clearAllLocalStorage() {
		window.localStorage.clear();
	}
}

const LocalStorageInstance = new LocalStorage();
export default LocalStorageInstance;