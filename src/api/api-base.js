import axios from 'axios';
import { Loading } from 'quasar';

class ApiBase {
  constructor(path) {
    const baseUrl = process.env.API;
    this.http = axios.create({
      baseURL: baseUrl + '/api/' + path,
      timeout: 10000,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
    });
    this.http.interceptors.request.use(
      (config) => {
        Loading.show();
        return config;
      },
      (error) => Promise.reject(error),
    );

    this.http.interceptors.response.use(
      (response) => {
        Loading.hide();
        return response;
      },
      (error) => Promise.reject(error),
    );
  }

  read = async () =>  (await this.http.get('/')).data;

  getById = async (id) =>  (await this.http.get(`/${id}`)).data;

  post = async (model) => (await this.http.post('/', model)).data;

  update = async (id, model) => (await this.http.put(`/${id}`, model)).data;

  delete = async (id) => (await this.http.delete(`/${id}`)).data;
}

export default ApiBase;
