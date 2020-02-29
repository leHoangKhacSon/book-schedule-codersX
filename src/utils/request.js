import axios from "axios";

export const request = (opts = {}, optsHeader = {}) => {
  const token = localStorage.getItem("token");
  const defaultOptions = {
    ...opts,
    headers: !token
      ? optsHeader
      : {
          ...optsHeader,
          Authorization: `Bearer ${token}`
        }
  };
  /*
  |--------------------------------------------------
  | Custom axios api
  |--------------------------------------------------
  */

  const axiosApi = axios.create({
    baseURL:
      process.env.REACT_APP_API_SERVER_URL + process.env.REACT_APP_API_URL,
    ...defaultOptions
  });

  return axiosApi;
};

export default request;
