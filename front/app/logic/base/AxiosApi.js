import Axios from 'axios';

import { __LOCAL_SERVER_URL__ } from '../../config/http';

class AxiosApi {
  constructor(identifier) {
    console.log('axios api run', identifier);
    this.identifier = identifier;
    this.baseURL = false;
    this._axios = false;
    this._init();
  }

  createNewInstance(option, ) {
    const axiosInstance = axios.create(option);
    return axiosInstance;
  }

  _init() {
    this._axios = Axios;
    this.resolveBaseUrl().then((url) => {
      this.baseURL = `http://${url}/${this.identifier}`;
    })
    .catch((err) => { throw new Error(err); });
  }

  resolveBaseUrl() {
    return new Promise((resolve, reject) => {
      resolve(__LOCAL_SERVER_URL__);
    });
  }

  getRequest(data = {}, target, timeOut = 2000) {
    const url = `${this.baseURL}/${target}`;
    const options = { params: data,  timeOut };
    console.log(url);
    return this._axios.get(url, options);
  }

  postRequest(data = {}, target, timeOut = 2000) {
    const url = `${this.baseURL}/${target}`;
    const options = { timeOut };
    return this._axios.post(target, data, options);
  }

  deleteRequest(data = {}, target, timeOut = 2000) {
    const url = `${this.baseURL}/${target}`;
    const options = { params: data,  timeOut };
    return this._axios.delete(url, options);
  }

  putRequest(data = {}, target, timeOut = 2000) {
    const url = `${this.baseURL}/${target}`;
    const options = { timeOut };
    return this._axios.put(url, data, options);
  }

}

export default AxiosApi;