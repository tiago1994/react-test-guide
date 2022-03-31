import axios from "axios";

const basePath = "https://jsonplaceholder.typicode.com/";

export class TodoService {
  static get() {
    return axios.get(`${basePath}todos`);
  }

  static getById(id: number) {
    return axios.get(`${basePath}todos/${id}`);
  }
}
