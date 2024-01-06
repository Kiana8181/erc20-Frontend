import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Token: ${localStorage.getItem("tokenKey")}`,
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    axiosInstance.defaults.headers.Authorization = `Token: ${localStorage.getItem(
      "tokenKey"
    )}`;

    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };

  get = (id: number | string) => {
    axiosInstance.defaults.headers.Authorization = `Token: ${localStorage.getItem(
      "tokenKey"
    )}`;

    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  post = (config: AxiosRequestConfig, data?: any) => {
    axiosInstance.defaults.headers.Authorization = `Token: ${localStorage.getItem(
      "tokenKey"
    )}`;

    return axiosInstance
      .post<T>(this.endpoint, data, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
