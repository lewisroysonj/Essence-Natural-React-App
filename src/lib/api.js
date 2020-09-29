/** @format */

import axios from "axios";

let urls = {
  development: process.env.REACT_APP_API_DEV_PORT,
  production: process.env.REACT_APP_SERVER_PORT,
};

const api = axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});

export default api;
