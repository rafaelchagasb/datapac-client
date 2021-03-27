import axios from 'axios';
import { Loading } from 'quasar';

class ApiBase {
  constructor(url) {
    this.http = axios.create({
      baseURL: url,
      timeout: 1000,
      headers: {},
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

  get = () => this.http.get('/').data;

  post = (model) => this.http.post('/', model).data;

  update = (id, model) => this.http.put(`/${id}`, model).data;

  delete = (id) => this.http.delete(`/${id}`).data;
}

export default ServiceBase;
