import { AxiosResponse } from "axios";

const axios = require("axios").default;
const API_URL = "https://api.covid19api.com";

const baseUrl = (path: string): string => {
  return `${API_URL}/${path}`;
};

export default class HTTPService {
  static get(path: string): Promise<any> {
    return axios({
      method: "get",
      url: baseUrl(path),
    })
      .then((response: AxiosResponse) => {
        return response;
      })
      .catch((err: string) => {
        throw new Error(err);
      });
  }
}
