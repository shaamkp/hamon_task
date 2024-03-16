import axios from "axios";

const instance = axios.create({
  baseURL: `https://run.mocky.io/v3/`,
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const responseBody = (response) => response.data;

const api = {
  get: (url, body, headers) =>
    instance.get(url, body, headers).then(responseBody),

  post: (url, body) => instance.post(url, body).then(responseBody),

  put: (url, body, headers) =>
    instance.put(url, body, headers).then(responseBody),

  patch: (url, body) => instance.patch(url, body).then(responseBody),

  delete: (url, body) => instance.delete(url, body).then(responseBody),
};

export default api;
