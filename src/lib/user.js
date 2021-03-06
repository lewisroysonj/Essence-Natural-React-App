/** @format */

import api from "./api";
import Cookies from "js-cookie";

export async function loadUserFromCookies() {
  try {
    const cookieUser = Cookies.get("token");
    if (cookieUser) {
      const user = await api.get(`/users/user`);
      return user.data.user;
    } else {
      return null;
    }
  } catch (err) {
    console.error("Load User Err: ", err);
  }
}

export function logOut() {
  Cookies.remove("token");
  window.location.pathname = "/signin";
}

export function checkUser() {
  let token = Cookies.get("token");
  if (token) {
    return true;
  } else {
    return false;
  }
}
