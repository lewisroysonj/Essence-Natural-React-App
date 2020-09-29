/** @format */

import api from "./api";
import Cookies from "js-cookie";

export async function loadUserFromCookies() {
  try {
    const user = await api.get(`/users/user`);
    return user.data.user;
  } catch (err) {
    console.error("Cookies Err: ", err);
  }
}

export function logOut() {
  Cookies.remove("token");
  window.location.pathname = "/";
}
