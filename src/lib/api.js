/** @format */

import axios from "axios";
import Cookies from "js-cookie";

let urls = {
  development: process.env.REACT_APP_API_DEV_PORT,
  production: process.env.REACT_APP_SERVER_PORT,
};

const token = Cookies.get("token");

const api = axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
    Authorization: token ? `Bearer ${token}` : null,
  },
});

export default api;
