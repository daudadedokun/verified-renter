import http from "./httpService";
import jwtDecode from "jwt-decode";
import { apiURL } from "../config.json";

const apiEndPoint = apiURL + "/auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(usernameOrEmail, password) {
  const res = await http.post(apiEndPoint + "/signin", {
    usernameOrEmail,
    password
  });
  localStorage.setItem(tokenKey, res.data.accessToken);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function register(user) {
  return http.post(apiEndPoint + "/signup", {
    name: user.name,
    username: user.username,
    email: user.email,
    password: user.password
  });
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser,
  getJwt
};
