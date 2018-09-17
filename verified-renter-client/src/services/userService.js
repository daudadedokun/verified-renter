import http from "./httpService";
import { apiURL } from "../config.json";

const apiEndPoint = apiURL + "/users";
export function getUsers() {
  return http.get(apiEndPoint);
}

export function deleteUser(userId) {
  return http.delete(apiEndPoint + "/" + userId);
}

export function getMyProfile() {
  return http.get(apiEndPoint + "/myProfile");
}

export function updateUserProfile(userId) {
  return http.put(apiEndPoint + "/" + userId);
}
